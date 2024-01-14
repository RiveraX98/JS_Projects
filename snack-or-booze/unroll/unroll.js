function unroll(squareArray) {
  const arr = [];

  if (squareArray.length === 0) return arr;
  let rowBegin = 0;
  let rowEnd = squareArray.length - 1;
  let columnBegin = 0;
  let columnEnd = squareArray[0].length - 1;

  while (rowBegin <= rowEnd && columnBegin <= columnEnd) {
    for (let i = columnBegin; i <= columnEnd; i++) {
      arr.push(squareArray[rowBegin][i]);
    }
    rowBegin++;

    for (let i = rowBegin; i <= rowEnd; i++) {
      arr.push(squareArray[i][columnEnd]);
    }
    columnEnd--;

    if (rowBegin <= rowEnd) {
      for (let i = columnEnd; i >= columnBegin; i--) {
        arr.push(squareArray[rowEnd][i]);
      }
    }
    rowEnd--;

    if (columnBegin <= columnEnd) {
      for (let i = rowEnd; i >= rowBegin; i--) {
        arr.push(squareArray[i][columnBegin]);
      }
    }
    columnBegin++;
  }
  return arr;
}

module.exports = unroll;

const square = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

console.log(unroll(square));
