function createGrid(size) {
    const container = document.querySelector("#container");
    container.innerHTML  = '';

    const squareSize = 960/size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement('div');
        square.classList.add('grid-square');
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        container.appendChild(square);
    }
}

document.querySelector('#reset').addEventListener('click', () => {
  let size = prompt('Enter number of squares per side (max 100):');
  size = Math.min(Number(size), 100);
  createGrid(size);
});

document.querySelector('#container').addEventListener('mouseover', (e) => {
  if (e.target.classList.contains('grid-square')) {
    e.target.style.backgroundColor = 'black';
  }
});

createGrid(16);