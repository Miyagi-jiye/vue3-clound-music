// 格式化播放音乐时间
export function formatTime(time) {
  // 如果时间 等于0 或者 等于NaN 先显示00：00
  if (time == 0 || window.isNaN(time)) {
    return '00:00'
  }
  let sec = Math.floor(time % 60);
  let min = Math.floor(time / 60);
  // 返回格式 00：00 不足两位的补零
  return `${min < 10 ? '0' + min : min}:${sec < 10 ? '0' + sec : sec}`;
}