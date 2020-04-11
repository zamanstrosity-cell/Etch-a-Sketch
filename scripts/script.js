const container = document.querySelector(".sketch-container");
// const size = prompt("What's the size you'd like?");



function makeGrid(size) {
    for (let i = 0; i < (size**2); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        container.appendChild(cell);
    }
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;

}

makeGrid(16);

function randomColor() {
    return Math.floor(Math.random() * 256);
}

function resetGrid() {
    let newGrid = prompt("What size would you like the grid to be?");
    makeGrid(newGrid);
}

function colorGrid() {

}

function rainbowColors() {

}

