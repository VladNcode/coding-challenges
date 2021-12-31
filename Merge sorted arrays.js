const mergeSortedArrays4 = function (arr1, arr2) {
  // If arr1 or arr2 is empty return other array
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  // If arr1 last item < arr2 first item or vice verca = just concat the arrays
  if (arr1[arr1.length - 1] < arr2[0]) return [...arr1, ...arr2];
  if (arr2[arr2.length - 1] < arr1[0]) return [...arr2, ...arr1];

  const totalLength = arr1.length + arr2.length;
  const final = [];

  for (let i = 0, j = 0; final.length < totalLength; null) {
    if (arr2[j] === undefined || arr1[i] < arr2[j]) {
      final.push(arr1[i]);
      i++;
    } else {
      final.push(arr2[j]);
      j++;
    }
  }

  return final;
};

console.log(mergeSortedArrays4([5, 6, 7, 8], [1, 2, 3, 4]));
