Date.prototype.lastYear = function() {
  // return String(this).match(/\d{4}/) - 1
  return this.getFullYear() - 1
}

console.log(new Date('10-10-1900').getFullYear())
console.log(new Date('10-10-1900').lastYear())
console.log(new Date('10-10-15').lastYear())


const array = [1, 2, 3]

Array.prototype.map = function(fn) {
  const arr = []

  for (let i = 0; i < this.length; i++) {
    arr.push(
      fn && typeof fn === 'function'
        ? fn(this[i]) + '🍕'
        : fn ? fn + '🍕'
        : this[i] + '🍕'
    )
  }

  return arr
}

console.log(array.map())
console.log(array.map(5))
console.log(array.map(el => el * 5))
