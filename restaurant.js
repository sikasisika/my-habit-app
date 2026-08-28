// レストラン経営 タイムマネジメント・アクション ロジック

// ゲーム定数
const GAME_DURATION = 60; // 1回の営業時間（秒）
const ORDER_INTERVAL_MIN = 4000; // 注文の最小発生間隔 (ms)
const ORDER_INTERVAL_MAX = 7000; // 注文の最大発生間隔 (ms)
const ORDER_PATIENCE = 25000;    // お客さんの待ち時間 (ms)

// 状態管理
let gameState = {
  isPlaying: false,
  timeLeft: GAME_DURATION,
  currentScore: 0,
  servedCount: 0,
  missedCount: 0,
  
  // プレイヤーの手持ち（アイテム）
  // null | 'oren_raw' | 'oren_cut' | 'oren_cooked' | 'dish_ready' | 'burned'
  handItem: null,
  
  // まな板
  board: {
    item: null, // null | 'oren_raw' | 'oren_cut'
    progress: 0,
    required: 3, // 必要タップ数
  },
  
  // フライパン
  pan: {
    item: null, // null | 'oren_cut' | 'cooking' | 'cooked' | 'burned'
    cookTimer: 0,
    cookInterval: null,
  },
  
  // お皿・流し台
  cleanPlates: 3,
  dirtyPlates: 0,
  sinkProgress: 0,
  
  // 注文リスト [{ id, pokemon, expiresAt, maxPatience }]
  orders: [],
  
  timerInterval: null,
  orderSpawnerTimeout: null,
};

// アイテムの日本語表示名
const ITEM_NAMES = {
  oren_raw: '🫐 オレンのみ',
  oren_cut: '🔪 カットオレン',
  oren_cooked: '🥞 焼きオレン',
  dish_ready: '🍽️ オレンパンケーキ（完成）',
  burned: '💥 丸焦げ',
};

// 初期化
document.addEventListener('DOMContentLoaded', () => {
  loadGold();
  updateUI();
});

// ==========================================
// 所持金の読み込み・保存（他画面と共通）
// ==========================================
function getSavedGold() {
  const g = localStorage.getItem('habit_gold') || localStorage.getItem('player_gold') || '0';
  return parseInt(g, 10);
}

function saveGold(newAmount) {
  localStorage.setItem('habit_gold', newAmount.toString());
  localStorage.setItem('player_gold', newAmount.toString());
}

function loadGold() {
  const goldEl = document.getElementById('display-gold');
  if (goldEl) {
    goldEl.textContent = getSavedGold().toLocaleString();
  }
}

// ==========================================
// ゲーム開始・終了ループ
// ==========================================
function startGame() {
  if (gameState.isPlaying) return;

  // 状態のリセット
  gameState.isPlaying = true;
  gameState.timeLeft = GAME_DURATION;
  gameState.currentScore = 0;
  gameState.servedCount = 0;
  gameState.missedCount = 0;
  gameState.handItem = null;
  gameState.board = { item: null, progress: 0, required: 3 };
  gameState.pan = { item: null, cookTimer: 0, cookInterval: null };
  gameState.cleanPlates = 3;
  gameState.dirtyPlates = 0;
  gameState.sinkProgress = 0;
  gameState.orders = [];

  const startBtn = document.getElementById('btn-start');
  if (startBtn) {
    startBtn.disabled = true;
    startBtn.style.opacity = '0.5';
  }

  updateUI();

  // 1秒ごとのタイマー
  gameState.timerInterval = setInterval(() => {
    gameState.timeLeft--;
    
    // 注文の期限切れチェック
    const now = Date.now();
    gameState.orders = gameState.orders.filter(order => {
      if (order.expiresAt <= now) {
        gameState.missedCount++;
        return false;
      }
      return true;
    });

    updateUI();

    if (gameState.timeLeft <= 0) {
      endGame();
    }
  }, 1000);

  // 注文生成の開始
  spawnOrder();
}

function endGame() {
  gameState.isPlaying = false;
  clearInterval(gameState.timerInterval);
  clearTimeout(gameState.orderSpawnerTimeout);
  if (gameState.pan.cookInterval) clearInterval(gameState.pan.cookInterval);

  // 所持金に加算
  const totalGold = getSavedGold() + gameState.currentScore;
  saveGold(totalGold);
  loadGold();

  // リザルトモーダル表示
  document.getElementById('res-served').textContent = `${gameState.servedCount} 皿`;
  document.getElementById('res-missed').textContent = `${gameState.missedCount} 人`;
  document.getElementById('res-earnings').textContent = `+${gameState.currentScore.toLocaleString()} G`;
  document.getElementById('result-modal').style.display = 'flex';

  const startBtn = document.getElementById('btn-start');
  if (startBtn) {
    startBtn.disabled = false;
    startBtn.style.opacity = '1';
  }
}

