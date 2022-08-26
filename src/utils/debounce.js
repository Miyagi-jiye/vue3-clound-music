// 函数防抖
export function debounce(fn, delay, immediate) {
  let timer = null;
  return function () {
    if (timer) clearTimeout(timer);
    if (immediate == true) {
      fn.apply(this, arguments);
      immediate = false
    }
    timer = setTimeout(() => {
      fn.apply(this, arguments);
    }, delay);
  }
}