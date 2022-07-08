// **************************************************
// 商品リスト
// **************************************************
const PRODUCT_LIST = [
  {
    product_name: '內衣',
    product_name_short: '內衣',
    image_url: '',
    product_id: 'A',
    image_urls: [
      { category1: 'BL', image_url: '商品圖/海軍藍.jpg' },
      { category1: 'BK', image_url: '商品圖/率性黑.jpg' },
      { category1: 'RD', image_url: '商品圖/櫻花粉.jpg' },
      { category1: 'LP', image_url: '商品圖/薰衣草紫.jpg' },
      { category1: 'SL', image_url: '商品圖/天空藍.jpg' },
      { category1: 'HB', image_url: '商品圖/異色黑.jpg' },
      { category1: 'SG', image_url: '商品圖/寧靜灰.jpg' },
      { category1: 'NO', image_url: '商品圖/輕裸橘.jpg' },
      { category1: 'WG', image_url: '商品圖/溫暖灰.png' },
      { category1: 'AY', image_url: '商品圖/活力黃.png' },
      { category1: 'CP', image_url: '商品圖/珊瑚粉.png' },
      { category1: 'CB', image_url: '商品圖/可可棕.png' },
      { category1: 'AIR', image_url: '商品圖/AIR黑.jpg' },
      { category1: 'AIRGB', image_url: '商品圖/AIR灰藍.png' },
    ],
  },
  // 可複數
]

// **************************************************
// 顏色選擇
// **************************************************
const CATEGORY_1_LIST = {
  label: '請選擇顏色',
  list: [
    {
      label: '請選擇顏色及數量<br>海軍藍',
      value: 'BL',
      label_short: '海軍藍',
    },
    { label: '請選擇顏色及數量<br>率性黑', value: 'BK', label_short: '率性黑' },
    { label: '請選擇顏色及數量<br>櫻花粉', value: 'RD', label_short: '櫻花粉' },
    {
      label: '請選擇顏色及數量<br>薰衣草紫',
      value: 'LP',
      label_short: '薰衣草紫',
    },
    { label: '請選擇顏色及數量<br>天空藍', value: 'SL', label_short: '天空藍' },
    { label: '請選擇顏色及數量<br>異色黑', value: 'HB', label_short: '異色黑' },
    { label: '請選擇顏色及數量<br>寧靜灰', value: 'SG', label_short: '寧靜灰' },
    { label: '請選擇顏色及數量<br>輕裸橘', value: 'NO', label_short: '輕裸橘' },
    {
      label: '請選擇顏色及數量<br>溫暖灰',
      value: 'WG',
      label_short: '溫暖灰',
    },
    {
      label: '請選擇顏色及數量<br>活力黃',
      value: 'AY',
      label_short: '活力黃',
    },
    {
      label: '請選擇顏色及數量<br>珊瑚粉',
      value: 'CP',
      label_short: '珊瑚粉',
    },
    {
      label: '請選擇顏色及數量<br>可可棕',
      value: 'CB',
      label_short: '可可棕',
    },
    {
      label: '請選擇顏色及數量<br>Air舒涼版 黑色',
      value: 'AIR',
      label_short: 'Air舒涼版 黑色',
    },
    {
      label: '請選擇顏色及數量<br>Air舒涼版 灰藍(新色限量上市)',
      value: 'AIRGB',
      label_short: 'Air舒涼版 灰藍',
    },
  ],
}

// **************************************************
// 尺寸選擇
// **************************************************
const CATEGORY_2_LIST = {
  label: '請選擇尺寸',
  list: [
    { label: 'S', value: 'S', label_short: 'S' },
    { label: 'S/M', value: 'SM', label_short: 'S/M' },
    { label: 'M', value: 'M', label_short: 'M' },
    { label: 'M/L', value: 'ML', label_short: 'M/L' },
    { label: 'L', value: 'L', label_short: 'L' },
    { label: 'LL', value: 'LL', label_short: 'LL' },
  ],
}

