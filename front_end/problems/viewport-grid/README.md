# Viewport Grid

## Task

Using the provided project template (based off create-react-app), create single page application that contains a uniform Grid of Viewports, with a fixed Sidebar. The Sidebar shall contain the inputs "Rows" and "Columns" both of which must be in the range of 1-10, and a button to collapse and expand the Sidebar. The Grid must show the defined number of "Rows" and "Columns", with a Viewport at each position. The Grid must fill remaining space and fit all Viewports equally, with a small gutter between them, and efficiently adapt to browser resizes and Sidebar collapsing/expanding. Each Viewport must have a thin border. Viewports must also be aware of their size at all times and be printed at its center.
The example colours are just for reference and styling should be adjusted for a clean modern UX.

### Example

![](example.gif)

### Constraints

- Solution should be production quaility, documented, and reusable.
- Solution should contain appropriate unit testing.
- Solution should not require additional NPM packages.
- Solution should work against the latest version of Chrome, Firefox and Edge

## Requirements

- nodejs >=14.19.1

## Running Development Mode

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.\
The page will reload if you make edits.


### Documentation:

1. Navbar component:
- Created an interface name props that will define the type of props that will be used in the component.
- Created a button with icon which on click will toggle between two classnames ‘NavButtonActive’ or ‘NavButton’.
- created  two input fields as row and column that will take type number with min and max value. 

2. Grid component:
- This component is used to map the grid.
- It takes height and width of the grid from setGridSize function in App.tsx and is shown inside each grid box.

3. App.tsx:
- with useState() react hook, I have set rows, columns, gridHeight and gridWidth.
- The onChange function will be consume and set the row and column values through the Navbar input fields. - The setGridSize function sets the height and width of grid box using offsetHeight and offsetWidth.
- useEffect() hook is used that will call setGridSize function each time the window is resized or the number of row and columns is changed as well as with the showNav toggle. 
- new Array().fill().map is used that will take the number of row and column to populate the data and show in the window.

4. App.scss:
- All the CSS is included in side the App.scss file. I have used flex box and its properties to help in resizing windows.

5. Unit testing: 
- I have not done the unit testing as I am still learning the testing process. 
