// 全ポケモンマスターデータ
// 通常: p0000 / メガ: -m (-x/-y) / キョダイ: -k / リージョン: -a, -g, -h, -p
const POKEMON_DATA = [
  // 001 - 003 フシギダネ系統
  { id: 'p0001', name: 'フシギダネ', rarity: 'N', img: 'images/gacha/p0001.png', rate: 30 },
  { id: 'p0002', name: 'フシギソウ', rarity: 'R', img: 'images/gacha/p0002.png', rate: 20 },
  { id: 'p0003', name: 'フシギバナ', rarity: 'SR', img: 'images/gacha/p0003.png', rate: 12 },
  { id: 'p0003-m', name: 'メガフシギバナ', rarity: 'SSR', img: 'images/gacha/p0003-m.png', rate: 7 },
  { id: 'p0003-k', name: 'キョダイフシギバナ', rarity: 'UR', img: 'images/gacha/p0003-k.png', rate: 3 },

  // 004 - 006 ヒトカゲ系統
  { id: 'p0004', name: 'ヒトカゲ', rarity: 'N', img: 'images/gacha/p0004.png', rate: 30 },
  { id: 'p0005', name: 'リザード', rarity: 'R', img: 'images/gacha/p0005.png', rate: 20 },
  { id: 'p0006', name: 'リザードン', rarity: 'SR', img: 'images/gacha/p0006.png', rate: 12 },
  { id: 'p0006-x', name: 'メガリザードンX', rarity: 'SSR', img: 'images/gacha/p0006-x.png', rate: 7 },
  { id: 'p0006-y', name: 'メガリザードンY', rarity: 'SSR', img: 'images/gacha/p0006-y.png', rate: 7 },
  { id: 'p0006-k', name: 'キョダイリザードン', rarity: 'UR', img: 'images/gacha/p0006-k.png', rate: 3 },

  // 007 - 009 ゼニガメ系統
  { id: 'p0007', name: 'ゼニガメ', rarity: 'N', img: 'images/gacha/p0007.png', rate: 30 },
  { id: 'p0008', name: 'カメール', rarity: 'R', img: 'images/gacha/p0008.png', rate: 20 },
  { id: 'p0009', name: 'カメックス', rarity: 'SR', img: 'images/gacha/p0009.png', rate: 12 },
  { id: 'p0009-m', name: 'メガカメックス', rarity: 'SSR', img: 'images/gacha/p0009-m.png', rate: 7 },
  { id: 'p0009-k', name: 'キョダイカメックス', rarity: 'UR', img: 'images/gacha/p0009-k.png', rate: 3 },

  // 010 - 012 キャタピー系統
  { id: 'p0010', name: 'キャタピー', rarity: 'N', img: 'images/gacha/p0010.png', rate: 30 },
  { id: 'p0011', name: 'トランセル', rarity: 'N', img: 'images/gacha/p0011.png', rate: 30 },
  { id: 'p0012', name: 'バタフリー', rarity: 'SR', img: 'images/gacha/p0012.png', rate: 12 },
  { id: 'p0012-k', name: 'キョダイバタフリー', rarity: 'UR', img: 'images/gacha/p0012-k.png', rate: 3 },

  // 013 - 015 ビードル系統
  { id: 'p0013', name: 'ビードル', rarity: 'N', img: 'images/gacha/p0013.png', rate: 30 },
  { id: 'p0014', name: 'コクーン', rarity: 'N', img: 'images/gacha/p0014.png', rate: 30 },
  { id: 'p0015', name: 'スピアー', rarity: 'SR', img: 'images/gacha/p0015.png', rate: 12 },
  { id: 'p0015-m', name: 'メガスピアー', rarity: 'SSR', img: 'images/gacha/p0015-m.png', rate: 7 },

  // 016 - 018 ポッポ系統
  { id: 'p0016', name: 'ポッポ', rarity: 'N', img: 'images/gacha/p0016.png', rate: 30 },
  { id: 'p0017', name: 'ピジョン', rarity: 'R', img: 'images/gacha/p0017.png', rate: 20 },
  { id: 'p0018', name: 'ピジョット', rarity: 'SR', img: 'images/gacha/p0018.png', rate: 12 },
  { id: 'p0018-m', name: 'メガピジョット', rarity: 'SSR', img: 'images/gacha/p0018-m.png', rate: 7 },

  // 019 - 020 コラッタ系統（アローラ含む）
  { id: 'p0019', name: 'コラッタ', rarity: 'N', img: 'images/gacha/p0019.png', rate: 30 },
  { id: 'p0019-a', name: 'アローラコラッタ', rarity: 'N', img: 'images/gacha/p0019-a.png', rate: 30 },
  { id: 'p0020', name: 'ラッタ', rarity: 'R', img: 'images/gacha/p0020.png', rate: 20 },
  { id: 'p0020-a', name: 'アローララッタ', rarity: 'R', img: 'images/gacha/p0020-a.png', rate: 20 },

  // 021 - 022 オニスズメ系統
  { id: 'p0021', name: 'オニスズメ', rarity: 'N', img: 'images/gacha/p0021.png', rate: 30 },
  { id: 'p0022', name: 'オニドリル', rarity: 'R', img: 'images/gacha/p0022.png', rate: 20 },

  // 023 - 024 アーボ系統
  { id: 'p0023', name: 'アーボ', rarity: 'N', img: 'images/gacha/p0023.png', rate: 30 },
  { id: 'p0024', name: 'アーボック', rarity: 'SR', img: 'images/gacha/p0024.png', rate: 12 },

  // 025 - 026 ピカチュウ系統
  { id: 'p0025', name: 'ピカチュウ', rarity: 'R', img: 'images/gacha/p0025.png', rate: 20 },
  { id: 'p0025-k', name: 'キョダイピカチュウ', rarity: 'UR', img: 'images/gacha/p0025-k.png', rate: 3 },
  { id: 'p0026', name: 'ライチュウ', rarity: 'SR', img: 'images/gacha/p0026.png', rate: 12 },
  { id: 'p0026-a', name: 'アローラライチュウ', rarity: 'SR', img: 'images/gacha/p0026-a.png', rate: 12 },

  // 027 - 028 サンド系統
  { id: 'p0027', name: 'サンド', rarity: 'N', img: 'images/gacha/p0027.png', rate: 30 },
  { id: 'p0027-a', name: 'アローラサンド', rarity: 'N', img: 'images/gacha/p0027-a.png', rate: 30 },
  { id: 'p0028', name: 'サンドパン', rarity: 'R', img: 'images/gacha/p0028.png', rate: 20 },
  { id: 'p0028-a', name: 'アローラサンドパン', rarity: 'R', img: 'images/gacha/p0028-a.png', rate: 20 },

  // 029 - 031 ニドラン♀系統
  { id: 'p0029', name: 'ニドラン♀', rarity: 'N', img: 'images/gacha/p0029.png', rate: 30 },
  { id: 'p0030', name: 'ニドリーナ', rarity: 'R', img: 'images/gacha/p0030.png', rate: 20 },
  { id: 'p0031', name: 'ニドクイン', rarity: 'SR', img: 'images/gacha/p0031.png', rate: 12 },

  // 032 - 034 ニドラン♂系統
  { id: 'p0032', name: 'ニドラン♂', rarity: 'N', img: 'images/gacha/p0032.png', rate: 30 },
  { id: 'p0033', name: 'ニドリーノ', rarity: 'R', img: 'images/gacha/p0033.png', rate: 20 },
  { id: 'p0034', name: 'ニドキング', rarity: 'SR', img: 'images/gacha/p0034.png', rate: 12 },

  // 035 - 036 ピッピ系統
  { id: 'p0035', name: 'ピッピ', rarity: 'N', img: 'images/gacha/p0035.png', rate: 30 },
  { id: 'p0036', name: 'ピクシー', rarity: 'SR', img: 'images/gacha/p0036.png', rate: 12 },

  // 037 - 038 ロコン系統
  { id: 'p0037', name: 'ロコン', rarity: 'N', img: 'images/gacha/p0037.png', rate: 30 },
  { id: 'p0037-a', name: 'アローラロコン', rarity: 'N', img: 'images/gacha/p0037-a.png', rate: 30 },
  { id: 'p0038', name: 'キュウコン', rarity: 'SR', img: 'images/gacha/p0038.png', rate: 12 },
  { id: 'p0038-a', name: 'アローラキュウコン', rarity: 'SR', img: 'images/gacha/p0038-a.png', rate: 12 },

  // 039 - 040 プリン系統
  { id: 'p0039', name: 'プリン', rarity: 'N', img: 'images/gacha/p0039.png', rate: 30 },
  { id: 'p0040', name: 'プクリン', rarity: 'SR', img: 'images/gacha/p0040.png', rate: 12 },

  // 041 - 042 ズバット系統
  { id: 'p0041', name: 'ズバット', rarity: 'N', img: 'images/gacha/p0041.png', rate: 30 },
  { id: 'p0042', name: 'ゴルバット', rarity: 'R', img: 'images/gacha/p0042.png', rate: 20 },

  // 043 - 045 ナゾノクサ系統
  { id: 'p0043', name: 'ナゾノクサ', rarity: 'N', img: 'images/gacha/p0043.png', rate: 30 },
  { id: 'p0044', name: 'クサイハナ', rarity: 'R', img: 'images/gacha/p0044.png', rate: 20 },
  { id: 'p0045', name: 'ラフレシア', rarity: 'SR', img: 'images/gacha/p0045.png', rate: 12 },

  // 046 - 047 パラス系統
  { id: 'p0046', name: 'パラス', rarity: 'N', img: 'images/gacha/p0046.png', rate: 30 },
  { id: 'p0047', name: 'パラセクト', rarity: 'R', img: 'images/gacha/p0047.png', rate: 20 },

  // 048 - 049 コンパン系統
  { id: 'p0048', name: 'コンパン', rarity: 'N', img: 'images/gacha/p0048.png', rate: 30 },
  { id: 'p0049', name: 'モルフォン', rarity: 'R', img: 'images/gacha/p0049.png', rate: 20 },

  // 050 - 051 ディグダ系統
  { id: 'p0050', name: 'ディグダ', rarity: 'N', img: 'images/gacha/p0050.png', rate: 30 },
  { id: 'p0050-a', name: 'アローラディグダ', rarity: 'N', img: 'images/gacha/p0050-a.png', rate: 30 },
  { id: 'p0051', name: 'ダグトリオ', rarity: 'R', img: 'images/gacha/p0051.png', rate: 20 },
  { id: 'p0051-a', name: 'アローラダグトリオ', rarity: 'R', img: 'images/gacha/p0051-a.png', rate: 20 },

  // 052 - 053 ニャース系統（アローラ・ガラル・キョダイ）
  { id: 'p0052', name: 'ニャース', rarity: 'N', img: 'images/gacha/p0052.png', rate: 30 },
  { id: 'p0052-a', name: 'アローラニャース', rarity: 'N', img: 'images/gacha/p0052-a.png', rate: 30 },
  { id: 'p0052-g', name: 'ガラルニャース', rarity: 'N', img: 'images/gacha/p0052-g.png', rate: 30 },
  { id: 'p0052-k', name: 'キョダイニャース', rarity: 'UR', img: 'images/gacha/p0052-k.png', rate: 3 },
  { id: 'p0053', name: 'ペルシアン', rarity: 'R', img: 'images/gacha/p0053.png', rate: 20 },
  { id: 'p0053-a', name: 'アローラペルシアン', rarity: 'R', img: 'images/gacha/p0053-a.png', rate: 20 },

  // 054 - 055 コダック系統
  { id: 'p0054', name: 'コダック', rarity: 'N', img: 'images/gacha/p0054.png', rate: 30 },
  { id: 'p0055', name: 'ゴルダック', rarity: 'R', img: 'images/gacha/p0055.png', rate: 20 },

  // 056 - 057 マンキー系統
  { id: 'p0056', name: 'マンキー', rarity: 'N', img: 'images/gacha/p0056.png', rate: 30 },
  { id: 'p0057', name: 'オコリザル', rarity: 'R', img: 'images/gacha/p0057.png', rate: 20 },

  // 058 - 059 ガーディ系統（ヒスイ含む）
  { id: 'p0058', name: 'ガーディ', rarity: 'N', img: 'images/gacha/p0058.png', rate: 30 },
  { id: 'p0058-h', name: 'ヒスイガーディ', rarity: 'N', img: 'images/gacha/p0058-h.png', rate: 30 },
  { id: 'p0059', name: 'ウィンディ', rarity: 'SR', img: 'images/gacha/p0059.png', rate: 12 },
  { id: 'p0059-h', name: 'ヒスイウィンディ', rarity: 'SR', img: 'images/gacha/p0059-h.png', rate: 12 },

  // 060 - 062 ニョロモ系統
  { id: 'p0060', name: 'ニョロモ', rarity: 'N', img: 'images/gacha/p0060.png', rate: 30 },
  { id: 'p0061', name: 'ニョロゾ', rarity: 'R', img: 'images/gacha/p0061.png', rate: 20 },
  { id: 'p0062', name: 'ニョロボン', rarity: 'SR', img: 'images/gacha/p0062.png', rate: 12 },

  // 063 - 065 ケーシィ系統
  { id: 'p0063', name: 'ケーシィ', rarity: 'N', img: 'images/gacha/p0063.png', rate: 30 },
  { id: 'p0064', name: 'ユンゲラー', rarity: 'R', img: 'images/gacha/p0064.png', rate: 20 },
  { id: 'p0065', name: 'フーディン', rarity: 'SR', img: 'images/gacha/p0065.png', rate: 12 },
  { id: 'p0065-m', name: 'メガフーディン', rarity: 'SSR', img: 'images/gacha/p0065-m.png', rate: 7 },

  // 066 - 068 ワンリキー系統
  { id: 'p0066', name: 'ワンリキー', rarity: 'N', img: 'images/gacha/p0066.png', rate: 30 },
  { id: 'p0067', name: 'ゴーリキー', rarity: 'R', img: 'images/gacha/p0067.png', rate: 20 },
  { id: 'p0068', name: 'カイリキー', rarity: 'SR', img: 'images/gacha/p0068.png', rate: 12 },
  { id: 'p0068-k', name: 'キョダイカイリキー', rarity: 'UR', img: 'images/gacha/p0068-k.png', rate: 3 },

  // 069 - 071 マダツボミ系統
  { id: 'p0069', name: 'マダツボミ', rarity: 'N', img: 'images/gacha/p0069.png', rate: 30 },
  { id: 'p0070', name: 'ウツドン', rarity: 'R', img: 'images/gacha/p0070.png', rate: 20 },
  { id: 'p0071', name: 'ウツボット', rarity: 'SR', img: 'images/gacha/p0071.png', rate: 12 },

  // 072 - 073 メノクラゲ系統
  { id: 'p0072', name: 'メノクラゲ', rarity: 'N', img: 'images/gacha/p0072.png', rate: 30 },
  { id: 'p0073', name: 'ドククラゲ', rarity: 'R', img: 'images/gacha/p0073.png', rate: 20 },

  // 074 - 076 イシツブテ系統（アローラ含む）
  { id: 'p0074', name: 'イシツブテ', rarity: 'N', img: 'images/gacha/p0074.png', rate: 30 },
  { id: 'p0074-a', name: 'アローライシツブテ', rarity: 'N', img: 'images/gacha/p0074-a.png', rate: 30 },
  { id: 'p0075', name: 'ゴローン', rarity: 'R', img: 'images/gacha/p0075.png', rate: 20 },
  { id: 'p0075-a', name: 'アローラゴローン', rarity: 'R', img: 'images/gacha/p0075-a.png', rate: 20 },
  { id: 'p0076', name: 'ゴローニャ', rarity: 'SR', img: 'images/gacha/p0076.png', rate: 12 },
  { id: 'p0076-a', name: 'アローラゴローニャ', rarity: 'SR', img: 'images/gacha/p0076-a.png', rate: 12 },

  // 077 - 078 ポニータ系統（ガラル含む）
  { id: 'p0077', name: 'ポニータ', rarity: 'N', img: 'images/gacha/p0077.png', rate: 30 },
  { id: 'p0077-g', name: 'ガラルポニータ', rarity: 'N', img: 'images/gacha/p0077-g.png', rate: 30 },
  { id: 'p0078', name: 'ギャロップ', rarity: 'SR', img: 'images/gacha/p0078.png', rate: 12 },
  { id: 'p0078-g', name: 'ガラルギャロップ', rarity: 'SR', img: 'images/gacha/p0078-g.png', rate: 12 },

  // 079 - 080 ヤドン系統（ガラル・メガ含む）
  { id: 'p0079', name: 'ヤドン', rarity: 'N', img: 'images/gacha/p0079.png', rate: 30 },
  { id: 'p0079-g', name: 'ガラルヤドン', rarity: 'N', img: 'images/gacha/p0079-g.png', rate: 30 },
  { id: 'p0080', name: 'ヤドラン', rarity: 'SR', img: 'images/gacha/p0080.png', rate: 12 },
  { id: 'p0080-m', name: 'メガヤドラン', rarity: 'SSR', img: 'images/gacha/p0080-m.png', rate: 7 },
  { id: 'p0080-g', name: 'ガラルヤドラン', rarity: 'SR', img: 'images/gacha/p0080-g.png', rate: 12 },

  // 081 - 082 コイル系統
  { id: 'p0081', name: 'コイル', rarity: 'N', img: 'images/gacha/p0081.png', rate: 30 },
  { id: 'p0082', name: 'レアコイル', rarity: 'R', img: 'images/gacha/p0082.png', rate: 20 },

  // 083 カモネギ（ガラル含む）
  { id: 'p0083', name: 'カモネギ', rarity: 'R', img: 'images/gacha/p0083.png', rate: 20 },
  { id: 'p0083-g', name: 'ガラルのカモネギ', rarity: 'R', img: 'images/gacha/p0083-g.png', rate: 20 },

  // 084 - 085 ドードー系統
  { id: 'p0084', name: 'ドードー', rarity: 'N', img: 'images/gacha/p0084.png', rate: 30 },
  { id: 'p0085', name: 'ドードリオ', rarity: 'R', img: 'images/gacha/p0085.png', rate: 20 },

  // 086 - 087 パウワウ系統
  { id: 'p0086', name: 'パウワウ', rarity: 'N', img: 'images/gacha/p0086.png', rate: 30 },
  { id: 'p0087', name: 'ジュゴン', rarity: 'R', img: 'images/gacha/p0087.png', rate: 20 },

  // 088 - 089 ベトベター系統（アローラ含む）
  { id: 'p0088', name: 'ベトベター', rarity: 'N', img: 'images/gacha/p0088.png', rate: 30 },
  { id: 'p0088-a', name: 'アローラベトベター', rarity: 'N', img: 'images/gacha/p0088-a.png', rate: 30 },
  { id: 'p0089', name: 'ベトベトン', rarity: 'SR', img: 'images/gacha/p0089.png', rate: 12 },
  { id: 'p0089-a', name: 'アローラベトベトン', rarity: 'SR', img: 'images/gacha/p0089-a.png', rate: 12 },

  // 090 - 091 シェルダー系統
  { id: 'p0090', name: 'シェルダー', rarity: 'N', img: 'images/gacha/p0090.png', rate: 30 },
  { id: 'p0091', name: 'パルシェン', rarity: 'SR', img: 'images/gacha/p0091.png', rate: 12 },

  // 092 - 094 ゴース系統
  { id: 'p0092', name: 'ゴース', rarity: 'N', img: 'images/gacha/p0092.png', rate: 30 },
  { id: 'p0093', name: 'ゴースト', rarity: 'R', img: 'images/gacha/p0093.png', rate: 20 },
  { id: 'p0094', name: 'ゲンガー', rarity: 'SR', img: 'images/gacha/p0094.png', rate: 12 },
  { id: 'p0094-m', name: 'メガゲンガー', rarity: 'SSR', img: 'images/gacha/p0094-m.png', rate: 7 },
  { id: 'p0094-k', name: 'キョダイゲンガー', rarity: 'UR', img: 'images/gacha/p0094-k.png', rate: 3 },

  // 095 イワーク
  { id: 'p0095', name: 'イワーク', rarity: 'R', img: 'images/gacha/p0095.png', rate: 20 },

  // 096 - 097 スリープ系統
  { id: 'p0096', name: 'スリープ', rarity: 'N', img: 'images/gacha/p0096.png', rate: 30 },
  { id: 'p0097', name: 'スリーパー', rarity: 'R', img: 'images/gacha/p0097.png', rate: 20 },

  // 098 - 099 クラブ系統
  { id: 'p0098', name: 'クラブ', rarity: 'N', img: 'images/gacha/p0098.png', rate: 30 },
  { id: 'p0099', name: 'キングラー', rarity: 'SR', img: 'images/gacha/p0099.png', rate: 12 },
  { id: 'p0099-k', name: 'キョダイキングラー', rarity: 'UR', img: 'images/gacha/p0099-k.png', rate: 3 },

  // 100 - 101 ビリリダマ系統（ヒスイ含む）
  { id: 'p0100', name: 'ビリリダマ', rarity: 'N', img: 'images/gacha/p0100.png', rate: 30 },
  { id: 'p0100-h', name: 'ヒスイビリリダマ', rarity: 'N', img: 'images/gacha/p0100-h.png', rate: 30 },
  { id: 'p0101', name: 'マルマイン', rarity: 'R', img: 'images/gacha/p0101.png', rate: 20 },
  { id: 'p0101-h', name: 'ヒスイマルマイン', rarity: 'R', img: 'images/gacha/p0101-h.png', rate: 20 },

  // 102 - 103 タマタマ系統（アローラ含む）
  { id: 'p0102', name: 'タマタマ', rarity: 'N', img: 'images/gacha/p0102.png', rate: 30 },
  { id: 'p0103', name: 'ナッシー', rarity: 'SR', img: 'images/gacha/p0103.png', rate: 12 },
  { id: 'p0103-a', name: 'アローラナッシー', rarity: 'SR', img: 'images/gacha/p0103-a.png', rate: 12 },

  // 104 - 105 カラカラ系統（アローラ含む）
  { id: 'p0104', name: 'カラカラ', rarity: 'N', img: 'images/gacha/p0104.png', rate: 30 },
  { id: 'p0105', name: 'ガラガラ', rarity: 'R', img: 'images/gacha/p0105.png', rate: 20 },
  { id: 'p0105-a', name: 'アローラガラガラ', rarity: 'SR', img: 'images/gacha/p0105-a.png', rate: 12 },

  // 106 - 107 サワムラー・エビワラー
  { id: 'p0106', name: 'サワムラー', rarity: 'SR', img: 'images/gacha/p0106.png', rate: 12 },
  { id: 'p0107', name: 'エビワラー', rarity: 'SR', img: 'images/gacha/p0107.png', rate: 12 },

  // 108 ベロリンガ
  { id: 'p0108', name: 'ベロリンガ', rarity: 'N', img: 'images/gacha/p0108.png', rate: 30 },

  // 109 - 110 ドガース系統（ガラル含む）
  { id: 'p0109', name: 'ドガース', rarity: 'N', img: 'images/gacha/p0109.png', rate: 30 },
  { id: 'p0110', name: 'マタドガス', rarity: 'SR', img: 'images/gacha/p0110.png', rate: 12 },
  { id: 'p0110-g', name: 'ガラルマタドガス', rarity: 'SR', img: 'images/gacha/p0110-g.png', rate: 12 },

  // 111 - 112 サイホーン系統
  { id: 'p0111', name: 'サイホーン', rarity: 'N', img: 'images/gacha/p0111.png', rate: 30 },
  { id: 'p0112', name: 'サイドン', rarity: 'SR', img: 'images/gacha/p0112.png', rate: 12 },

  // 113 ラッキー
  { id: 'p0113', name: 'ラッキー', rarity: 'SR', img: 'images/gacha/p0113.png', rate: 12 },

  // 114 モンジャラ
  { id: 'p0114', name: 'モンジャラ', rarity: 'N', img: 'images/gacha/p0114.png', rate: 30 },

  // 115 ガルーラ
  { id: 'p0115', name: 'ガルーラ', rarity: 'SR', img: 'images/gacha/p0115.png', rate: 12 },
  { id: 'p0115-m', name: 'メガガルーラ', rarity: 'SSR', img: 'images/gacha/p0115-m.png', rate: 7 },

  // 116 - 117 タッツー系統
  { id: 'p0116', name: 'タッツー', rarity: 'N', img: 'images/gacha/p0116.png', rate: 30 },
  { id: 'p0117', name: 'シードラ', rarity: 'R', img: 'images/gacha/p0117.png', rate: 20 },

  // 118 - 119 トサキント系統
  { id: 'p0118', name: 'トサキント', rarity: 'N', img: 'images/gacha/p0118.png', rate: 30 },
  { id: 'p0119', name: 'アズマオウ', rarity: 'R', img: 'images/gacha/p0119.png', rate: 20 },

  // 120 - 121 ヒトデマン系統
  { id: 'p0120', name: 'ヒトデマン', rarity: 'N', img: 'images/gacha/p0120.png', rate: 30 },
  { id: 'p0121', name: 'スターミー', rarity: 'SR', img: 'images/gacha/p0121.png', rate: 12 },

  // 122 バリヤード（ガラル含む）
  { id: 'p0122', name: 'バリヤード', rarity: 'R', img: 'images/gacha/p0122.png', rate: 20 },
  { id: 'p0122-g', name: 'ガラルバリヤード', rarity: 'R', img: 'images/gacha/p0122-g.png', rate: 20 },

  // 123 ストライク
  { id: 'p0123', name: 'ストライク', rarity: 'SR', img: 'images/gacha/p0123.png', rate: 12 },

  // 124 ルージュラ
  { id: 'p0124', name: 'ルージュラ', rarity: 'R', img: 'images/gacha/p0124.png', rate: 20 },

  // 125 エレブー
  { id: 'p0125', name: 'エレブー', rarity: 'SR', img: 'images/gacha/p0125.png', rate: 12 },

  // 126 ブーバー
  { id: 'p0126', name: 'ブーバー', rarity: 'SR', img: 'images/gacha/p0126.png', rate: 12 },

  // 127 カイロス
  { id: 'p0127', name: 'カイロス', rarity: 'SR', img: 'images/gacha/p0127.png', rate: 12 },
  { id: 'p0127-m', name: 'メガカイロス', rarity: 'SSR', img: 'images/gacha/p0127-m.png', rate: 7 },

  // 128 ケンタロス（パルデア含む）
  { id: 'p0128', name: 'ケンタロス', rarity: 'SR', img: 'images/gacha/p0128.png', rate: 12 },
  { id: 'p0128-p', name: 'パルデアケンタロス', rarity: 'SR', img: 'images/gacha/p0128-p.png', rate: 12 },

  // 129 - 130 コイキング系統
  { id: 'p0129', name: 'コイキング', rarity: 'N', img: 'images/gacha/p0129.png', rate: 30 },
  { id: 'p0130', name: 'ギャラドス', rarity: 'SR', img: 'images/gacha/p0130.png', rate: 12 },
  { id: 'p0130-m', name: 'メガギャラドス', rarity: 'SSR', img: 'images/gacha/p0130-m.png', rate: 7 },

  // 131 ラプラス
  { id: 'p0131', name: 'ラプラス', rarity: 'SR', img: 'images/gacha/p0131.png', rate: 12 },
  { id: 'p0131-k', name: 'キョダイラプラス', rarity: 'UR', img: 'images/gacha/p0131-k.png', rate: 3 },

  // 132 メタモン
  { id: 'p0132', name: 'メタモン', rarity: 'R', img: 'images/gacha/p0132.png', rate: 20 },

  // 133 - 136 イーブイ系統
  { id: 'p0133', name: 'イーブイ', rarity: 'R', img: 'images/gacha/p0133.png', rate: 20 },
  { id: 'p0133-k', name: 'キョダイイーブイ', rarity: 'UR', img: 'images/gacha/p0133-k.png', rate: 3 },
  { id: 'p0134', name: 'シャワーズ', rarity: 'SR', img: 'images/gacha/p0134.png', rate: 12 },
  { id: 'p0135', name: 'サンダース', rarity: 'SR', img: 'images/gacha/p0135.png', rate: 12 },
  { id: 'p0136', name: 'ブースター', rarity: 'SR', img: 'images/gacha/p0136.png', rate: 12 },

  // 137 ポリゴン
  { id: 'p0137', name: 'ポリゴン', rarity: 'R', img: 'images/gacha/p0137.png', rate: 20 },

  // 138 - 139 オムナイト系統
  { id: 'p0138', name: 'オムナイト', rarity: 'N', img: 'images/gacha/p0138.png', rate: 30 },
  { id: 'p0139', name: 'オムスター', rarity: 'SR', img: 'images/gacha/p0139.png', rate: 12 },

  // 140 - 141 カブト系統
  { id: 'p0140', name: 'カブト', rarity: 'N', img: 'images/gacha/p0140.png', rate: 30 },
  { id: 'p0141', name: 'カブトプス', rarity: 'SR', img: 'images/gacha/p0141.png', rate: 12 },

  // 142 プテラ
  { id: 'p0142', name: 'プテラ', rarity: 'SR', img: 'images/gacha/p0142.png', rate: 12 },
  { id: 'p0142-m', name: 'メガプテラ', rarity: 'SSR', img: 'images/gacha/p0142-m.png', rate: 7 },

  // 143 カビゴン
  { id: 'p0143', name: 'カビゴン', rarity: 'SR', img: 'images/gacha/p0143.png', rate: 12 },
  { id: 'p0143-k', name: 'キョダイカビゴン', rarity: 'UR', img: 'images/gacha/p0143-k.png', rate: 3 },

  // 144 - 146 三鳥（伝説・ガラル含む）
  { id: 'p0144', name: 'フリーザー', rarity: 'SSR', img: 'images/gacha/p0144.png', rate: 7 },
  { id: 'p0144-g', name: 'ガラルフリーザー', rarity: 'SSR', img: 'images/gacha/p0144-g.png', rate: 7 },
  { id: 'p0145', name: 'サンダー', rarity: 'SSR', img: 'images/gacha/p0145.png', rate: 7 },
  { id: 'p0145-g', name: 'ガラルサンダー', rarity: 'SSR', img: 'images/gacha/p0145-g.png', rate: 7 },
  { id: 'p0146', name: 'ファイヤー', rarity: 'SSR', img: 'images/gacha/p0146.png', rate: 7 },
  { id: 'p0146-g', name: 'ガラルファイヤー', rarity: 'SSR', img: 'images/gacha/p0146-g.png', rate: 7 },

  // 147 - 149 ミニリュウ系統
  { id: 'p0147', name: 'ミニリュウ', rarity: 'N', img: 'images/gacha/p0147.png', rate: 30 },
  { id: 'p0148', name: 'ハクリュー', rarity: 'R', img: 'images/gacha/p0148.png', rate: 20 },
  { id: 'p0149', name: 'カイリュー', rarity: 'SR', img: 'images/gacha/p0149.png', rate: 12 },

  // 150 - 151 ミュウツー・ミュウ
  { id: 'p0150', name: 'ミュウツー', rarity: 'UR', img: 'images/gacha/p0150.png', rate: 3 },
  { id: 'p0150-x', name: 'メガミュウツーX', rarity: 'UR', img: 'images/gacha/p0150-x.png', rate: 3 },
  { id: 'p0150-y', name: 'メガミュウツーY', rarity: 'UR', img: 'images/gacha/p0150-y.png', rate: 3 },
  { id: 'p0151', name: 'ミュウ', rarity: 'UR', img: 'images/gacha/p0151.png', rate: 3 },

  // 先行登録相棒枠（シンオウ地方）
  { id: 'p0445', name: 'ガブリアス', rarity: 'SR', img: 'images/gacha/p0445.png', rate: 12 },
  { id: 'p0445-m', name: 'メガガブリアス', rarity: 'SSR', img: 'images/gacha/p0445-m.png', rate: 7 },
  { id: 'p0448', name: 'ルカリオ', rarity: 'SR', img: 'images/gacha/p0448.png', rate: 12 },
  { id: 'p0448-m', name: 'メガルカリオ', rarity: 'SSR', img: 'images/gacha/p0448-m.png', rate: 7 }
];
