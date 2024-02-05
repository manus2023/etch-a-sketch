// Create grid that is 960px wide
function createGrid(gridSquares) {
    let grid = document.createElement("div")
    grid.className = "grid";
    document.body.appendChild(grid)

    let rows = document.createElement("div")
    rows.className = "rows";
    grid.appendChild(rows)

    let row = document.createElement("div")
    row.className = "row";
    let squareSize = Math.floor(960 / gridSquares);
    for (let i=0; i<gridSquares; i++) {
        let row = document.createElement("div")
        row.className = "row";
        rows.appendChild(row);
        for (let j=0; j<gridSquares; j++) {
            let square = document.createElement("div")
            square.className = "square";
            square.id = i + "," + j;
            square.style.height =  `${squareSize}px`;
            square.style.width = `${squareSize}px`;
            row.appendChild(square);
        }
    }
}

// Remove previous grid when user wants to create new grid size
function clearPreviousGrid() {
    document.getElementsByClassName("grid")[0].remove();
}

// Create first grid on page load
let gridSquares = 16;
createGrid(gridSquares);
draw(gridSquares)

// Shade squares as user hovers of them
function draw(gridSquares) {
    for (let i = 0; i < gridSquares; i++) {
        for (let j = 0; j < gridSquares; j++) {
            document.getElementById(`${i},${j}`).onmouseover = function() {
                shade(i, j);
            };
        }
    }
}

function shade(i, j) {
    let randomColor = "#" + Math.floor(Math.random()*16777215).toString(16).padStart(6, '0').toUpperCase();
    document.getElementById(`${i},${j}`).style.backgroundColor = randomColor;
}

// Ask user for number of squares required in grid
function popup() {
    gridSquares = prompt("Enter the number of squares you would like in the grid:");
    while (gridSquares > 100 || gridSquares < 1) {
        gridSquares = prompt("Number must be between 1 and 100, please enter the number of squares you would like in the grid:");
    }
    clearPreviousGrid();
    createGrid(gridSquares);
    draw(gridSquares)
}

function clearGrid() {
    for (let i = 0; i < gridSquares; i++) {
        for (let j = 0; j < gridSquares; j++) {
            document.getElementById(`${i},${j}`).style.backgroundColor = "white";
        };
    }
}