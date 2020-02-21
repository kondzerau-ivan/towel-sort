
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix === undefined || matrix.length === 0) {
      return [];
  }
  var ARR = [];
  
  for (var i = 0; i < matrix.length; i += 2) {
    ARR = ARR.concat(matrix[i]);
    if (i + 1 < matrix.length) {
        ARR = ARR.concat(matrix[i + 1].reverse());
    }
  }
  return ARR;
}
