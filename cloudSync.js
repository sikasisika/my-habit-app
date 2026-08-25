// =========================================================
// 🔥 ゲームデータ共通 Firebase クラウド同期モジュール
// =========================================================
(function() {
  const firebaseConfig = {
    apiKey: "AIzaSyDe2qsA9wEb1z3993Cz2EBJR2LY4GzUibk",
    authDomain: "my-private-chat-d5464.firebaseapp.com",
    projectId: "my-private-chat-d5464",
    storageBucket: "my-private-chat-d5464.firebasestorage.app",
    messagingSenderId: "272901563642",
    appId: "1:272901563642:web:af2c6f6d57572e33c61543"
  };

  if (typeof firebase !== 'undefined') {
    if (!firebase.apps.length) {
      firebase.initializeApp(firebaseConfig);
    }
    const db = firebase.firestore();
    const gameDocRef = db.collection('app_data').doc('game_save_data');

    // クラウドからローカルへ同期
    gameDocRef.onSnapshot((doc) => {
      if (doc.exists) {
        const d = doc.data();
        if (d.coins !== undefined) localStorage.setItem('my_casino_coins', d.coins);
        if (d.inventory !== undefined) localStorage.setItem('my_gacha_inventory', JSON.stringify(d.inventory));
        if (d.levels !== undefined) localStorage.setItem('my_partner_levels', JSON.stringify(d.levels));
        if (d.party !== undefined) localStorage.setItem('my_battle_party', JSON.stringify(d.party));
        if (d.favorite !== undefined) localStorage.setItem('my_favorite_pokemon', d.favorite);
        if (d.maxStage !== undefined) localStorage.setItem('my_tower_max_stage', d.maxStage);
        if (d.seeds !== undefined) localStorage.setItem('my_battle_seeds', d.seeds);
        if (d.superSeed !== undefined) localStorage.setItem('my_super_seed', d.superSeed);
        
        // 画面側の更新関数があれば実行
        if (typeof window.onCloudSyncUpdated === 'function') {
          window.onCloudSyncUpdated();
        }
      } else {
        // 初回クラウド保存
        window.saveGameDataToCloud();
      }
    }, (err) => {
      console.error('Game Cloud Listen Error:', err);
    });

    // ローカルからクラウドへ保存するグローバル関数
    window.saveGameDataToCloud = async function() {
      const data = {
        coins: parseInt(localStorage.getItem('my_casino_coins') || '1000'),
        inventory: JSON.parse(localStorage.getItem('my_gacha_inventory') || '{"p0004":1}'),
        levels: JSON.parse(localStorage.getItem('my_partner_levels') || '{}'),
        party: JSON.parse(localStorage.getItem('my_battle_party') || '["p0004"]'),
        favorite: localStorage.getItem('my_favorite_pokemon') || 'p0004',
        maxStage: parseInt(localStorage.getItem('my_tower_max_stage') || '1'),
        seeds: parseInt(localStorage.getItem('my_battle_seeds') || '0'),
        superSeed: localStorage.getItem('my_super_seed') === 'true',
        updatedAt: firebase.firestore.FieldValue.serverTimestamp()
      };

      try {
        await gameDocRef.set(data, { merge: true });
      } catch (e) {
        console.error('Game Cloud Save Error:', e);
      }
    };
  }
})();
