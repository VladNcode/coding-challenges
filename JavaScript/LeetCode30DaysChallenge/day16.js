const throttle = function (fn, t) {
  let timeout = null;
  let savedArgs = null;

  const timeOutFunction = () => {
    if (savedArgs === null) {
      timeout = null;
    } else {
      fn(...savedArgs);
      savedArgs = null;
      timeout = setTimeout(timeOutFunction, t);
    }
  };

  return function (...args) {
    if (timeout) {
      savedArgs = args;
    } else {
      fn(...args);
      timeout = timeout = setTimeout(timeOutFunction, t);
    }
  };
};
