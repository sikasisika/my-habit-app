// 全ポケモンマスターデータ（タイプ属性・進化フラグ対応版）
const POKEMON_DATA = [
  // 001 - 003 フシギダネ系統
  { id: 'p0001', name: 'フシギダネ', type: 'くさ', rarity: 'N', img: 'images/gacha/p0001.png' },
  { id: 'p0002', name: 'フシギソウ', type: 'くさ', rarity: 'R', img: 'images/gacha/p0002.png' },
  { id: 'p0003', name: 'フシギバナ', type: 'くさ', rarity: 'SR', img: 'images/gacha/p0003.png' },
  { id: 'p0003-m', name: 'メガフシギバナ', type: 'くさ', rarity: 'SSR', img: 'images/gacha/p0003-m.png' },
  { id: 'p0003-k', name: 'キョダイフシギバナ', type: 'くさ', rarity: 'UR', img: 'images/gacha/p0003-k.png' },

  // 004 - 006 ヒトカゲ系統
  { id: 'p0004', name: 'ヒトカゲ', type: 'ほのお', rarity: 'N', img: 'images/gacha/p0004.png' },
  { id: 'p0005', name: 'リザード', type: 'ほのお', rarity: 'R', img: 'images/gacha/p0005.png' },
  { id: 'p0006', name: 'リザードン', type: 'ほのお', rarity: 'SR', img: 'images/gacha/p0006.png' },
  { id: 'p0006-x', name: 'メガリザードンX', type: 'ほのお', rarity: 'SSR', img: 'images/gacha/p0006-x.png' },
  { id: 'p0006-y', name: 'メガリザードンY', type: 'ほのお', rarity: 'SSR', img: 'images/gacha/p0006-y.png' },
  { id: 'p0006-k', name: 'キョダイリザードン', type: 'ほのお', rarity: 'UR', img: 'images/gacha/p0006-k.png' },

  // 007 - 009 ゼニガメ系統
  { id: 'p0007', name: 'ゼニガメ', type: 'みず', rarity: 'N', img: 'images/gacha/p0007.png' },
  { id: 'p0008', name: 'カメール', type: 'みず', rarity: 'R', img: 'images/gacha/p0008.png' },
  { id: 'p0009', name: 'カメックス', type: 'みず', rarity: 'SR', img: 'images/gacha/p0009.png' },
  { id: 'p0009-m', name: 'メガカメックス', type: 'みず', rarity: 'SSR', img: 'images/gacha/p0009-m.png' },
  { id: 'p0009-k', name: 'キョダイカメックス', type: 'みず', rarity: 'UR', img: 'images/gacha/p0009-k.png' },

  // 010 - 012 キャタピー系統
  { id: 'p0010', name: 'キャタピー', type: 'むし', rarity: 'N', img: 'images/gacha/p0010.png' },
  { id: 'p0011', name: 'トランセル', type: 'むし', rarity: 'N', img: 'images/gacha/p0011.png' },
  { id: 'p0012', name: 'バタフリー', type: 'むし', rarity: 'SR', img: 'images/gacha/p0012.png' },
  { id: 'p0012-k', name: 'キョダイバタフリー', type: 'むし', rarity: 'UR', img: 'images/gacha/p0012-k.png' },

  // 013 - 015 ビードル系統
  { id: 'p0013', name: 'ビードル', type: 'むし', rarity: 'N', img: 'images/gacha/p0013.png' },
  { id: 'p0014', name: 'コクーン', type: 'むし', rarity: 'N', img: 'images/gacha/p0014.png' },
  { id: 'p0015', name: 'スピアー', type: 'むし', rarity: 'SR', img: 'images/gacha/p0015.png' },
  { id: 'p0015-m', name: 'メガスピアー', type: 'むし', rarity: 'SSR', img: 'images/gacha/p0015-m.png' },

  // 016 - 018 ポッポ系統
  { id: 'p0016', name: 'ポッポ', type: 'ひこう', rarity: 'N', img: 'images/gacha/p0016.png' },
  { id: 'p0017', name: 'ピジョン', type: 'ひこう', rarity: 'R', img: 'images/gacha/p0017.png' },
  { id: 'p0018', name: 'ピジョット', type: 'ひこう', rarity: 'SR', img: 'images/gacha/p0018.png' },
  { id: 'p0018-m', name: 'メガピジョット', type: 'ひこう', rarity: 'SSR', img: 'images/gacha/p0018-m.png' },

  // 019 - 020 コラッタ系統
  { id: 'p0019', name: 'コラッタ', type: 'ノーマル', rarity: 'N', img: 'images/gacha/p0019.png' },
  { id: 'p0020', name: 'ラッタ', type: 'ノーマル', rarity: 'R', img: 'images/gacha/p0020.png' },

  // 025 - 026 ピカチュウ系統
  { id: 'p0025', name: 'ピカチュウ', type: 'でんき', rarity: 'R', img: 'images/gacha/p0025.png' },
  { id: 'p0025-k', name: 'キョダイピカチュウ', type: 'でんき', rarity: 'UR', img: 'images/gacha/p0025-k.png' },
  { id: 'p0026', name: 'ライチュウ', type: 'でんき', rarity: 'SR', img: 'images/gacha/p0026.png' },

  // 037 - 038 ロコン系統
  { id: 'p0037', name: 'ロコン', type: 'ほのお', rarity: 'N', img: 'images/gacha/p0037.png' },
  { id: 'p0038', name: 'キュウコン', type: 'ほのお', rarity: 'SR', img: 'images/gacha/p0038.png' },

  // 058 - 059 ガーディ系統
  { id: 'p0058', name: 'ガーディ', type: 'ほのお', rarity: 'N', img: 'images/gacha/p0058.png' },
  { id: 'p0059', name: 'ウィンディ', type: 'ほのお', rarity: 'SR', img: 'images/gacha/p0059.png' },

  // 092 - 094 ゴース系統
  { id: 'p0092', name: 'ゴース', type: 'ゴースト', rarity: 'N', img: 'images/gacha/p0092.png' },
  { id: 'p0093', name: 'ゴースト', type: 'ゴースト', rarity: 'R', img: 'images/gacha/p0093.png' },
  { id: 'p0094', name: 'ゲンガー', type: 'ゴースト', rarity: 'SR', img: 'images/gacha/p0094.png' },
  { id: 'p0094-m', name: 'メガゲンガー', type: 'ゴースト', rarity: 'SSR', img: 'images/gacha/p0094-m.png' },
  { id: 'p0094-k', name: 'キョダイゲンガー', type: 'ゴースト', rarity: 'UR', img: 'images/gacha/p0094-k.png' },

  // 129 - 130 コイキング系統
  { id: 'p0129', name: 'コイキング', type: 'みず', rarity: 'N', img: 'images/gacha/p0129.png' },
  { id: 'p0130', name: 'ギャラドス', type: 'みず', rarity: 'SR', img: 'images/gacha/p0130.png' },
  { id: 'p0130-m', name: 'メガギャラドス', type: 'みず', rarity: 'SSR', img: 'images/gacha/p0130-m.png' },

  // 133 - 136 イーブイ系統
  { id: 'p0133', name: 'イーブイ', type: 'ノーマル', rarity: 'R', img: 'images/gacha/p0133.png' },
  { id: 'p0133-k', name: 'キョダイイーブイ', type: 'ノーマル', rarity: 'UR', img: 'images/gacha/p0133-k.png' },
  { id: 'p0134', name: 'シャワーズ', type: 'みず', rarity: 'SR', img: 'images/gacha/p0134.png' },
  { id: 'p0135', name: 'サンダース', type: 'でんき', rarity: 'SR', img: 'images/gacha/p0135.png' },
  { id: 'p0136', name: 'ブースター', type: 'ほのお', rarity: 'SR', img: 'images/gacha/p0136.png' },

  // 143 カビゴン
  { id: 'p0143', name: 'カビゴン', type: 'ノーマル', rarity: 'SR', img: 'images/gacha/p0143.png' },
  { id: 'p0143-k', name: 'キョダイカビゴン', type: 'ノーマル', rarity: 'UR', img: 'images/gacha/p0143-k.png' },

  // 伝説（UR枠：通常出現率極低）
  { id: 'p0144', name: 'フリーザー', type: 'こおり', rarity: 'UR', img: 'images/gacha/p0144.png', isLegend: true },
  { id: 'p0145', name: 'サンダー', type: 'でんき', rarity: 'UR', img: 'images/gacha/p0145.png', isLegend: true },
  { id: 'p0146', name: 'ファイヤー', type: 'ほのお', rarity: 'UR', img: 'images/gacha/p0146.png', isLegend: true },
  { id: 'p0150', name: 'ミュウツー', type: 'エスパー', rarity: 'UR', img: 'images/gacha/p0150.png', isLegend: true },
  { id: 'p0151', name: 'ミュウ', type: 'エスパー', rarity: 'UR', img: 'images/gacha/p0151.png', isLegend: true }
];
