module.exports = function towelSort (matrix) {
  return !matrix || matrix[0] === undefined ? [] : matrix.map(function (elem, index, arr) {
      if (index % 2 == 1) return elem.reverse();
      return elem;
  }).join().split(',');
}
