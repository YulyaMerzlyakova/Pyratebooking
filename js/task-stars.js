const drowMatrix = (rowsVolume, cellsVolume) => {
  str = '';
  for (let i = 1; i <= rowsVolume; i++) {
    for (let j = 1; j <= cellsVolume; j++) {
      str += ' @ ';
    }
    str += '\n';
  }
  return str;
};

// console.log(drowMatrix(5, 10));


const drowEmptyRect = (rowsVolume, cellsVolume) => {
  str = '';
  for (let i = 1; i <= rowsVolume; i++) {
    for (let j = 1; j <= cellsVolume; j++) {
      if (i > 1 && i < rowsVolume && j > 1 && j < cellsVolume) {
        str += ' ';
      } else {
        str += '*';
      }
    }
    str += '\n';
  }
  return str;
};

// console.log(drowEmptyRect(5, 10));

const drowRightTriangle = (rowsVolume, cellsVolume) => {
  str = '';
  for (let i = 1; i <= rowsVolume; i++) {
    for (let j = 1; j <= cellsVolume; j++) {
      if (i >= j) {
        str += '*';
      }
    } str += '\n';
  }
  return str;
};

// console.log(drowRightTriangle(6, 6));


const drowLeftTriangle = (rowsVolume, cellsVolume) => {
  str = '';
  for (let i = 1; i <= rowsVolume; i++) {
    for (let j = 1; j <= cellsVolume; j++) {
      if (j >= 1 && j <= cellsVolume - i) {
        str += ' ';
      } else {
        str += '*';
      }
    }
    str += '\n';
  }
  return str;
};

// console.log(drowLeftTriangle(5, 5));

const crismasTree = (rowsVolume) => {
  str = '';
  for (let i = 1; i <= rowsVolume; i++) {
    for (let j = 1; j <= rowsVolume + i - 1; j++) {
      if (j > rowsVolume - i) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }
  return str;
};

// console.log(crismasTree(4));

const reversCrismasTree = (rowsVolume) => {
  str = '';
  for (let i = 1; i <= rowsVolume; i++) {
    for (let j = 1; j <= rowsVolume * 2 - i; j++) {
      if (j > i - 1) {
        str += '*';
      } else {
        str += ' ';
      }
    }
    str += '\n';
  }
  return str;
};

// console.log(reversCrismasTree(4));


// const A = [10, 15, 5, 6];
// const B = [3, 10, 6, 18, 32];
