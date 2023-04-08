unction sumItems(array) {
  let sum = 0;
  for(let element of array) {
    if(Array.isArray(element)) {
      sum += sumItems(element);
    } else {
      sum += element;
    }
  }
  return sum;
}

console.log(sumItems([[1, 2, [[3], 4]], 5, []]));

module.exports = sumItems;