// **************************************************
// 商品リスト
// **************************************************
const PRODUCT_CATEGORY_MAPPING = [
  {
    product_id: 'A',
    product_code_mapping: [
      { product_code: '4560449970440', category2: 'S', category1: 'BL' },
      { product_code: '4560449970600', category2: 'SM', category1: 'BL' },
      { product_code: '4560449970457', category2: 'M', category1: 'BL' },
      { product_code: '4560449970617', category2: 'ML', category1: 'BL' },
      { product_code: '4560449970464', category2: 'L', category1: 'BL' },
      { product_code: '4560449970624', category2: 'LL', category1: 'BL' },

      { product_code: '4560449970266', category2: 'S', category1: 'BK' },
      { product_code: '4560449970570', category2: 'SM', category1: 'BK' },
      { product_code: '4560449970273', category2: 'M', category1: 'BK' },
      { product_code: '4560449970587', category2: 'ML', category1: 'BK' },
      { product_code: '4560449970280', category2: 'L', category1: 'BK' },
      { product_code: '4560449970594', category2: 'LL', category1: 'BK' },

      { product_code: '4560449970327', category2: 'S', category1: 'RD' },
      { product_code: '4560449970631', category2: 'SM', category1: 'RD' },
      { product_code: '4560449970334', category2: 'M', category1: 'RD' },
      { product_code: '4560449970648', category2: 'ML', category1: 'RD' },
      { product_code: '4560449970341', category2: 'L', category1: 'RD' },
      { product_code: '4560449970655', category2: 'LL', category1: 'RD' },

      { product_code: '4560449970297', category2: 'S', category1: 'LP' },
      { product_code: '4560449970662', category2: 'SM', category1: 'LP' },
      { product_code: '4560449970396', category2: 'M', category1: 'LP' },
      { product_code: '4560449970679', category2: 'ML', category1: 'LP' },
      { product_code: '4560449970310', category2: 'L', category1: 'LP' },
      { product_code: '4560449970686', category2: 'LL', category1: 'LP' },

      { product_code: '4560449970402', category2: 'S', category1: 'SL' },
      { product_code: '4560449970693', category2: 'SM', category1: 'SL' },
      { product_code: '4560449970419', category2: 'M', category1: 'SL' },
      { product_code: '4560449970709', category2: 'ML', category1: 'SL' },
      { product_code: '4560449970426', category2: 'L', category1: 'SL' },
      { product_code: '4560449970716', category2: 'LL', category1: 'SL' },

      { product_code: '4560449970792', category2: 'S', category1: 'HB' },
      { product_code: '4560449970808', category2: 'SM', category1: 'HB' },
      { product_code: '4560449970815', category2: 'M', category1: 'HB' },
      { product_code: '4560449970822', category2: 'ML', category1: 'HB' },
      { product_code: '4560449970839', category2: 'L', category1: 'HB' },
      { product_code: '4560449970846', category2: 'LL', category1: 'HB' },

      { product_code: '4560449970853', category2: 'S', category1: 'SG' },
      { product_code: '4560449970860', category2: 'SM', category1: 'SG' },
      { product_code: '4560449970877', category2: 'M', category1: 'SG' },
      { product_code: '4560449970884', category2: 'ML', category1: 'SG' },
      { product_code: '4560449970891', category2: 'L', category1: 'SG' },
      { product_code: '4560449970907', category2: 'LL', category1: 'SG' },

      { product_code: '4560449973175', category2: 'S', category1: 'NO' },
      { product_code: '4560449973182', category2: 'SM', category1: 'NO' },
      { product_code: '4560449973199', category2: 'M', category1: 'NO' },
      { product_code: '4560449973205', category2: 'ML', category1: 'NO' },
      { product_code: '4560449973212', category2: 'L', category1: 'NO' },
      { product_code: '4560449973229', category2: 'LL', category1: 'NO' },

      { product_code: '4560449974912', category2: 'S', category1: 'WG' },
      { product_code: '4560449974929', category2: 'SM', category1: 'WG' },
      { product_code: '4560449974936', category2: 'M', category1: 'WG' },
      { product_code: '4560449974943', category2: 'ML', category1: 'WG' },
      { product_code: '4560449974950', category2: 'L', category1: 'WG' },
      { product_code: '4560449974967', category2: 'LL', category1: 'WG' },

      { product_code: '4560449974974', category2: 'S', category1: 'AY' },
      { product_code: '4560449974981', category2: 'SM', category1: 'AY' },
      { product_code: '4560449974998', category2: 'M', category1: 'AY' },
      { product_code: '4560449975001', category2: 'ML', category1: 'AY' },
      { product_code: '4560449975018', category2: 'L', category1: 'AY' },
      { product_code: '4560449975025', category2: 'LL', category1: 'AY' },

      { product_code: '4560449975391', category2: 'S', category1: 'CP' },
      { product_code: '4560449975407', category2: 'SM', category1: 'CP' },
      { product_code: '4560449975414', category2: 'M', category1: 'CP' },
      { product_code: '4560449975421', category2: 'ML', category1: 'CP' },
      { product_code: '4560449975438', category2: 'L', category1: 'CP' },
      { product_code: '4560449975445', category2: 'LL', category1: 'CP' },

      { product_code: '4560449975452', category2: 'S', category1: 'CB' },
      { product_code: '4560449975469', category2: 'SM', category1: 'CB' },
      { product_code: '4560449975476', category2: 'M', category1: 'CB' },
      { product_code: '4560449975483', category2: 'ML', category1: 'CB' },
      { product_code: '4560449975490', category2: 'L', category1: 'CB' },
      { product_code: '4560449975506', category2: 'LL', category1: 'CB' },

      { product_code: '4560449971164', category2: 'S', category1: 'AIR' },
      { product_code: '4560449971171', category2: 'SM', category1: 'AIR' },
      { product_code: '4560449971188', category2: 'M', category1: 'AIR' },
      { product_code: '4560449971195', category2: 'ML', category1: 'AIR' },
      { product_code: '4560449971201', category2: 'L', category1: 'AIR' },
      { product_code: '4560449971218', category2: 'LL', category1: 'AIR' },

      { product_code: '4560449976688', category2: 'S', category1: 'AIRGB' },
      { product_code: '4560449976695', category2: 'SM', category1: 'AIRGB' },
      { product_code: '4560449976701', category2: 'M', category1: 'AIRGB' },
      { product_code: '4560449976718', category2: 'ML', category1: 'AIRGB' },
      { product_code: '4560449976725', category2: 'L', category1: 'AIRGB' },
      { product_code: '4560449976732', category2: 'LL', category1: 'AIRGB' },
    ],
  },
  // 可複數
]
