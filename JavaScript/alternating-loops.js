const combine = (...arrays) => {
  let allItems = 0;

  for (let i = 0; i < arrays.length; i++) {
    allItems += arrays[i].length;
  }

  const result = [];

  let itemsCount = 0;
  let arrayIndex = 0;
  let itemIndex = 0;

  while (itemsCount < allItems) {
    if (arrayIndex === arrays.length) {
      arrayIndex = 0;
      itemIndex++;
    }

    if (!arrays[arrayIndex][itemIndex]) {
      arrayIndex++;
      continue;
    }

    result.push(arrays[arrayIndex][itemIndex]);
    itemsCount++;
    arrayIndex++;
  }

  return result;
};
