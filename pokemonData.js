// 全ポケモンマスターデータ
// 通常: p0000 / メガ: -m (-x/-y/-z) / キョダイ: -k / リージョン: -a, -g, -h, -p
// size: S(小型: 95px), M(中型: 120px), L(大型: 145px), G(キョダイ・メガ: 175px/210px)
const POKEMON_DATA = [
  // 001 - 003 フシギダネ系統
  { id: 'p0001', name: 'フシギダネ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0001.png', rate: 30 },
  { id: 'p0002', name: 'フシギソウ', subName: '', type: 'くさ', size: 'M', rarity: 'R', img: 'images/gacha/p0002.png', rate: 20 },
  { id: 'p0003', name: 'フシギバナ', subName: '', type: 'くさ', size: 'L', rarity: 'SR', img: 'images/gacha/p0003.png', rate: 12 },
  { id: 'p0003-m', name: 'フシギバナ', subName: 'メガシンカ', type: 'くさ', size: 'G', rarity: 'SSR', img: 'images/gacha/p0003-m.png', rate: 7 },
  { id: 'p0003-k', name: 'フシギバナ', subName: 'キョダイマックス', type: 'くさ', size: 'G', rarity: 'UR', img: 'images/gacha/p0003-k.png', rate: 3 },

  // 004 - 006 ヒトカゲ系統
  { id: 'p0004', name: 'ヒトカゲ', subName: '', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0004.png', rate: 30 },
  { id: 'p0005', name: 'リザード', subName: '', type: 'ほのお', size: 'M', rarity: 'R', img: 'images/gacha/p0005.png', rate: 20 },
  { id: 'p0006', name: 'リザードン', subName: '', type: 'ほのお', size: 'L', rarity: 'SR', img: 'images/gacha/p0006.png', rate: 12 },
  { id: 'p0006-x', name: 'リザードン', subName: 'メガシンカ X', type: 'ほのお', size: 'G', rarity: 'SSR', img: 'images/gacha/p0006-x.png', rate: 7 },
  { id: 'p0006-y', name: 'リザードン', subName: 'メガシンカ Y', type: 'ほのお', size: 'G', rarity: 'SSR', img: 'images/gacha/p0006-y.png', rate: 7 },
  { id: 'p0006-k', name: 'リザードン', subName: 'キョダイマックス', type: 'ほのお', size: 'G', rarity: 'UR', img: 'images/gacha/p0006-k.png', rate: 3 },

  // 007 - 009 ゼニガメ系統
  { id: 'p0007', name: 'ゼニガメ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0007.png', rate: 30 },
  { id: 'p0008', name: 'カメール', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0008.png', rate: 20 },
  { id: 'p0009', name: 'カメックス', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0009.png', rate: 12 },
  { id: 'p0009-m', name: 'カメックス', subName: 'メガシンカ', type: 'みず', size: 'G', rarity: 'SSR', img: 'images/gacha/p0009-m.png', rate: 7 },
  { id: 'p0009-k', name: 'カメックス', subName: 'キョダイマックス', type: 'みず', size: 'G', rarity: 'UR', img: 'images/gacha/p0009-k.png', rate: 3 },

  // 010 - 012 キャタピー系統
  { id: 'p0010', name: 'キャタピー', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0010.png', rate: 30 },
  { id: 'p0011', name: 'トランセル', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0011.png', rate: 30 },
  { id: 'p0012', name: 'バタフリー', subName: '', type: 'むし', size: 'M', rarity: 'SR', img: 'images/gacha/p0012.png', rate: 12 },
  { id: 'p0012-k', name: 'バタフリー', subName: 'キョダイマックス', type: 'むし', size: 'G', rarity: 'UR', img: 'images/gacha/p0012-k.png', rate: 3 },

  // 013 - 015 ビードル系統
  { id: 'p0013', name: 'ビードル', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0013.png', rate: 30 },
  { id: 'p0014', name: 'コクーン', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0014.png', rate: 30 },
  { id: 'p0015', name: 'スピアー', subName: '', type: 'むし', size: 'M', rarity: 'SR', img: 'images/gacha/p0015.png', rate: 12 },
  { id: 'p0015-m', name: 'スピアー', subName: 'メガシンカ', type: 'むし', size: 'G', rarity: 'SSR', img: 'images/gacha/p0015-m.png', rate: 7 },

  // 016 - 018 ポッポ系統
  { id: 'p0016', name: 'ポッポ', subName: '', type: 'ひこう', size: 'S', rarity: 'N', img: 'images/gacha/p0016.png', rate: 30 },
  { id: 'p0017', name: 'ピジョン', subName: '', type: 'ひこう', size: 'M', rarity: 'R', img: 'images/gacha/p0017.png', rate: 20 },
  { id: 'p0018', name: 'ピジョット', subName: '', type: 'ひこう', size: 'L', rarity: 'SR', img: 'images/gacha/p0018.png', rate: 12 },
  { id: 'p0018-m', name: 'ピジョット', subName: 'メガシンカ', type: 'ひこう', size: 'G', rarity: 'SSR', img: 'images/gacha/p0018-m.png', rate: 7 },

  // 019 - 020 コラッタ系統
  { id: 'p0019', name: 'コラッタ', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0019.png', rate: 30 },
  { id: 'p0019-a', name: 'コラッタ', subName: 'アローラのすがた', type: 'あく', size: 'S', rarity: 'N', img: 'images/gacha/p0019-a.png', rate: 30 },
  { id: 'p0020', name: 'ラッタ', subName: '', type: 'ノーマル', size: 'M', rarity: 'R', img: 'images/gacha/p0020.png', rate: 20 },
  { id: 'p0020-a', name: 'ラッタ', subName: 'アローラのすがた', type: 'あく', size: 'M', rarity: 'R', img: 'images/gacha/p0020-a.png', rate: 20 },

  // 021 - 022 オニスズメ系統
  { id: 'p0021', name: 'オニスズメ', subName: '', type: 'ひこう', size: 'S', rarity: 'N', img: 'images/gacha/p0021.png', rate: 30 },
  { id: 'p0022', name: 'オニドリル', subName: '', type: 'ひこう', size: 'M', rarity: 'R', img: 'images/gacha/p0022.png', rate: 20 },

  // 023 - 024 アーボ系統
  { id: 'p0023', name: 'アーボ', subName: '', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0023.png', rate: 30 },
  { id: 'p0024', name: 'アーボック', subName: '', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0024.png', rate: 12 },

  // 025 - 026 ピカチュウ系統
  { id: 'p0025', name: 'ピカチュウ', subName: '', type: 'でんき', size: 'S', rarity: 'R', img: 'images/gacha/p0025.png', rate: 20 },
  { id: 'p0025-k', name: 'ピカチュウ', subName: 'キョダイマックス', type: 'でんき', size: 'G', rarity: 'UR', img: 'images/gacha/p0025-k.png', rate: 3 },
  { id: 'p0026', name: 'ライチュウ', subName: '', type: 'でんき', size: 'M', rarity: 'SR', img: 'images/gacha/p0026.png', rate: 12 },
  { id: 'p0026-a', name: 'ライチュウ', subName: 'アローラのすがた', type: 'でんき', size: 'M', rarity: 'SR', img: 'images/gacha/p0026-a.png', rate: 12 },

  // 027 - 028 サンド系統
  { id: 'p0027', name: 'サンド', subName: '', type: 'じめん', size: 'S', rarity: 'N', img: 'images/gacha/p0027.png', rate: 30 },
  { id: 'p0027-a', name: 'サンド', subName: 'アローラのすがた', type: 'こおり', size: 'S', rarity: 'N', img: 'images/gacha/p0027-a.png', rate: 30 },
  { id: 'p0028', name: 'サンドパン', subName: '', type: 'じめん', size: 'M', rarity: 'R', img: 'images/gacha/p0028.png', rate: 20 },
  { id: 'p0028-a', name: 'サンドパン', subName: 'アローラのすがた', type: 'こおり', size: 'M', rarity: 'R', img: 'images/gacha/p0028-a.png', rate: 20 },

  // 029 - 031 ニドラン♀系統
  { id: 'p0029', name: 'ニドラン♀', subName: '', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0029.png', rate: 30 },
  { id: 'p0030', name: 'ニドリーナ', subName: '', type: 'どく', size: 'M', rarity: 'R', img: 'images/gacha/p0030.png', rate: 20 },
  { id: 'p0031', name: 'ニドクイン', subName: '', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0031.png', rate: 12 },

  // 032 - 034 ニドラン♂系統
  { id: 'p0032', name: 'ニドラン♂', subName: '', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0032.png', rate: 30 },
  { id: 'p0033', name: 'ニドリーノ', subName: '', type: 'どく', size: 'M', rarity: 'R', img: 'images/gacha/p0033.png', rate: 20 },
  { id: 'p0034', name: 'ニドキング', subName: '', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0034.png', rate: 12 },

  // 035 - 036 ピッピ系統
  { id: 'p0035', name: 'ピッピ', subName: '', type: 'フェアリー', size: 'S', rarity: 'N', img: 'images/gacha/p0035.png', rate: 30 },
  { id: 'p0036', name: 'ピクシー', subName: '', type: 'フェアリー', size: 'M', rarity: 'SR', img: 'images/gacha/p0036.png', rate: 12 },

  // 037 - 038 ロコン系統
  { id: 'p0037', name: 'ロコン', subName: '', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0037.png', rate: 30 },
  { id: 'p0037-a', name: 'ロコン', subName: 'アローラのすがた', type: 'こおり', size: 'S', rarity: 'N', img: 'images/gacha/p0037-a.png', rate: 30 },
  { id: 'p0038', name: 'キュウコン', subName: '', type: 'ほのお', size: 'M', rarity: 'SR', img: 'images/gacha/p0038.png', rate: 12 },
  { id: 'p0038-a', name: 'キュウコン', subName: 'アローラのすがた', type: 'こおり', size: 'M', rarity: 'SR', img: 'images/gacha/p0038-a.png', rate: 12 },

  // 039 - 040 プリン系統
  { id: 'p0039', name: 'プリン', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0039.png', rate: 30 },
  { id: 'p0040', name: 'プクリン', subName: '', type: 'ノーマル', size: 'M', rarity: 'SR', img: 'images/gacha/p0040.png', rate: 12 },

  // 041 - 042 ズバット系統
  { id: 'p0041', name: 'ズバット', subName: '', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0041.png', rate: 30 },
  { id: 'p0042', name: 'ゴルバット', subName: '', type: 'どく', size: 'M', rarity: 'R', img: 'images/gacha/p0042.png', rate: 20 },

  // 043 - 045 ナゾノクサ系統
  { id: 'p0043', name: 'ナゾノクサ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0043.png', rate: 30 },
  { id: 'p0044', name: 'クサイハナ', subName: '', type: 'くさ', size: 'S', rarity: 'R', img: 'images/gacha/p0044.png', rate: 20 },
  { id: 'p0045', name: 'ラフレシア', subName: '', type: 'くさ', size: 'M', rarity: 'SR', img: 'images/gacha/p0045.png', rate: 12 },

  // 046 - 047 パラス系統
  { id: 'p0046', name: 'パラス', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0046.png', rate: 30 },
  { id: 'p0047', name: 'パラセクト', subName: '', type: 'むし', size: 'M', rarity: 'R', img: 'images/gacha/p0047.png', rate: 20 },

  // 048 - 049 コンパン系統
  { id: 'p0048', name: 'コンパン', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0048.png', rate: 30 },
  { id: 'p0049', name: 'モルフォン', subName: '', type: 'むし', size: 'M', rarity: 'R', img: 'images/gacha/p0049.png', rate: 20 },

  // 050 - 051 ディグダ系統
  { id: 'p0050', name: 'ディグダ', subName: '', type: 'じめん', size: 'S', rarity: 'N', img: 'images/gacha/p0050.png', rate: 30 },
  { id: 'p0050-a', name: 'ディグダ', subName: 'アローラのすがた', type: 'じめん', size: 'S', rarity: 'N', img: 'images/gacha/p0050-a.png', rate: 30 },
  { id: 'p0051', name: 'ダグトリオ', subName: '', type: 'じめん', size: 'M', rarity: 'R', img: 'images/gacha/p0051.png', rate: 20 },
  { id: 'p0051-a', name: 'ダグトリオ', subName: 'アローラのすがた', type: 'じめん', size: 'M', rarity: 'R', img: 'images/gacha/p0051-a.png', rate: 20 },

  // 052 - 053 ニャース系統
  { id: 'p0052', name: 'ニャース', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0052.png', rate: 30 },
  { id: 'p0052-a', name: 'ニャース', subName: 'アローラのすがた', type: 'あく', size: 'S', rarity: 'N', img: 'images/gacha/p0052-a.png', rate: 30 },
  { id: 'p0052-g', name: 'ニャース', subName: 'ガラルのすがた', type: 'はがね', size: 'S', rarity: 'N', img: 'images/gacha/p0052-g.png', rate: 30 },
  { id: 'p0052-k', name: 'ニャース', subName: 'キョダイマックス', type: 'ノーマル', size: 'G', rarity: 'UR', img: 'images/gacha/p0052-k.png', rate: 3 },
  { id: 'p0053', name: 'ペルシアン', subName: '', type: 'ノーマル', size: 'M', rarity: 'R', img: 'images/gacha/p0053.png', rate: 20 },
  { id: 'p0053-a', name: 'ペルシアン', subName: 'アローラのすがた', type: 'あく', size: 'M', rarity: 'R', img: 'images/gacha/p0053-a.png', rate: 20 },

  // 054 - 055 コダック系統
  { id: 'p0054', name: 'コダック', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0054.png', rate: 30 },
  { id: 'p0055', name: 'ゴルダック', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0055.png', rate: 20 },

  // 056 - 057 マンキー系統
  { id: 'p0056', name: 'マンキー', subName: '', type: 'かくとう', size: 'S', rarity: 'N', img: 'images/gacha/p0056.png', rate: 30 },
  { id: 'p0057', name: 'オコリザル', subName: '', type: 'かくとう', size: 'M', rarity: 'R', img: 'images/gacha/p0057.png', rate: 20 },

  // 058 - 059 ガーディ系統
  { id: 'p0058', name: 'ガーディ', subName: '', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0058.png', rate: 30 },
  { id: 'p0058-h', name: 'ガーディ', subName: 'ヒスイのすがた', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0058-h.png', rate: 30 },
  { id: 'p0059', name: 'ウィンディ', subName: '', type: 'ほのお', size: 'L', rarity: 'SR', img: 'images/gacha/p0059.png', rate: 12 },
  { id: 'p0059-h', name: 'ウィンディ', subName: 'ヒスイのすがた', type: 'ほのお', size: 'L', rarity: 'SR', img: 'images/gacha/p0059-h.png', rate: 12 },

  // 060 - 062 ニョロモ系統
  { id: 'p0060', name: 'ニョロモ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0060.png', rate: 30 },
  { id: 'p0061', name: 'ニョロゾ', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0061.png', rate: 20 },
  { id: 'p0062', name: 'ニョロボン', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0062.png', rate: 12 },

  // 063 - 065 ケーシィ系統
  { id: 'p0063', name: 'ケーシィ', subName: '', type: 'エスパー', size: 'S', rarity: 'N', img: 'images/gacha/p0063.png', rate: 30 },
  { id: 'p0064', name: 'ユンゲラー', subName: '', type: 'エスパー', size: 'M', rarity: 'R', img: 'images/gacha/p0064.png', rate: 20 },
  { id: 'p0065', name: 'フーディン', subName: '', type: 'エスパー', size: 'L', rarity: 'SR', img: 'images/gacha/p0065.png', rate: 12 },
  { id: 'p0065-m', name: 'フーディン', subName: 'メガシンカ', type: 'エスパー', size: 'G', rarity: 'SSR', img: 'images/gacha/p0065-m.png', rate: 7 },

  // 066 - 068 ワンリキー系統
  { id: 'p0066', name: 'ワンリキー', subName: '', type: 'かくとう', size: 'S', rarity: 'N', img: 'images/gacha/p0066.png', rate: 30 },
  { id: 'p0067', name: 'ゴーリキー', subName: '', type: 'かくとう', size: 'M', rarity: 'R', img: 'images/gacha/p0067.png', rate: 20 },
  { id: 'p0068', name: 'カイリキー', subName: '', type: 'かくとう', size: 'L', rarity: 'SR', img: 'images/gacha/p0068.png', rate: 12 },
  { id: 'p0068-k', name: 'カイリキー', subName: 'キョダイマックス', type: 'かくとう', size: 'G', rarity: 'UR', img: 'images/gacha/p0068-k.png', rate: 3 },

  // 069 - 071 マダツボミ系統
  { id: 'p0069', name: 'マダツボミ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0069.png', rate: 30 },
  { id: 'p0070', name: 'ウツドン', subName: '', type: 'くさ', size: 'M', rarity: 'R', img: 'images/gacha/p0070.png', rate: 20 },
  { id: 'p0071', name: 'ウツボット', subName: '', type: 'くさ', size: 'L', rarity: 'SR', img: 'images/gacha/p0071.png', rate: 12 },

  // 072 - 073 メノクラゲ系統
  { id: 'p0072', name: 'メノクラゲ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0072.png', rate: 30 },
  { id: 'p0073', name: 'ドククラゲ', subName: '', type: 'みず', size: 'L', rarity: 'R', img: 'images/gacha/p0073.png', rate: 20 },

  // 074 - 076 イシツブテ系統
  { id: 'p0074', name: 'イシツブテ', subName: '', type: 'いわ', size: 'S', rarity: 'N', img: 'images/gacha/p0074.png', rate: 30 },
  { id: 'p0074-a', name: 'イシツブテ', subName: 'アローラのすがた', type: 'いわ', size: 'S', rarity: 'N', img: 'images/gacha/p0074-a.png', rate: 30 },
  { id: 'p0075', name: 'ゴローン', subName: '', type: 'いわ', size: 'M', rarity: 'R', img: 'images/gacha/p0075.png', rate: 20 },
  { id: 'p0075-a', name: 'ゴローン', subName: 'アローラのすがた', type: 'いわ', size: 'M', rarity: 'R', img: 'images/gacha/p0075-a.png', rate: 20 },
  { id: 'p0076', name: 'ゴローニャ', subName: '', type: 'いわ', size: 'L', rarity: 'SR', img: 'images/gacha/p0076.png', rate: 12 },
  { id: 'p0076-a', name: 'ゴローニャ', subName: 'アローラのすがた', type: 'いわ', size: 'L', rarity: 'SR', img: 'images/gacha/p0076-a.png', rate: 12 },

  // 077 - 078 ポニータ系統
  { id: 'p0077', name: 'ポニータ', subName: '', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0077.png', rate: 30 },
  { id: 'p0077-g', name: 'ポニータ', subName: 'ガラルのすがた', type: 'エスパー', size: 'S', rarity: 'N', img: 'images/gacha/p0077-g.png', rate: 30 },
  { id: 'p0078', name: 'ギャロップ', subName: '', type: 'ほのお', size: 'L', rarity: 'SR', img: 'images/gacha/p0078.png', rate: 12 },
  { id: 'p0078-g', name: 'ギャロップ', subName: 'ガラルのすがた', type: 'エスパー', size: 'L', rarity: 'SR', img: 'images/gacha/p0078-g.png', rate: 12 },

  // 079 - 080 ヤドン系統
  { id: 'p0079', name: 'ヤドン', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0079.png', rate: 30 },
  { id: 'p0079-g', name: 'ヤドン', subName: 'ガラルのすがた', type: 'エスパー', size: 'S', rarity: 'N', img: 'images/gacha/p0079-g.png', rate: 30 },
  { id: 'p0080', name: 'ヤドラン', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0080.png', rate: 12 },
  { id: 'p0080-m', name: 'ヤドラン', subName: 'メガシンカ', type: 'みず', size: 'G', rarity: 'SSR', img: 'images/gacha/p0080-m.png', rate: 7 },
  { id: 'p0080-g', name: 'ヤドラン', subName: 'ガラルのすがた', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0080-g.png', rate: 12 },

  // 081 - 082 コイル系統
  { id: 'p0081', name: 'コイル', subName: '', type: 'でんき', size: 'S', rarity: 'N', img: 'images/gacha/p0081.png', rate: 30 },
  { id: 'p0082', name: 'レアコイル', subName: '', type: 'でんき', size: 'M', rarity: 'R', img: 'images/gacha/p0082.png', rate: 20 },

  // 083 カモネギ
  { id: 'p0083', name: 'カモネギ', subName: '', type: 'ノーマル', size: 'S', rarity: 'R', img: 'images/gacha/p0083.png', rate: 20 },
  { id: 'p0083-g', name: 'カモネギ', subName: 'ガラルのすがた', type: 'かくとう', size: 'S', rarity: 'R', img: 'images/gacha/p0083-g.png', rate: 20 },

  // 084 - 085 ドードー系統
  { id: 'p0084', name: 'ドードー', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0084.png', rate: 30 },
  { id: 'p0085', name: 'ドードリオ', subName: '', type: 'ノーマル', size: 'L', rarity: 'R', img: 'images/gacha/p0085.png', rate: 20 },

  // 086 - 087 パウワウ系統
  { id: 'p0086', name: 'パウワウ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0086.png', rate: 30 },
  { id: 'p0087', name: 'ジュゴン', subName: '', type: 'こおり', size: 'L', rarity: 'R', img: 'images/gacha/p0087.png', rate: 20 },

  // 088 - 089 ベトベター系統
  { id: 'p0088', name: 'ベトベター', subName: '', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0088.png', rate: 30 },
  { id: 'p0088-a', name: 'ベトベター', subName: 'アローラのすがた', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0088-a.png', rate: 30 },
  { id: 'p0089', name: 'ベトベトン', subName: '', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0089.png', rate: 12 },
  { id: 'p0089-a', name: 'ベトベトン', subName: 'アローラのすがた', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0089-a.png', rate: 12 },

  // 090 - 091 シェルダー系統
  { id: 'p0090', name: 'シェルダー', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0090.png', rate: 30 },
  { id: 'p0091', name: 'パルシェン', subName: '', type: 'こおり', size: 'L', rarity: 'SR', img: 'images/gacha/p0091.png', rate: 12 },

  // 092 - 094 ゴース系統
  { id: 'p0092', name: 'ゴース', subName: '', type: 'ゴースト', size: 'S', rarity: 'N', img: 'images/gacha/p0092.png', rate: 30 },
  { id: 'p0093', name: 'ゴースト', subName: '', type: 'ゴースト', size: 'M', rarity: 'R', img: 'images/gacha/p0093.png', rate: 20 },
  { id: 'p0094', name: 'ゲンガー', subName: '', type: 'ゴースト', size: 'L', rarity: 'SR', img: 'images/gacha/p0094.png', rate: 12 },
  { id: 'p0094-m', name: 'ゲンガー', subName: 'メガシンカ', type: 'ゴースト', size: 'G', rarity: 'SSR', img: 'images/gacha/p0094-m.png', rate: 7 },
  { id: 'p0094-k', name: 'ゲンガー', subName: 'キョダイマックス', type: 'ゴースト', size: 'G', rarity: 'UR', img: 'images/gacha/p0094-k.png', rate: 3 },

  // 095 イワーク
  { id: 'p0095', name: 'イワーク', subName: '', type: 'いわ', size: 'L', rarity: 'R', img: 'images/gacha/p0095.png', rate: 20 },

  // 096 - 097 スリープ系統
  { id: 'p0096', name: 'スリープ', subName: '', type: 'エスパー', size: 'S', rarity: 'N', img: 'images/gacha/p0096.png', rate: 30 },
  { id: 'p0097', name: 'スリーパー', subName: '', type: 'エスパー', size: 'M', rarity: 'R', img: 'images/gacha/p0097.png', rate: 20 },

  // 098 - 099 クラブ系統
  { id: 'p0098', name: 'クラブ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0098.png', rate: 30 },
  { id: 'p0099', name: 'キングラー', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0099.png', rate: 12 },
  { id: 'p0099-k', name: 'キングラー', subName: 'キョダイマックス', type: 'みず', size: 'G', rarity: 'UR', img: 'images/gacha/p0099-k.png', rate: 3 },

  // 100 - 101 ビリリダマ系統
  { id: 'p0100', name: 'ビリリダマ', subName: '', type: 'でんき', size: 'S', rarity: 'N', img: 'images/gacha/p0100.png', rate: 30 },
  { id: 'p0100-h', name: 'ビリリダマ', subName: 'ヒスイのすがた', type: 'でんき', size: 'S', rarity: 'N', img: 'images/gacha/p0100-h.png', rate: 30 },
  { id: 'p0101', name: 'マルマイン', subName: '', type: 'でんき', size: 'M', rarity: 'R', img: 'images/gacha/p0101.png', rate: 20 },
  { id: 'p0101-h', name: 'マルマイン', subName: 'ヒスイのすがた', type: 'でんき', size: 'M', rarity: 'R', img: 'images/gacha/p0101-h.png', rate: 20 },

  // 102 - 103 タマタマ系統
  { id: 'p0102', name: 'タマタマ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0102.png', rate: 30 },
  { id: 'p0103', name: 'ナッシー', subName: '', type: 'くさ', size: 'L', rarity: 'SR', img: 'images/gacha/p0103.png', rate: 12 },
  { id: 'p0103-a', name: 'ナッシー', subName: 'アローラのすがた', type: 'くさ', size: 'G', rarity: 'SR', img: 'images/gacha/p0103-a.png', rate: 12 },

  // 104 - 105 カラカラ系統
  { id: 'p0104', name: 'カラカラ', subName: '', type: 'じめん', size: 'S', rarity: 'N', img: 'images/gacha/p0104.png', rate: 30 },
  { id: 'p0105', name: 'ガラガラ', subName: '', type: 'じめん', size: 'M', rarity: 'R', img: 'images/gacha/p0105.png', rate: 20 },
  { id: 'p0105-a', name: 'ガラガラ', subName: 'アローラのすがた', type: 'ほのお', size: 'M', rarity: 'SR', img: 'images/gacha/p0105-a.png', rate: 12 },

  // 106 - 107 サワムラー・エビワラー
  { id: 'p0106', name: 'サワムラー', subName: '', type: 'かくとう', size: 'M', rarity: 'SR', img: 'images/gacha/p0106.png', rate: 12 },
  { id: 'p0107', name: 'エビワラー', subName: '', type: 'かくとう', size: 'M', rarity: 'SR', img: 'images/gacha/p0107.png', rate: 12 },

  // 108 ベロリンガ
  { id: 'p0108', name: 'ベロリンガ', subName: '', type: 'ノーマル', size: 'M', rarity: 'N', img: 'images/gacha/p0108.png', rate: 30 },

  // 109 - 110 ドガース系統
  { id: 'p0109', name: 'ドガース', subName: '', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0109.png', rate: 30 },
  { id: 'p0110', name: 'マタドガス', subName: '', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0110.png', rate: 12 },
  { id: 'p0110-g', name: 'マタドガス', subName: 'ガラルのすがた', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0110-g.png', rate: 12 },

  // 111 - 112 サイホーン系統
  { id: 'p0111', name: 'サイホーン', subName: '', type: 'じめん', size: 'M', rarity: 'N', img: 'images/gacha/p0111.png', rate: 30 },
  { id: 'p0112', name: 'サイドン', subName: '', type: 'じめん', size: 'L', rarity: 'SR', img: 'images/gacha/p0112.png', rate: 12 },

  // 113 ラッキー
  { id: 'p0113', name: 'ラッキー', subName: '', type: 'ノーマル', size: 'M', rarity: 'SR', img: 'images/gacha/p0113.png', rate: 12 },

  // 114 モンジャラ
  { id: 'p0114', name: 'モンジャラ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0114.png', rate: 30 },

  // 115 ガルーラ
  { id: 'p0115', name: 'ガルーラ', subName: '', type: 'ノーマル', size: 'L', rarity: 'SR', img: 'images/gacha/p0115.png', rate: 12 },
  { id: 'p0115-m', name: 'ガルーラ', subName: 'メガシンカ', type: 'ノーマル', size: 'G', rarity: 'SSR', img: 'images/gacha/p0115-m.png', rate: 7 },

  // 116 - 117 タッツー系統
  { id: 'p0116', name: 'タッツー', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0116.png', rate: 30 },
  { id: 'p0117', name: 'シードラ', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0117.png', rate: 20 },

  // 118 - 119 トサキント系統
  { id: 'p0118', name: 'トサキント', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0118.png', rate: 30 },
  { id: 'p0119', name: 'アズマオウ', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0119.png', rate: 20 },

  // 120 - 121 ヒトデマン系統
  { id: 'p0120', name: 'ヒトデマン', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0120.png', rate: 30 },
  { id: 'p0121', name: 'スターミー', subName: '', type: 'みず', size: 'M', rarity: 'SR', img: 'images/gacha/p0121.png', rate: 12 },

  // 122 バリヤード
  { id: 'p0122', name: 'バリヤード', subName: '', type: 'エスパー', size: 'M', rarity: 'R', img: 'images/gacha/p0122.png', rate: 20 },
  { id: 'p0122-g', name: 'バリヤード', subName: 'ガラルのすがた', type: 'こおり', size: 'M', rarity: 'R', img: 'images/gacha/p0122-g.png', rate: 20 },

  // 123 ストライク
  { id: 'p0123', name: 'ストライク', subName: '', type: 'むし', size: 'L', rarity: 'SR', img: 'images/gacha/p0123.png', rate: 12 },

  // 124 ルージュラ
  { id: 'p0124', name: 'ルージュラ', subName: '', type: 'こおり', size: 'M', rarity: 'R', img: 'images/gacha/p0124.png', rate: 20 },

  // 125 エレブー
  { id: 'p0125', name: 'エレブー', subName: '', type: 'でんき', size: 'M', rarity: 'SR', img: 'images/gacha/p0125.png', rate: 12 },

  // 126 ブーバー
  { id: 'p0126', name: 'ブーバー', subName: '', type: 'ほのお', size: 'M', rarity: 'SR', img: 'images/gacha/p0126.png', rate: 12 },

  // 127 カイロス
  { id: 'p0127', name: 'カイロス', subName: '', type: 'むし', size: 'M', rarity: 'SR', img: 'images/gacha/p0127.png', rate: 12 },
  { id: 'p0127-m', name: 'カイロス', subName: 'メガシンカ', type: 'むし', size: 'G', rarity: 'SSR', img: 'images/gacha/p0127-m.png', rate: 7 },

  // 128 ケンタロス
  { id: 'p0128', name: 'ケンタロス', subName: '', type: 'ノーマル', size: 'L', rarity: 'SR', img: 'images/gacha/p0128.png', rate: 12 },
  { id: 'p0128-pk', name: 'ケンタロス', subName: 'コンバットしゅ', type: 'かくとう', size: 'L', rarity: 'SR', img: 'images/gacha/p0128-pk.png', rate: 12 },
  { id: 'p0128-pb', name: 'ケンタロス', subName: 'ブレイズしゅ', type: 'ほのお', size: 'L', rarity: 'SR', img: 'images/gacha/p0128-pb.png', rate: 12 },
  { id: 'p0128-pw', name: 'ケンタロス', subName: 'ウォーターしゅ', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0128-pw.png', rate: 12 },

  // 129 - 130 コイキング系統
  { id: 'p0129', name: 'コイキング', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0129.png', rate: 30 },
  { id: 'p0130', name: 'ギャラドス', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0130.png', rate: 12 },
  { id: 'p0130-m', name: 'ギャラドス', subName: 'メガシンカ', type: 'みず', size: 'G', rarity: 'SSR', img: 'images/gacha/p0130-m.png', rate: 7 },

  // 131 ラプラス
  { id: 'p0131', name: 'ラプラス', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0131.png', rate: 12 },
  { id: 'p0131-k', name: 'ラプラス', subName: 'キョダイマックス', type: 'みず', size: 'G', rarity: 'UR', img: 'images/gacha/p0131-k.png', rate: 3 },

  // 132 メタモン
  { id: 'p0132', name: 'メタモン', subName: '', type: 'ノーマル', size: 'S', rarity: 'R', img: 'images/gacha/p0132.png', rate: 20 },

  // 133 - 136 イーブイ系統
  { id: 'p0133', name: 'イーブイ', subName: '', type: 'ノーマル', size: 'S', rarity: 'R', img: 'images/gacha/p0133.png', rate: 20 },
  { id: 'p0133-k', name: 'イーブイ', subName: 'キョダイマックス', type: 'ノーマル', size: 'G', rarity: 'UR', img: 'images/gacha/p0133-k.png', rate: 3 },
  { id: 'p0134', name: 'シャワーズ', subName: '', type: 'みず', size: 'M', rarity: 'SR', img: 'images/gacha/p0134.png', rate: 12 },
  { id: 'p0135', name: 'サンダース', subName: '', type: 'でんき', size: 'M', rarity: 'SR', img: 'images/gacha/p0135.png', rate: 12 },
  { id: 'p0136', name: 'ブースター', subName: '', type: 'ほのお', size: 'M', rarity: 'SR', img: 'images/gacha/p0136.png', rate: 12 },

  // 137 ポリゴン
  { id: 'p0137', name: 'ポリゴン', subName: '', type: 'ノーマル', size: 'S', rarity: 'R', img: 'images/gacha/p0137.png', rate: 20 },

  // 138 - 139 オムナイト系統
  { id: 'p0138', name: 'オムナイト', subName: '', type: 'いわ', size: 'S', rarity: 'N', img: 'images/gacha/p0138.png', rate: 30 },
  { id: 'p0139', name: 'オムスター', subName: '', type: 'いわ', size: 'M', rarity: 'SR', img: 'images/gacha/p0139.png', rate: 12 },

  // 140 - 141 カブト系統
  { id: 'p0140', name: 'カブト', subName: '', type: 'いわ', size: 'S', rarity: 'N', img: 'images/gacha/p0140.png', rate: 30 },
  { id: 'p0141', name: 'カブトプス', subName: '', type: 'いわ', size: 'L', rarity: 'SR', img: 'images/gacha/p0141.png', rate: 12 },

  // 142 プテラ
  { id: 'p0142', name: 'プテラ', subName: '', type: 'いわ', size: 'L', rarity: 'SR', img: 'images/gacha/p0142.png', rate: 12 },
  { id: 'p0142-m', name: 'プテラ', subName: 'メガシンカ', type: 'いわ', size: 'G', rarity: 'SSR', img: 'images/gacha/p0142-m.png', rate: 7 },

  // 143 カビゴン
  { id: 'p0143', name: 'カビゴン', subName: '', type: 'ノーマル', size: 'L', rarity: 'SR', img: 'images/gacha/p0143.png', rate: 12 },
  { id: 'p0143-k', name: 'カビゴン', subName: 'キョダイマックス', type: 'ノーマル', size: 'G', rarity: 'UR', img: 'images/gacha/p0143-k.png', rate: 3 },

  // 144 - 146 三鳥
  { id: 'p0144', name: 'フリーザー', subName: '', type: 'こおり', size: 'L', rarity: 'SSR', img: 'images/gacha/p0144.png', rate: 7 },
  { id: 'p0144-g', name: 'フリーザー', subName: 'ガラルのすがた', type: 'エスパー', size: 'L', rarity: 'SSR', img: 'images/gacha/p0144-g.png', rate: 7 },
  { id: 'p0145', name: 'サンダー', subName: '', type: 'でんき', size: 'L', rarity: 'SSR', img: 'images/gacha/p0145.png', rate: 7 },
  { id: 'p0145-g', name: 'サンダー', subName: 'ガラルのすがた', type: 'かくとう', size: 'L', rarity: 'SSR', img: 'images/gacha/p0145-g.png', rate: 7 },
  { id: 'p0146', name: 'ファイヤー', subName: '', type: 'ほのお', size: 'L', rarity: 'SSR', img: 'images/gacha/p0146.png', rate: 7 },
  { id: 'p0146-g', name: 'ファイヤー', subName: 'ガラルのすがた', type: 'あく', size: 'L', rarity: 'SSR', img: 'images/gacha/p0146-g.png', rate: 7 },

  // 147 - 149 ミニリュウ系統
  { id: 'p0147', name: 'ミニリュウ', subName: '', type: 'ドラゴン', size: 'S', rarity: 'N', img: 'images/gacha/p0147.png', rate: 30 },
  { id: 'p0148', name: 'ハクリュー', subName: '', type: 'ドラゴン', size: 'M', rarity: 'R', img: 'images/gacha/p0148.png', rate: 20 },
  { id: 'p0149', name: 'カイリュー', subName: '', type: 'ドラゴン', size: 'L', rarity: 'SR', img: 'images/gacha/p0149.png', rate: 12 },

  // 150 - 151 ミュウツー・ミュウ
  { id: 'p0150', name: 'ミュウツー', subName: '', type: 'エスパー', size: 'L', rarity: 'UR', img: 'images/gacha/p0150.png', rate: 3 },
  { id: 'p0150-x', name: 'ミュウツー', subName: 'メガシンカ X', type: 'エスパー', size: 'G', rarity: 'UR', img: 'images/gacha/p0150-x.png', rate: 3 },
  { id: 'p0150-y', name: 'ミュウツー', subName: 'メガシンカ Y', type: 'エスパー', size: 'G', rarity: 'UR', img: 'images/gacha/p0150-y.png', rate: 3 },
  { id: 'p0151', name: 'ミュウ', subName: '', type: 'エスパー', size: 'S', rarity: 'UR', img: 'images/gacha/p0151.png', rate: 3 },

  // 443 - 445 フカマル系統（シンオウ地方・メガ・メガZ）
  { id: 'p0443', name: 'フカマル', subName: '', type: 'ドラゴン', size: 'S', rarity: 'N', img: 'images/gacha/p0443.png', rate: 30 },
  { id: 'p0444', name: 'ガバイト', subName: '', type: 'ドラゴン', size: 'M', rarity: 'R', img: 'images/gacha/p0444.png', rate: 20 },
  { id: 'p0445', name: 'ガブリアス', subName: '', type: 'ドラゴン', size: 'L', rarity: 'SR', img: 'images/gacha/p0445.png', rate: 12 },
  { id: 'p0445-m', name: 'ガブリアス', subName: 'メガシンカ', type: 'ドラゴン', size: 'G', rarity: 'SSR', img: 'images/gacha/p0445-m.png', rate: 7 },
  { id: 'p0445-z', name: 'ガブリアス', subName: 'メガシンカ Z', type: 'ドラゴン', size: 'G', rarity: 'UR', img: 'images/gacha/p0445-z.png', rate: 3 },

  // 447 - 448 リオル系統（シンオウ地方・メガ・メガZ）
  { id: 'p0447', name: 'リオル', subName: '', type: 'かくとう', size: 'S', rarity: 'N', img: 'images/gacha/p0447.png', rate: 30 },
  { id: 'p0448', name: 'ルカリオ', subName: '', type: 'かくとう', size: 'M', rarity: 'SR', img: 'images/gacha/p0448.png', rate: 12 },
  { id: 'p0448-m', name: 'ルカリオ', subName: 'メガシンカ', type: 'かくとう', size: 'G', rarity: 'SSR', img: 'images/gacha/p0448-m.png', rate: 7 },
  { id: 'p0448-z', name: 'ルカリオ', subName: 'メガシンカ Z', type: 'かくとう', size: 'G', rarity: 'UR', img: 'images/gacha/p0448-z.png', rate: 3 }

  // ==========================================
  // ジョウト地方（No.152 - 251）
  // ==========================================

  // 152 - 154 チコリータ系統
  { id: 'p0152', name: 'チコリータ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0152.png', rate: 30 },
  { id: 'p0153', name: 'ベイリーフ', subName: '', type: 'くさ', size: 'M', rarity: 'R', img: 'images/gacha/p0153.png', rate: 20 },
  { id: 'p0154', name: 'メガニウム', subName: '', type: 'くさ', size: 'L', rarity: 'SR', img: 'images/gacha/p0154.png', rate: 12 },

  // 155 - 157 ヒノアラシ系統
  { id: 'p0155', name: 'ヒノアラシ', subName: '', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0155.png', rate: 30 },
  { id: 'p0156', name: 'マグマラシ', subName: '', type: 'ほのお', size: 'M', rarity: 'R', img: 'images/gacha/p0156.png', rate: 20 },
  { id: 'p0157', name: 'バクフーン', subName: '', type: 'ほのお', size: 'L', rarity: 'SR', img: 'images/gacha/p0157.png', rate: 12 },
  { id: 'p0157-h', name: 'バクフーン', subName: 'ヒスイのすがた', type: 'ほのお', size: 'L', rarity: 'SR', img: 'images/gacha/p0157-h.png', rate: 12 },

  // 158 - 160 ワニノコ系統
  { id: 'p0158', name: 'ワニノコ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0158.png', rate: 30 },
  { id: 'p0159', name: 'アリゲイツ', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0159.png', rate: 20 },
  { id: 'p0160', name: 'オーダイル', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0160.png', rate: 12 },

  // 161 - 162 オタチ系統
  { id: 'p0161', name: 'オタチ', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0161.png', rate: 30 },
  { id: 'p0162', name: 'オオタチ', subName: '', type: 'ノーマル', size: 'M', rarity: 'R', img: 'images/gacha/p0162.png', rate: 20 },

  // 163 - 164 ホーホー系統
  { id: 'p0163', name: 'ホーホー', subName: '', type: 'ひこう', size: 'S', rarity: 'N', img: 'images/gacha/p0163.png', rate: 30 },
  { id: 'p0164', name: 'ヨルノズク', subName: '', type: 'ひこう', size: 'M', rarity: 'R', img: 'images/gacha/p0164.png', rate: 20 },

  // 165 - 166 レディバ系統
  { id: 'p0165', name: 'レディバ', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0165.png', rate: 30 },
  { id: 'p0166', name: 'レディアン', subName: '', type: 'むし', size: 'M', rarity: 'R', img: 'images/gacha/p0166.png', rate: 20 },

  // 167 - 168 イトマル系統
  { id: 'p0167', name: 'イトマル', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0167.png', rate: 30 },
  { id: 'p0168', name: 'アリアドス', subName: '', type: 'むし', size: 'M', rarity: 'R', img: 'images/gacha/p0168.png', rate: 20 },

  // 169 クロバット
  { id: 'p0169', name: 'クロバット', subName: '', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0169.png', rate: 12 },

  // 170 - 171 チョンチー系統
  { id: 'p0170', name: 'チョンチー', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0170.png', rate: 30 },
  { id: 'p0171', name: 'ランターン', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0171.png', rate: 20 },

  // 172 ピチュー
  { id: 'p0172', name: 'ピチュー', subName: '', type: 'でんき', size: 'S', rarity: 'N', img: 'images/gacha/p0172.png', rate: 30 },

  // 173 ピィ
  { id: 'p0173', name: 'ピィ', subName: '', type: 'フェアリー', size: 'S', rarity: 'N', img: 'images/gacha/p0173.png', rate: 30 },

  // 174 ププリン
  { id: 'p0174', name: 'ププリン', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0174.png', rate: 30 },

  // 175 - 176 トゲピー系統
  { id: 'p0175', name: 'トゲピー', subName: '', type: 'フェアリー', size: 'S', rarity: 'N', img: 'images/gacha/p0175.png', rate: 30 },
  { id: 'p0176', name: 'トゲチック', subName: '', type: 'フェアリー', size: 'M', rarity: 'R', img: 'images/gacha/p0176.png', rate: 20 },

  // 177 - 178 ネイティ系統
  { id: 'p0177', name: 'ネイティ', subName: '', type: 'エスパー', size: 'S', rarity: 'N', img: 'images/gacha/p0177.png', rate: 30 },
  { id: 'p0178', name: 'ネイティオ', subName: '', type: 'エスパー', size: 'M', rarity: 'R', img: 'images/gacha/p0178.png', rate: 20 },

  // 179 - 181 メリープ系統
  { id: 'p0179', name: 'メリープ', subName: '', type: 'でんき', size: 'S', rarity: 'N', img: 'images/gacha/p0179.png', rate: 30 },
  { id: 'p0180', name: 'モココ', subName: '', type: 'でんき', size: 'S', rarity: 'R', img: 'images/gacha/p0180.png', rate: 20 },
  { id: 'p0181', name: 'デンリュウ', subName: '', type: 'でんき', size: 'L', rarity: 'SR', img: 'images/gacha/p0181.png', rate: 12 },
  { id: 'p0181-m', name: 'デンリュウ', subName: 'メガシンカ', type: 'でんき', size: 'G', rarity: 'SSR', img: 'images/gacha/p0181-m.png', rate: 7 },

  // 182 キレイハナ
  { id: 'p0182', name: 'キレイハナ', subName: '', type: 'くさ', size: 'S', rarity: 'SR', img: 'images/gacha/p0182.png', rate: 12 },

  // 183 - 184 マリル系統
  { id: 'p0183', name: 'マリル', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0183.png', rate: 30 },
  { id: 'p0184', name: 'マリルリ', subName: '', type: 'みず', size: 'M', rarity: 'SR', img: 'images/gacha/p0184.png', rate: 12 },

  // 185 ウソッキー
  { id: 'p0185', name: 'ウソッキー', subName: '', type: 'いわ', size: 'M', rarity: 'R', img: 'images/gacha/p0185.png', rate: 20 },

  // 186 ニョロトノ
  { id: 'p0186', name: 'ニョロトノ', subName: '', type: 'みず', size: 'M', rarity: 'SR', img: 'images/gacha/p0186.png', rate: 12 },

  // 187 - 189 ハネッコ系統
  { id: 'p0187', name: 'ハネッコ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0187.png', rate: 30 },
  { id: 'p0188', name: 'ポポッコ', subName: '', type: 'くさ', size: 'S', rarity: 'R', img: 'images/gacha/p0188.png', rate: 20 },
  { id: 'p0189', name: 'ワタッコ', subName: '', type: 'くさ', size: 'M', rarity: 'SR', img: 'images/gacha/p0189.png', rate: 12 },

  // 190 エイパム
  { id: 'p0190', name: 'エイパム', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0190.png', rate: 30 },

  // 191 - 192 ヒマナッツ系統
  { id: 'p0191', name: 'ヒマナッツ', subName: '', type: 'くさ', size: 'S', rarity: 'N', img: 'images/gacha/p0191.png', rate: 30 },
  { id: 'p0192', name: 'キマワリ', subName: '', type: 'くさ', size: 'M', rarity: 'R', img: 'images/gacha/p0192.png', rate: 20 },

  // 193 ヤンヤンマ
  { id: 'p0193', name: 'ヤンヤンマ', subName: '', type: 'むし', size: 'M', rarity: 'N', img: 'images/gacha/p0193.png', rate: 30 },

  // 194 - 195 ウパー系統
  { id: 'p0194', name: 'ウパー', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0194.png', rate: 30 },
  { id: 'p0194-p', name: 'ウパー', subName: 'パルデアのすがた', type: 'どく', size: 'S', rarity: 'N', img: 'images/gacha/p0194-p.png', rate: 30 },
  { id: 'p0195', name: 'ヌオー', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0195.png', rate: 12 },

  // 196 エーフィ
  { id: 'p0196', name: 'エーフィ', subName: '', type: 'エスパー', size: 'M', rarity: 'SR', img: 'images/gacha/p0196.png', rate: 12 },

  // 197 ブラッキー
  { id: 'p0197', name: 'ブラッキー', subName: '', type: 'あく', size: 'M', rarity: 'SR', img: 'images/gacha/p0197.png', rate: 12 },

  // 198 ヤミカラス
  { id: 'p0198', name: 'ヤミカラス', subName: '', type: 'あく', size: 'S', rarity: 'N', img: 'images/gacha/p0198.png', rate: 30 },

  // 199 ヤドキング
  { id: 'p0199', name: 'ヤドキング', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0199.png', rate: 12 },
  { id: 'p0199-g', name: 'ヤドキング', subName: 'ガラルのすがた', type: 'どく', size: 'L', rarity: 'SR', img: 'images/gacha/p0199-g.png', rate: 12 },

  // 200 ムウマ
  { id: 'p0200', name: 'ムウマ', subName: '', type: 'ゴースト', size: 'S', rarity: 'N', img: 'images/gacha/p0200.png', rate: 30 },

  // 201 アンノーン
  { id: 'p0201', name: 'アンノーン', subName: '', type: 'エスパー', size: 'S', rarity: 'N', img: 'images/gacha/p0201.png', rate: 30 },

  // 202 ソーナンス
  { id: 'p0202', name: 'ソーナンス', subName: '', type: 'エスパー', size: 'M', rarity: 'R', img: 'images/gacha/p0202.png', rate: 20 },

  // 203 キリンリキ
  { id: 'p0203', name: 'キリンリキ', subName: '', type: 'ノーマル', size: 'M', rarity: 'R', img: 'images/gacha/p0203.png', rate: 20 },

  // 204 - 205 クヌギダマ系統
  { id: 'p0204', name: 'クヌギダマ', subName: '', type: 'むし', size: 'S', rarity: 'N', img: 'images/gacha/p0204.png', rate: 30 },
  { id: 'p0205', name: 'フォレトス', subName: '', type: 'むし', size: 'M', rarity: 'SR', img: 'images/gacha/p0205.png', rate: 12 },

  // 206 ノコッチ
  { id: 'p0206', name: 'ノコッチ', subName: '', type: 'ノーマル', size: 'M', rarity: 'N', img: 'images/gacha/p0206.png', rate: 30 },

  // 207 グライガー
  { id: 'p0207', name: 'グライガー', subName: '', type: 'じめん', size: 'M', rarity: 'R', img: 'images/gacha/p0207.png', rate: 20 },

  // 208 ハガネール
  { id: 'p0208', name: 'ハガネール', subName: '', type: 'はがね', size: 'L', rarity: 'SR', img: 'images/gacha/p0208.png', rate: 12 },
  { id: 'p0208-m', name: 'ハガネール', subName: 'メガシンカ', type: 'はがね', size: 'G', rarity: 'SSR', img: 'images/gacha/p0208-m.png', rate: 7 },

  // 209 - 210 ブルー系統
  { id: 'p0209', name: 'ブルー', subName: '', type: 'フェアリー', size: 'S', rarity: 'N', img: 'images/gacha/p0209.png', rate: 30 },
  { id: 'p0210', name: 'グランブル', subName: '', type: 'フェアリー', size: 'M', rarity: 'R', img: 'images/gacha/p0210.png', rate: 20 },

  // 211 ハリーセン
  { id: 'p0211', name: 'ハリーセン', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0211.png', rate: 30 },
  { id: 'p0211-h', name: 'ハリーセン', subName: 'ヒスイのすがた', type: 'あく', size: 'S', rarity: 'N', img: 'images/gacha/p0211-h.png', rate: 30 },

  // 212 ハッサム
  { id: 'p0212', name: 'ハッサム', subName: '', type: 'むし', size: 'L', rarity: 'SR', img: 'images/gacha/p0212.png', rate: 12 },
  { id: 'p0212-m', name: 'ハッサム', subName: 'メガシンカ', type: 'むし', size: 'G', rarity: 'SSR', img: 'images/gacha/p0212-m.png', rate: 7 },

  // 213 ツボツボ
  { id: 'p0213', name: 'ツボツボ', subName: '', type: 'むし', size: 'S', rarity: 'R', img: 'images/gacha/p0213.png', rate: 20 },

  // 214 ヘラクロス
  { id: 'p0214', name: 'ヘラクロス', subName: '', type: 'むし', size: 'M', rarity: 'SR', img: 'images/gacha/p0214.png', rate: 12 },
  { id: 'p0214-m', name: 'ヘラクロス', subName: 'メガシンカ', type: 'むし', size: 'G', rarity: 'SSR', img: 'images/gacha/p0214-m.png', rate: 7 },

  // 215 ニューラ
  { id: 'p0215', name: 'ニューラ', subName: '', type: 'あく', size: 'S', rarity: 'R', img: 'images/gacha/p0215.png', rate: 20 },
  { id: 'p0215-h', name: 'ニューラ', subName: 'ヒスイのすがた', type: 'かくとう', size: 'S', rarity: 'R', img: 'images/gacha/p0215-h.png', rate: 20 },

  // 216 - 217 ヒメグマ系統
  { id: 'p0216', name: 'ヒメグマ', subName: '', type: 'ノーマル', size: 'S', rarity: 'N', img: 'images/gacha/p0216.png', rate: 30 },
  { id: 'p0217', name: 'リングマ', subName: '', type: 'ノーマル', size: 'L', rarity: 'SR', img: 'images/gacha/p0217.png', rate: 12 },

  // 218 - 219 マグマッグ系統
  { id: 'p0218', name: 'マグマッグ', subName: '', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0218.png', rate: 30 },
  { id: 'p0219', name: 'マグカルゴ', subName: '', type: 'ほのお', size: 'M', rarity: 'R', img: 'images/gacha/p0219.png', rate: 20 },

  // 220 - 221 ウリムー系統
  { id: 'p0220', name: 'ウリムー', subName: '', type: 'こおり', size: 'S', rarity: 'N', img: 'images/gacha/p0220.png', rate: 30 },
  { id: 'p0221', name: 'イノムー', subName: '', type: 'こおり', size: 'M', rarity: 'R', img: 'images/gacha/p0221.png', rate: 20 },

  // 222 サニーゴ
  { id: 'p0222', name: 'サニーゴ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0222.png', rate: 30 },
  { id: 'p0222-g', name: 'サニーゴ', subName: 'ガラルのすがた', type: 'ゴースト', size: 'S', rarity: 'N', img: 'images/gacha/p0222-g.png', rate: 30 },

  // 223 - 224 テッポウオ系統
  { id: 'p0223', name: 'テッポウオ', subName: '', type: 'みず', size: 'S', rarity: 'N', img: 'images/gacha/p0223.png', rate: 30 },
  { id: 'p0224', name: 'オクタン', subName: '', type: 'みず', size: 'M', rarity: 'R', img: 'images/gacha/p0224.png', rate: 20 },

  // 225 デリバード
  { id: 'p0225', name: 'デリバード', subName: '', type: 'こおり', size: 'S', rarity: 'N', img: 'images/gacha/p0225.png', rate: 30 },

  // 226 マンタイン
  { id: 'p0226', name: 'マンタイン', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0226.png', rate: 12 },

  // 227 エアームド
  { id: 'p0227', name: 'エアームド', subName: '', type: 'はがね', size: 'M', rarity: 'SR', img: 'images/gacha/p0227.png', rate: 12 },

  // 228 - 229 デルビル系統
  { id: 'p0228', name: 'デルビル', subName: '', type: 'あく', size: 'S', rarity: 'N', img: 'images/gacha/p0228.png', rate: 30 },
  { id: 'p0229', name: 'ヘルガー', subName: '', type: 'あく', size: 'M', rarity: 'SR', img: 'images/gacha/p0229.png', rate: 12 },
  { id: 'p0229-m', name: 'ヘルガー', subName: 'メガシンカ', type: 'あく', size: 'G', rarity: 'SSR', img: 'images/gacha/p0229-m.png', rate: 7 },

  // 230 キングドラ
  { id: 'p0230', name: 'キングドラ', subName: '', type: 'みず', size: 'L', rarity: 'SR', img: 'images/gacha/p0230.png', rate: 12 },

  // 231 - 232 ゴマゾウ系統
  { id: 'p0231', name: 'ゴマゾウ', subName: '', type: 'じめん', size: 'S', rarity: 'N', img: 'images/gacha/p0231.png', rate: 30 },
  { id: 'p0232', name: 'ドンファン', subName: '', type: 'じめん', size: 'M', rarity: 'SR', img: 'images/gacha/p0232.png', rate: 12 },

  // 233 ポリゴン2
  { id: 'p0233', name: 'ポリゴン2', subName: '', type: 'ノーマル', size: 'S', rarity: 'SR', img: 'images/gacha/p0233.png', rate: 12 },

  // 234 オドシシ
  { id: 'p0234', name: 'オドシシ', subName: '', type: 'ノーマル', size: 'M', rarity: 'R', img: 'images/gacha/p0234.png', rate: 20 },

  // 235 ドーブル
  { id: 'p0235', name: 'ドーブル', subName: '', type: 'ノーマル', size: 'M', rarity: 'R', img: 'images/gacha/p0235.png', rate: 20 },

  // 236 バルキー
  { id: 'p0236', name: 'バルキー', subName: '', type: 'かくとう', size: 'S', rarity: 'N', img: 'images/gacha/p0236.png', rate: 30 },

  // 237 カポエラー
  { id: 'p0237', name: 'カポエラー', subName: '', type: 'かくとう', size: 'M', rarity: 'SR', img: 'images/gacha/p0237.png', rate: 12 },

  // 238 ムチュール
  { id: 'p0238', name: 'ムチュール', subName: '', type: 'こおり', size: 'S', rarity: 'N', img: 'images/gacha/p0238.png', rate: 30 },

  // 239 エレキッド
  { id: 'p0239', name: 'エレキッド', subName: '', type: 'でんき', size: 'S', rarity: 'N', img: 'images/gacha/p0239.png', rate: 30 },

  // 240 ブビィ
  { id: 'p0240', name: 'ブビィ', subName: '', type: 'ほのお', size: 'S', rarity: 'N', img: 'images/gacha/p0240.png', rate: 30 },

  // 241 ミルタンク
  { id: 'p0241', name: 'ミルタンク', subName: '', type: 'ノーマル', size: 'M', rarity: 'SR', img: 'images/gacha/p0241.png', rate: 12 },

  // 242 ハピナス
  { id: 'p0242', name: 'ハピナス', subName: '', type: 'ノーマル', size: 'L', rarity: 'SR', img: 'images/gacha/p0242.png', rate: 12 },

  // 243 - 245 三犬（伝説）
  { id: 'p0243', name: 'ライコウ', subName: '', type: 'でんき', size: 'L', rarity: 'SSR', img: 'images/gacha/p0243.png', rate: 7 },
  { id: 'p0244', name: 'エンテイ', subName: '', type: 'ほのお', size: 'L', rarity: 'SSR', img: 'images/gacha/p0244.png', rate: 7 },
  { id: 'p0245', name: 'スイクン', subName: '', type: 'みず', size: 'L', rarity: 'SSR', img: 'images/gacha/p0245.png', rate: 7 },

  // 246 - 248 ヨーギラス系統
  { id: 'p0246', name: 'ヨーギラス', subName: '', type: 'いわ', size: 'S', rarity: 'N', img: 'images/gacha/p0246.png', rate: 30 },
  { id: 'p0247', name: 'サナギラス', subName: '', type: 'いわ', size: 'M', rarity: 'R', img: 'images/gacha/p0247.png', rate: 20 },
  { id: 'p0248', name: 'バンギラス', subName: '', type: 'いわ', size: 'L', rarity: 'SR', img: 'images/gacha/p0248.png', rate: 12 },
  { id: 'p0248-m', name: 'バンギラス', subName: 'メガシンカ', type: 'いわ', size: 'G', rarity: 'SSR', img: 'images/gacha/p0248-m.png', rate: 7 },

  // 249 - 250 ルギア・ホウオウ
  { id: 'p0249', name: 'ルギア', subName: '', type: 'エスパー', size: 'L', rarity: 'UR', img: 'images/gacha/p0249.png', rate: 3 },
  { id: 'p0250', name: 'ホウオウ', subName: '', type: 'ほのお', size: 'L', rarity: 'UR', img: 'images/gacha/p0250.png', rate: 3 },

  // 251 セレビィ
  { id: 'p0251', name: 'セレビィ', subName: '', type: 'くさ', size: 'S', rarity: 'UR', img: 'images/gacha/p0251.png', rate: 3 }
];
