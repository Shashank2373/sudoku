# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

# Features

->9x9 Grid Input: Users can input numbers (1-9) or leave cells blank for unsolved cells.
->Difficulty Levels: Choose from Easy, Medium, or Hard pre-defined puzzles.
->Validation: Ensures the current grid entries meet Sudoku rules.
->Solver: Solves the puzzle using a backtracking algorithm.
->Hints: Fills one correct empty cell to help users solve the puzzle.
->Responsive UI: Styled with Tailwind CSS for a modern and mobile-friendly design.

# Approach
### Validation Logic
The validation logic checks if the current state of the Sudoku grid follows these rules:

Row Uniqueness: Each number from 1 to 9 should appear only once in each row.
Column Uniqueness: Each number from 1 to 9 should appear only once in each column.
3x3 Subgrid Uniqueness: Each number from 1 to 9 should appear only once in each 3x3 subgrid.

# To implement this:

1. We iterate over each row, column, and 3x3 subgrid to ensure no duplicates are present.
2. If any row, column, or subgrid has duplicates, the grid is marked as invalid.

# Solving Algorithm
The Sudoku solver uses a backtracking algorithm:

1. Identify Empty Cells: First, locate an empty cell (a cell with no value).
2. Attempt to Place a Value: For each empty cell, attempt to place a value (1-9).
### Check if the placement is valid based on the validation logic above.
3. Recursive Backtracking:
### If a placement is valid, recursively move to the next empty cell.
### If an invalid placement is encountered, backtrack by removing the last placed value and trying the next number.
4. Completion: The algorithm continues until all cells are filled or determines that no solution exists.
Backtracking is a trial-and-error method that explores all possibilities, making it efficient for solving Sudoku puzzles within reasonable time limits.

## Technologies Used
React: JavaScript library for building user interfaces.
Tailwind CSS: Utility-first CSS framework for styling.
gh-pages: Tool to deploy the app on GitHub Pages.

## Additional Notes
Backtracking Efficiency: The backtracking algorithm used here is effective for typical Sudoku puzzles but may take longer for complex or unusual grids.
React Optimization: The app uses React’s state and lifecycle methods for smooth UI interaction and reactivity.
Error Handling: If the grid is invalid or unsolvable, an appropriate error message is displayed.

## Future Enhancements
 Multiple Hints: Allow users to get more than one hint.
 Timer: Add a timer to track how long it takes to solve the puzzle.
 Theme Options: Add a dark mode for improved accessibility.

## License
This project is licensed under the MIT License.
