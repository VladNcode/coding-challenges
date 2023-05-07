const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1


  while(left < right) {
    const sum = numbers[left] + numbers[right]

    if(target === sum) return [++left, ++right]
    if(target > sum) left++
    if(target < sum) right--
  }

  return [-1, -1]
};
