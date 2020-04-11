const container = document.querySelector(".sketch-container");
const reset = document.querySelector("#reset");
const cells = document.getElementsByClassName(".cell");
const rainbow = document.getElementById("rainbow");
const grey = document.getElementById("greyscale");
const erase = document.getElementById('erase');
const color = document.getElementById('color');
const black = document.getElementById('black');


function randomColor() {
    return Math.floor(Math.random() * 256);
}

function makeGrid(size) {
    for (let i = 0; i < (size**2); i++){
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.addEventListener('mouseenter', () => {
            cell.style.backgroundColor = `black`;
            cell.style.transition = "0.3s";
        });
        container.appendChild(cell);
    }
    container.style.cssText = `grid-template-columns: repeat(${size}, 1fr); grid-template-rows: repeat(${size}, 1fr);`;
}

function removeGrid() {
    let newDiv = [...document.querySelectorAll(".cell")];
    newDiv.forEach(element => {
        element.remove();
    });
}

function resetGrid() {
    let newGrid = prompt("What size would you like the grid to be?");
    removeGrid();
    makeGrid(newGrid);
}



function colorGrid() {
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            let greyScale = randomColor();
            element.style.backgroundColor = `rgb(${greyScale}, ${greyScale}, ${greyScale})`;
            element.style.transition = '0.3s';
        });
    });

}

function rainbowColors() {
    let newDiv = [...document.querySelectorAll(".cell")];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
            element.style.transition = "0.3s";
        });
    });

}

function singleColor() {
    let newDiv = [...document.querySelectorAll('.cell')];
    let color = `rgb(${randomColor()}, ${randomColor()}, ${randomColor()})`;
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = color;
            element.style.transition = '0.3s';
        });
    });
}

function backToBlack() {
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = "black";
            element.style.transition = '0.3s';
        })
    })
}

function eraseCells(){
    let newDiv = [...document.querySelectorAll('.cell')];
    newDiv.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.backgroundColor = 'white';
        });
    });
}


reset.addEventListener('click', () => {
    resetGrid();
});

rainbow.addEventListener('click', () => {
    rainbowColors();
});
grey.addEventListener('click', () => {
    colorGrid();
});
erase.addEventListener('click', () => {
    eraseCells();
});

color.addEventListener('click', () => {
    singleColor();
});

black.addEventListener('click', () => {
    backToBlack();
})
makeGrid(16);
