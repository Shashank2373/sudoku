// src/sudokuSolver.js

// Validate if a number can be placed in a given position
function isValidPlacement(grid, row, col, num) {
  for (let i = 0; i < 9; i++) {
    if (grid[row][i] === num || grid[i][col] === num) return false;
    const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
    const boxCol = 3 * Math.floor(col / 3) + (i % 3);
    if (grid[boxRow][boxCol] === num) return false;
  }
  return true;
}

// Solve Sudoku using backtracking
export function solveSudoku(grid) {
  const solve = (grid) => {
    for (let row = 0; row < 9; row++) {
      for (let col = 0; col < 9; col++) {
        if (grid[row][col] === 0) {
          for (let num = 1; num <= 9; num++) {
            if (isValidPlacement(grid, row, col, num)) {
              grid[row][col] = num;
              if (solve(grid)) return grid;
              grid[row][col] = 0;
            }
          }
          return null;
        }
      }
    }
    return grid;
  };
  return solve(grid.map(row => [...row]));
}

// Validate if the current grid is a valid Sudoku setup
export function validateSudoku(grid) {
  const isValidPlacement = (row, col, num) => {
    for (let i = 0; i < 9; i++) {
      if (grid[row][i] === num && i !== col) return false;
      if (grid[i][col] === num && i !== row) return false;
      
      const boxRow = 3 * Math.floor(row / 3) + Math.floor(i / 3);
      const boxCol = 3 * Math.floor(col / 3) + (i % 3);
      if (grid[boxRow][boxCol] === num && (boxRow !== row || boxCol !== col)) return false;
    }
    return true;
  };

  for (let row = 0; row < 9; row++) {
    for (let col = 0; col < 9; col++) {
      const num = grid[row][col];
      if (num !== 0 && !isValidPlacement(row, col, num)) {
        return false;
      }
    }
  }
  return true;
}

