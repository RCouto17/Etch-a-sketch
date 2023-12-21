let color = 'black';


function populateGrid(size){
    const board = document.querySelector('.board');
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
    board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

    let amount = size*size;

    for (let i = 0; i< amount; i++){
        const grid = document.createElement('div');
        grid.addEventListener('mouseover', colorSquare)
        grid.classList.add('grid');
        board.insertAdjacentElement("beforeend", grid);
    }
}


function changeSize(input){
    if (input >= 2 || input <=100) {
        populateGrid(input);
    }
    else {
        console.log('Too many squares');
    }
}

function colorSquare() {
    if ((color === 'random')){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else {
        this.style.backgroundColor = color;
    }
}

function changeColor(choice) {
    color = choice
}

function reset() {
    const board = document.querySelector('.board');
    const squares = board.querySelectorAll('div');
    squares.forEach((div) => div.style.backgroundColor = 'white');
}