import React, { useState } from "react";
import SudokuGrid from "./SudokuGrid";
import { validateSudoku, solveSudoku } from "./sudokuSolver";
import { levels } from "./levels";

function App() {
  const [grid, setGrid] = useState(levels.easy);
  const [initialGrid, setInitialGrid] = useState(levels.easy.map(row => [...row]));
  const [error, setError] = useState("");
  const [solvedGrid, setSolvedGrid] = useState(null);

  const handleInputChange = (row, col, value) => {
    const newGrid = grid.map((r, i) =>
      r.map((val, j) => (i === row && j === col ? value : val))
    );
    setGrid(newGrid);
  };

  const handleValidate = () => {
    if (validateSudoku(grid)) {
      setError("");
      alert("Sudoku setup is valid!");
    } else {
      setError("Invalid Sudoku setup.");
    }
  };

  const handleSolve = () => {
    const solution = solveSudoku(grid.map(row => row.map(cell => parseInt(cell) || 0)));
    if (solution) {
      setGrid(solution);
      setError("");
    } else {
      setError("Sudoku is unsolvable.");
    }
  };

  const handleHint = () => {
    if (!solvedGrid) {
      const solution = solveSudoku(grid.map(row => row.map(cell => parseInt(cell) || 0)));
      setSolvedGrid(solution);
    }
    if (solvedGrid) {
      const newGrid = [...grid.map(row => [...row])];
      for (let i = 0; i < 9; i++) {
        for (let j = 0; j < 9; j++) {
          if (!newGrid[i][j]) {
            newGrid[i][j] = solvedGrid[i][j];
            setGrid(newGrid);
            return;
          }
        }
      }
    } else {
      setError("Please validate the grid first.");
    }
  };

  const handleLevelChange = (level) => {
    setGrid(levels[level]);
    setInitialGrid(levels[level].map(row => [...row]));
    setSolvedGrid(null);
    setError("");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Sudoku Solver</h1>
      <div className="mb-4">
        <button onClick={() => handleLevelChange("easy")} className="bg-green-500 text-white px-4 py-2 m-1 rounded">Easy</button>
        <button onClick={() => handleLevelChange("medium")} className="bg-yellow-500 text-white px-4 py-2 m-1 rounded">Medium</button>
        <button onClick={() => handleLevelChange("hard")} className="bg-red-500 text-white px-4 py-2 m-1 rounded">Hard</button>
      </div>
      <SudokuGrid grid={grid} onChange={handleInputChange} initialGrid={initialGrid} />
      <div className="mt-4">
        <button onClick={handleValidate} className="bg-blue-500 text-white px-4 py-2 m-2 rounded">Validate</button>
        <button onClick={handleSolve} className="bg-green-500 text-white px-4 py-2 m-2 rounded">Solve</button>
        <button onClick={handleHint} className="bg-yellow-500 text-white px-4 py-2 m-2 rounded">Hint</button>
      </div>
      {error && <p className="text-red-500 mt-4">{error}</p>}
    </div>
  );
}

export default App;
