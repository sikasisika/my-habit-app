// 全ポケモンマスターデータ（サイズ・属性・出現区分）
// size: 'S'(小型), 'M'(中型), 'L'(大型), 'G'(キョダイ・超大型)
const POKEMON_DATA = [
  // 001 - 003 フシギダネ系統
  { id: 'p0001', name: 'フシギダネ', type: 'くさ', rarity: 'N', size: 'S', img: 'images/gacha/p0001.png' },
  { id: 'p0002', name: 'フシギソウ', type: 'くさ', rarity: 'R', size: 'M', img: 'images/gacha/p0002.png' },
  { id: 'p0003', name: 'フシギバナ', type: 'くさ', rarity: 'SR', size: 'L', img: 'images/gacha/p0003.png' },
  { id: 'p0003-m', name: 'メガフシギバナ', type: 'くさ', rarity: 'SSR', size: 'L', isBossOnly: true, img: 'images/gacha/p0003-m.png' },
  { id: 'p0003-k', name: 'キョダイフシギバナ', type: 'くさ', rarity: 'UR', size: 'G', isBossOnly: true, img: 'images/gacha/p0003-k.png' },

  // 004 - 006 ヒトカゲ系統
  { id: 'p0004', name: 'ヒトカゲ', type: 'ほのお', rarity: 'N', size: 'S', img: 'images/gacha/p0004.png' },
  { id: 'p0005', name: 'リザード', type: 'ほのお', rarity: 'R', size: 'M', img: 'images/gacha/p0005.png' },
  { id: 'p0006', name: 'リザードン', type: 'ほのお', rarity: 'SR', size: 'L', img: 'images/gacha/p0006.png' },
  { id: 'p0006-x', name: 'メガリザードンX', type: 'ほのお', rarity: 'SSR', size: 'L', isBossOnly: true, img: 'images/gacha/p0006-x.png' },
  { id: 'p0006-y', name: 'メガリザードンY', type: 'ほのお', rarity: 'SSR', size: 'L', isBossOnly: true, img: 'images/gacha/p0006-y.png' },
  { id: 'p0006-k', name: 'キョダイリザードン', type: 'ほのお', rarity: 'UR', size: 'G', isBossOnly: true, img: 'images/gacha/p0006-k.png' },

  // 007 - 009 ゼニガメ系統
  { id: 'p0007', name: 'ゼニガメ', type: 'みず', rarity: 'N', size: 'S', img: 'images/gacha/p0007.png' },
  { id: 'p0008', name: 'カメール', type: 'みず', rarity: 'R', size: 'M', img: 'images/gacha/p0008.png' },
  { id: 'p0009', name: 'カメックス', type: 'みず', rarity: 'SR', size: 'L', img: 'images/gacha/p0009.png' },
  { id: 'p0009-m', name: 'メガカメックス', type: 'みず', rarity: 'SSR', size: 'L', isBossOnly: true, img: 'images/gacha/p0009-m.png' },
  { id: 'p0009-k', name: 'キョダイカメックス', type: 'みず', rarity: 'UR', size: 'G', isBossOnly: true, img: 'images/gacha/p0009-k.png' },

  // 010 - 012 キャタピー系統
  { id: 'p0010', name: 'キャタピー', type: 'むし', rarity: 'N', size: 'S', img: 'images/gacha/p0010.png' },
  { id: 'p0011', name: 'トランセル', type: 'むし', rarity: 'N', size: 'S', img: 'images/gacha/p0011.png' },
  { id: 'p0012', name: 'バタフリー', type: 'むし', rarity: 'SR', size: 'M', img: 'images/gacha/p0012.png' },
  { id: 'p0012-k', name: 'キョダイバタフリー', type: 'むし', rarity: 'UR', size: 'G', isBossOnly: true, img: 'images/gacha/p0012-k.png' },

  // 016 - 018 ポッポ系統
  { id: 'p0016', name: 'ポッポ', type: 'ひこう', rarity: 'N', size: 'S', img: 'images/gacha/p0016.png' },
  { id: 'p0017', name: 'ピジョン', type: 'ひこう', rarity: 'R', size: 'M', img: 'images/gacha/p0017.png' },
  { id: 'p0018', name: 'ピジョット', type: 'ひこう', rarity: 'SR', size: 'L', img: 'images/gacha/p0018.png' },

  // 019 - 020 コラッタ系統
  { id: 'p0019', name: 'コラッタ', type: 'ノーマル', rarity: 'N', size: 'S', img: 'images/gacha/p0019.png' },
  { id: 'p0020', name: 'ラッタ', type: 'ノーマル', rarity: 'R', size: 'M', img: 'images/gacha/p0020.png' },

  // 025 - 026 ピカチュウ系統
  { id: 'p0025', name: 'ピカチュウ', type: 'でんき', rarity: 'R', size: 'S', img: 'images/gacha/p0025.png' },
  { id: 'p0025-k', name: 'キョダイピカチュウ', type: 'でんき', rarity: 'UR', size: 'G', isBossOnly: true, img: 'images/gacha/p0025-k.png' },
  { id: 'p0026', name: 'ライチュウ', type: 'でんき', rarity: 'SR', size: 'M', img: 'images/gacha/p0026.png' },

  // 092 - 094 ゴース系統
  { id: 'p0092', name: 'ゴース', type: 'ゴースト', rarity: 'N', size: 'S', img: 'images/gacha/p0092.png' },
  { id: 'p0093', name: 'ゴースト', type: 'ゴースト', rarity: 'R', size: 'M', img: 'images/gacha/p0093.png' },
  { id: 'p0094', name: 'ゲンガー', type: 'ゴースト', rarity: 'SR', size: 'L', img: 'images/gacha/p0094.png' },
  { id: 'p0094-k', name: 'キョダイゲンガー', type: 'ゴースト', rarity: 'UR', size: 'G', isBossOnly: true, img: 'images/gacha/p0094-k.png' },

  // 143 カビゴン
  { id: 'p0143', name: 'カビゴン', type: 'ノーマル', rarity: 'SR', size: 'L', img: 'images/gacha/p0143.png' },
  { id: 'p0143-k', name: 'キョダイカビゴン', type: 'ノーマル', rarity: 'UR', size: 'G', isBossOnly: true, img: 'images/gacha/p0143-k.png' },

  // 伝説（UR・超低確率ボス限定）
  { id: 'p0144', name: 'フリーザー', type: 'こおり', rarity: 'UR', size: 'L', isBossOnly: true, isLegend: true, img: 'images/gacha/p0144.png' },
  { id: 'p0145', name: 'サンダー', type: 'でんき', rarity: 'UR', size: 'L', isBossOnly: true, isLegend: true, img: 'images/gacha/p0145.png' },
  { id: 'p0146', name: 'ファイヤー', type: 'ほのお', rarity: 'UR', size: 'L', isBossOnly: true, isLegend: true, img: 'images/gacha/p0146.png' },
  { id: 'p0150', name: 'ミュウツー', type: 'エスパー', rarity: 'UR', size: 'L', isBossOnly: true, isLegend: true, img: 'images/gacha/p0150.png' },
  { id: 'p0151', name: 'ミュウ', type: 'エスパー', rarity: 'UR', size: 'S', isBossOnly: true, isLegend: true, img: 'images/gacha/p0151.png' }
];
