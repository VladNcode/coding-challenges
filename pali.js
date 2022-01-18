// const str = "Eva, can I see bees in a cave?";
// const str = "Was it a cat I saw?";
const str = 'asssa';

const pali = function (str) {
  str = str.replace(/\W/g, '').toLowerCase();
  console.log(str);

  for (let i = 0, j = str.length - 1; i < j; i++, j--) {
    if (str[i] !== str[j]) return false;
  }

  return true;
};

console.log(pali(str));
