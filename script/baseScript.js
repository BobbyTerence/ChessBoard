// Globally used variables
    // Will keep track of number of rows created for the createRow function
var divRow = 0;

// Create variable to hold the board element
let board = document.getElementById("board");

var boardTile = document.createElement("button");

boardTile.className = "square";

createRow(board);

function appendTile(parent) {
    // Check for valid parent element
    console.log(parent.nodeType);
    if(parent.nodeType == 1) {
        const tile = document.createElement("button");
        tile.className = "square";
        parent.appendChild(tile);
    }
}

function appendDiv(parent) {
    // Check for valid parent element
    if(parent.nodeType == 1) {
        const newRow = document.createElement("div");
        let id = "row" + divRow;
        newRow.id = id;
        newRow.className = "row";
        parent.appendChild(newRow);

        console.log(id);

        // Return the value of the id to use with other function
        return id;
    }
}



/**
 * Create a function to create each row for the board
 */
function createRow(parentEle, columns = 3) {
    // This will create a new div, and assign the id to  newRow
    newRow = appendDiv(parentEle);

    console.log(newRow);

    for(tile = 0; tile < columns; tile++) {
        // newRow is then passed to appendTile, so that it can find the right id in order to create the row
        appendTile(newRow);
    }

    // increment divRow
    divRow++;
}