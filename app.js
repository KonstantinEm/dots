const board = document.querySelector('#board');
const colors = ['#57385c', '#a75265', '#ec7263', '#febe7e', '#fdfdcb', '#f4aeba', '#ec729c', '#adf7d1', '#7dace4', '#8971d0', '#fecd51', '#dcb5ff',]
const SQUARES_NUMBER = 2584;

for (let i = 0; i < SQUARES_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');

    square.addEventListener('mouseover', () => 
        setColor(square)
    )

    square.addEventListener('mouseleave', () => 
        removeColor(square)
    )

    board.append(square)
};

function setColor(element) {
    const color = getRandomColor();
    element.style.backgroundColor = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
};

function removeColor(element) {
    element.style.backgroundColor = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
};

function getRandomColor() {
  const index = Math.floor(Math.random() * colors.length);
  return colors[index];
}