array = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
];
array = [
  [5, 7, 6, 3],
  [0, 0, 0, 4],
  [4, 6, 4, 9],
  [4, 6, 4, 9],
  [3, 1, 5, 8]
];
array = [
  [5, 7, 6, 3],
  [0, 0, 0, 4],
  [4, 6, 4, 9],
  [3, 1, 5, 8]
];

array = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
];

function hungryRabbit(array) {
  let numRows = array.length;
  let numCols = array[1].length;

  let centerIdx;
  if (numRows % 2 !== 0 && numCols % 2 !== 0) {
    centerIdx = [[Math.floor(numRows / 2)], [Math.floor(numCols / 2)]];
  } else if (numRows % 2 === 0 && numCols % 2 !== 0) {
    let centerCol = Math.floor(numCols / 2);
    if (array[numRows / 2 - 1][centerCol] > array[numRows / 2][centerCol]) {
      centerIdx = [[numRows / 2 - 1], [centerCol]];
    } else {
      centerIdx = [[numRows / 2 - 1], [centerCol]];
    }
  } else if (numRows % 2 !== 0 && numCols % 2 === 0) {
    let centerRow = Math.floor(numRows / 2);
    if (array[centerRow][numCols / 2 - 1] > array[centerRow][numCols / 2]) {
      centerIdx = [[centerRow], [numCols / 2 - 1]];
    } else {
      centerIdx = [[centerRow], [numCols / 2]];
    }
  } else if (numRows % 2 === 0 && numCols % 2 === 0) {
    let max1;
    let max2;
    if (
      array[numRows / 2 - 1][numCols / 2 - 1] >
      array[numRows / 2 - 1][numCols / 2]
    ) {
      max1 = [[numRows / 2 - 1], [numCols / 2 - 1]];
    } else {
      max1 = [[numRows / 2 - 1], [numCols / 2]];
    }
    if (
      array[numRows / 2][numCols / 2 - 1] > array[numRows / 2][numCols / 2 - 1]
    ) {
      max2 = [[numRows / 2], [numCols / 2 - 1]];
    } else {
      max2 = [[numRows / 2], [numCols / 2 - 1]];
    }
    if (array[max1[0]][max1[1]] > array[max2[0]][max2[1]]) {
      centerIdx = max1;
    } else {
      centerIdx = max2;
    }
  }

  let countCarrots = array[centerIdx[0][0]][centerIdx[1][0]];

  let asleep = false;

  while (!asleep) {
    array[centerIdx[0][0]][centerIdx[1][0]] = 0;

    let directions = [
      [-1, -1],
      [-1, 0],
      [-1, 1],
      [0, -1],
      [0, 1],
      [1, -1],
      [1, 0],
      [1, 1]
    ];
    let options = [];

    for (let i = 0; i < directions.length; i++) {
      let currentIdx = [
        parseInt(centerIdx[0]) + parseInt(directions[i][0]),
        parseInt(centerIdx[1]) + parseInt(directions[i][1])
      ];

      if (
        currentIdx[0] > -1 &&
        currentIdx[0] < numRows &&
        currentIdx[1] > -1 &&
        currentIdx[1] < numCols
      ) {
        options.push([array[currentIdx[0]][currentIdx[1]], currentIdx]);
      }
    }

    let curMax = options[0];
    for (let i = 1; i < options.length; i++) {
      if (options[i][0] > curMax[0]) {
        curMax = options[i];
      }
    }

    if (curMax[0] === 0) {
      return countCarrots;
    }

    countCarrots += curMax[0];
    centerIdx = [[curMax[1][0]], [curMax[1][1]]];
  }

  return countCarrots;
}

hungryRabbit(array);