function closeResultModal() {
  document.getElementById('result-modal').style.display = 'none';
  updateUI();
}

// ==========================================
// 注文（オーダー）生成
// ==========================================
function spawnOrder() {
  if (!gameState.isPlaying) return;

  if (gameState.orders.length < 4) {
    let customerName = 'ピカチュウ';
    let customerImg = 'images/gacha/p0025.png';

    // POKEMON_DATAが存在する場合はランダムに選出
    if (typeof POKEMON_DATA !== 'undefined' && POKEMON_DATA.length > 0) {
      const p = POKEMON_DATA[Math.floor(Math.random() * POKEMON_DATA.length)];
      customerName = p.name;
      customerImg = p.img;
    }

    gameState.orders.push({
      id: Date.now() + Math.random(),
      name: customerName,
      img: customerImg,
      menu: 'オレンパンケーキ',
      expiresAt: Date.now() + ORDER_PATIENCE,
      maxPatience: ORDER_PATIENCE
    });

    updateUI();
  }

  const nextSpawn = Math.floor(Math.random() * (ORDER_INTERVAL_MAX - ORDER_INTERVAL_MIN)) + ORDER_INTERVAL_MIN;
  gameState.orderSpawnerTimeout = setTimeout(spawnOrder, nextSpawn);
}

// ==========================================
// 各ステーションのタップ処理
// ==========================================
function handleStation(type) {
  if (!gameState.isPlaying) return;

  switch (type) {
    // 1. 食材棚（オレンのみ）
    case 'oren':
      if (gameState.handItem === null) {
        gameState.handItem = 'oren_raw';
      }
      break;

    // 2. まな板（カット）
    case 'board':
      if (gameState.handItem === 'oren_raw' && gameState.board.item === null) {
        gameState.board.item = 'oren_raw';
        gameState.board.progress = 0;
        gameState.handItem = null;
      } else if (gameState.board.item === 'oren_raw') {
        // タップでカット進捗アップ
        gameState.board.progress++;
        if (gameState.board.progress >= gameState.board.required) {
          gameState.board.item = 'oren_cut';
        }
      } else if (gameState.board.item === 'oren_cut' && gameState.handItem === null) {
        // カット済みの回収
        gameState.handItem = 'oren_cut';
        gameState.board.item = null;
        gameState.board.progress = 0;
      }
      break;

    // 3. フライパン（加熱）
    case 'pan':
      if (gameState.handItem === 'oren_cut' && gameState.pan.item === null) {
        gameState.pan.item = 'cooking';
        gameState.pan.cookTimer = 0;
        gameState.handItem = null;

        // 加熱タイマー開始
        gameState.pan.cookInterval = setInterval(() => {
          if (!gameState.isPlaying || gameState.pan.item === null) {
            clearInterval(gameState.pan.cookInterval);
            return;
          }
          gameState.pan.cookTimer += 0.5;

          if (gameState.pan.cookTimer >= 4 && gameState.pan.cookTimer < 9) {
            gameState.pan.item = 'cooked'; // 焼き上がり
          } else if (gameState.pan.cookTimer >= 9) {
            gameState.pan.item = 'burned'; // 焦げた
            clearInterval(gameState.pan.cookInterval);
          }
          updateUI();
        }, 500);
      } else if ((gameState.pan.item === 'cooked' || gameState.pan.item === 'burned') && gameState.handItem === null) {
        // フライパンから回収
        gameState.handItem = (gameState.pan.item === 'cooked') ? 'oren_cooked' : 'burned';
        gameState.pan.item = null;
        gameState.pan.cookTimer = 0;
        if (gameState.pan.cookInterval) clearInterval(gameState.pan.cookInterval);
      }
      break;

    // 4. お皿台（盛り付け）
    case 'plate':
      if (gameState.handItem === 'oren_cooked' && gameState.cleanPlates > 0) {
        gameState.cleanPlates--;
        gameState.handItem = 'dish_ready'; // 盛り付け完了
      }
      break;

    // 5. 提供カウンター
    case 'serve':
      if (gameState.handItem === 'dish_ready' && gameState.orders.length > 0) {
        // 最も待ち時間が短い注文に提供
        const servedOrder = gameState.orders.shift();
        
        // 報酬計算（残り時間が多いほどチップUP）
        const remainingPatienceRatio = (servedOrder.expiresAt - Date.now()) / servedOrder.maxPatience;
        const basePrice = 300;
        const tip = Math.floor(Math.max(0, remainingPatienceRatio) * 150);
        const earned = basePrice + tip;

        gameState.currentScore += earned;
        gameState.servedCount++;
        gameState.handItem = null;
        gameState.dirtyPlates++; // 汚れた皿が1枚発生
      }
      break;

    // 6. 流し台（皿洗い）
    case 'sink':
      if (gameState.dirtyPlates > 0) {
        gameState.sinkProgress++;
        if (gameState.sinkProgress >= 3) {
          gameState.dirtyPlates--;
          gameState.cleanPlates++;
          gameState.sinkProgress = 0;
        }
      }
      break;

    // 7. ゴミ箱
    case 'trash':
      if (gameState.handItem !== null) {
        gameState.handItem = null;
      }
      break;
  }

  updateUI();
}

