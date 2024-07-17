// Create a variable to keep track of turn order
var turnOrder = 0; // To keep it simple, 0 is X, anything else is O
var board = Array[9].fill(null); // This array will keep track of the board state

function clickTile(tileId) {
    // This will allow us to change the properties of the clicked tile
    const tile = document.getElementById(tileId);

    if(tile.textContent == "") {
        tile.textContent = placeToken(tileId);
    } else {
        console.log("Tile already picked");
    }

    checkGame();
}

function placeToken(tileId) {
    let token;
    if(turnOrder == 0) {
        token = 'X';
        turnOrder = 1;
    } else {
        token = 'O';
        turnOrder = 0;
    }
    board[tileId] = token;
    checkWin();
    return token;
}

function checkGame() {
    // Create an array to hold a combination of winning board states
    const winningCombinations = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
        [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
        [0, 4, 8], [2, 4, 6]             // Diagonals
    ];
}