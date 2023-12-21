const container = document.querySelector('.container');
container.style.gridTemplateColumns = "repeat(16 , 1fr)";
container.style.gridTemplateRows = "repeat(16 , 1fr)";

for (let i = 0; i< 256; i++){
    const grid = document.createElement('div');
    grid.classList.add('grid');
    container.insertAdjacentElement("beforeend", grid);
}