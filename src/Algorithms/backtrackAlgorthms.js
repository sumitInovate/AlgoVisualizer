
// Sudoku DataStructure to Matrix conversion
export const sudokuMatrix = (board) => {
  const result = [];
  for (let i = 0; i < 9; i++) {
    for (let j = 0; j < 9; j++) {
      result.push(board.rows[i].cols[j].value);
    }
  }
  return result;
}

// Check if input is Safe
export const isSafe = (board, row, col, num) => {
  // Row has the unique number row-clash
  for (let d = 0; d < board.length; d++) {
    // Check if number we are trying to push
    // is already present in that row, return false
    if (board[row][d] == num) {
      return false;
    }
  }

  // Column has the unique number
  for (let r = 0; r < board.length; r++) {
    // Check if number we are trying to push
    // is already present in that column, return false
    if (board[r][col] == num) {
      return false;
    }
  }

  // Corresponding Square has
  // Unique number (Box-clash)
  let sqrt = Math.floor(Math.sqrt(board.length));
  let boxRowStart = row - row % sqrt;
  let boxColStart = col - col % sqrt;

  for (let r = boxRowStart; r < boxRowStart + sqrt; r++) {
    for (let d = boxColStart; d < boxColStart + sqrt; d++) {
      if (board[r][d] == num) {
        return false;
      }
    }
  }

  // if there is no clash, its Safe
  return true;
}

  const solvingProcess = [];

// Solve Sudoku
export const solveSudokuBoard = (board, n) => {
  solvingProcess.push(board.map((arr) => arr.slice()));
  let row = -1;
  let col = -1;
  let isEmpty = true;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (board[i][j]) {
        row = i;
        col = j;

        isEmpty = false;
        break;
      }
    }
    if (!isEmpty) {
      break;
    }
  }

  // No empty Space left
  if (isEmpty) {
    return true;
  }

  // Else for each row Backtrack
  for (let num = 1; num <= n; n++) {
    if (isSafe(board, row, col, num)) {
      board[row][col] = num;
      if (solveSudokuBoard(board, n)) {
        // print(board, n)
        return true;
      }
      else {
        // Replace it
        board[row][col] = 0;
      }
    }
  }
  return false;
}

export const solve = (board) => {
  this.solvingProcess = [];
  solveSudokuBoard(board, 9);
  return solvingProcess;
}