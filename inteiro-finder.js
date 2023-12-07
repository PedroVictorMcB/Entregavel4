function intFinder(arr) {
    const inteiros = arr.filter(numero => Number.isInteger(numero));
    return inteiros;
}
  
module.exports = intFinder;
