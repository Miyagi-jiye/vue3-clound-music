// 播放量计算过滤，10000显示万，10000000显示千万，100000000显示亿
export const playCountFilter = (number) => {

  if (number > 100000000) {
    return Number((number / 100000000).toFixed(1)) + ' 亿';
  }

  if (number > 10000000) {
    return Number((number / 10000000).toFixed(1)) + ' 千万';
  }

  if (number > 10000) {
    return Number((number / 10000).toFixed(1)) + ' 万';
  }

  return number;
}