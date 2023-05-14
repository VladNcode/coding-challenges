// prettier-ignore
const once = (fn, count = 0) => (...args) => count++ ? undefined : fn(...args);
