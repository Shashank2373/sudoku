import React from "react";

function SudokuGrid({ grid, onChange, initialGrid }) {
  return (
    <div className="grid grid-cols-9 gap-1 p-2 border border-gray-400 rounded-lg bg-white shadow-lg">
      {grid.map((row, i) =>
        row.map((value, j) => (
          <input
            key={`${i}-${j}`}
            type="number"
            min="1"
            max="9"
            value={value || ""}
            onChange={(e) => onChange(i, j, e.target.value ? parseInt(e.target.value) : "")}
            className={`w-10 h-10 text-center text-lg font-semibold border ${
              initialGrid[i][j] ? "bg-gray-200 cursor-not-allowed" : "bg-white hover:bg-blue-50 focus:bg-blue-100"
            } ${((i % 3 === 2) && j !== 8 ? "border-r-2" : "")} ${(j % 3 === 2 && i !== 8 ? "border-b-2" : "")}`}
            disabled={initialGrid[i][j]}
          />
        ))
      )}
    </div>
  );
}

export default SudokuGrid;
