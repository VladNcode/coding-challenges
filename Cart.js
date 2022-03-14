// вот еще классическая, её на 50% собесов спрашивают
// const str = "AaaaBbbCcccDdNMmmm";

// Получить "A4B3C4D2N1M4"

let str = 'AaaaBbbCcccDdNMmmm';
str = str.toLowerCase();
let counter = 1;
let fin = '';

for (let i = 0; i < str.length; i++) {
  if (str[i] === str[i + 1]) {
    counter++;
  } else {
    // fin += `${str[i].toUpperCase()}${counter}`;
    fin += str[i].toUpperCase() + counter;
    counter = 1;
  }
}

console.log(fin);

// со сбера задача, нужно сравнить корзину пользователя с наличием на складе, если хватает то ок, если нехватает то переформировать корзину в соответствии со складом, и вычислить итоговую стоимость)))

const vegetableStorageData = {
  Titles: {
    Репа: { id: 1, qty: 4 },
    Капуста: { id: 2, qty: 1 },
    Тыква: { id: 3, qty: 14 },
    Томат: { id: 4, qty: 5 },
    Картошка: { id: 5, qty: 10 },
  },
  Prices: {
    1: { cost: '3$' },
    2: { cost: '5$' },
    3: { cost: '8$' },
    4: { cost: '10$' },
    5: { cost: '7$' },
  },
};

const basket = [
  { lot: 'Томат', amount: '6' },
  { lot: 'Капуста', amount: '2' },
  { lot: 'Репа', amount: '3' },
];

const { Titles: titles, Prices: prices } = vegetableStorageData;

const cart = basket.map(({ lot, amount }) => {
  return {
    lot,
    amount: titles[lot]['qty'] >= amount ? amount : titles[lot]['qty'] + '',
  };
});

const price = cart.reduce(
  (acc, { lot, amount }) => acc + amount * parseInt(prices[titles[lot]['id']]['cost']),
  0
);

console.log(cart, price);
