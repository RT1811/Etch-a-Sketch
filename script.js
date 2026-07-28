function createGrid(size) {
    const container = document.querySelector("#container");
    container.innerHTML  = '';

    const squareSize = 960/szie;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

createGrid(16);