
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let matrix1 = [];
  let matrix2 = [];

  if (matrix === undefined) {
    return []
  }

  for (let i = 0; i < matrix.length; i++) {
     if (i % 2 === 0) {
      matrix1.push(matrix[i]);
    } if (i % 2 !== 0) {
      matrix1.push(matrix[i].reverse());
    }
  }
  
  for (let j = 0; j < matrix1.length; j++) {
    for (let k = 0; k < matrix1[j].length; k++) {
      if (j % 2 === 0) {
        matrix2.push(matrix[j][k]);
      } if (j % 2 !== 0) {
        matrix2.push(matrix[j][k]);
      }
    }
  }
  return matrix2
}