// ==========================================
// 画面UIの更新
// ==========================================
function updateUI() {
  // スコア・タイマー
  const timerEl = document.getElementById('display-timer');
  const scoreEl = document.getElementById('display-score');
  const handEl = document.getElementById('hand-display');
  
  if (timerEl) timerEl.textContent = gameState.timeLeft;
  if (scoreEl) scoreEl.textContent = gameState.currentScore.toLocaleString();
  if (handEl) handEl.textContent = gameState.handItem ? ITEM_NAMES[gameState.handItem] : '（なし）';

  // 注文レーン
  const laneEl = document.getElementById('order-lane');
  const countEl = document.getElementById('order-count');
  if (laneEl) {
    laneEl.innerHTML = '';
    const now = Date.now();

    gameState.orders.forEach(order => {
      const remaining = Math.max(0, order.expiresAt - now);
      const ratio = Math.max(0, Math.min(100, (remaining / order.maxPatience) * 100));

      const card = document.createElement('div');
      card.className = 'order-card';
      card.innerHTML = `
        <div style="display: flex; align-items: center; gap: 6px;">
          <img src="${order.img}" style="width: 32px; height: 32px; object-fit: contain;" onerror="this.src='images/gacha/p0025.png'">
          <div style="font-size: 11px; font-weight: bold; overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">${order.name}</div>
        </div>
        <div style="font-size: 12px; color: var(--gold-color);">${order.menu}</div>
        <div class="order-timer-bar">
          <div class="order-timer-fill" style="width: ${ratio}%; background: ${ratio < 30 ? 'var(--danger-color)' : 'var(--success-color)'};"></div>
        </div>
      `;
      laneEl.appendChild(card);
    });

    if (countEl) countEl.textContent = `注文数: ${gameState.orders.length}`;
  }

  // まな板
  const boardStatusEl = document.getElementById('st-board-status');
  const boardProgEl = document.getElementById('st-board-progress');
  const boardFillEl = document.getElementById('st-board-fill');
  if (boardStatusEl) {
    if (gameState.board.item === 'oren_raw') {
      boardStatusEl.textContent = `切る！ (${gameState.board.progress}/${gameState.board.required})`;
      boardProgEl.style.display = 'block';
      boardFillEl.style.width = `${(gameState.board.progress / gameState.board.required) * 100}%`;
    } else if (gameState.board.item === 'oren_cut') {
      boardStatusEl.textContent = '完成！回収可';
      boardProgEl.style.display = 'none';
    } else {
      boardStatusEl.textContent = '空き';
      boardProgEl.style.display = 'none';
    }
  }

  // フライパン
  const panStatusEl = document.getElementById('st-pan-status');
  const panProgEl = document.getElementById('st-pan-progress');
  const panFillEl = document.getElementById('st-pan-fill');
  if (panStatusEl) {
    if (gameState.pan.item === 'cooking') {
      panStatusEl.textContent = '加熱中...';
      panProgEl.style.display = 'block';
      panFillEl.style.width = `${Math.min(100, (gameState.pan.cookTimer / 4) * 100)}%`;
      panFillEl.style.background = 'var(--accent-color)';
    } else if (gameState.pan.item === 'cooked') {
      panStatusEl.textContent = '焼けた！取って！';
      panProgEl.style.display = 'block';
      panFillEl.style.width = '100%';
      panFillEl.style.background = 'var(--success-color)';
    } else if (gameState.pan.item === 'burned') {
      panStatusEl.textContent = '焦げた！ゴミ箱へ';
      panProgEl.style.display = 'none';
    } else {
      panStatusEl.textContent = '空き';
      panProgEl.style.display = 'none';
    }
  }

  // お皿・流し台
  const plateStatusEl = document.getElementById('st-plate-status');
  const sinkStatusEl = document.getElementById('st-sink-status');
  if (plateStatusEl) plateStatusEl.textContent = `キレイな皿: ${gameState.cleanPlates}`;
  if (sinkStatusEl) {
    sinkStatusEl.textContent = gameState.dirtyPlates > 0 
      ? `汚れ皿: ${gameState.dirtyPlates} (洗う: ${gameState.sinkProgress}/3)`
      : '汚れ皿: 0';
  }
}
