let gridSize = 10;
const canvasSize = 700;
window.onload = document.getElementById('frame').style.width = `${canvasSize}px`;
window.onload = document.getElementById('frame').style.height = `${canvasSize}px`;
window.onload = document.getElementById('userInput').placeholder = gridSize;
createGrid();

function createGrid() {
    for (let i = 0; i < (gridSize * gridSize); i++) {
        const box = document.createElement('div');
        box.id = 'frameElement';
        document.getElementById('frame').append(box);
        box.style.width = `${Math.floor(canvasSize / gridSize)}px`;
        box.style.height = `${Math.floor(canvasSize / gridSize)}px`;
    };
    const element = document.querySelectorAll('#frameElement')
    element.forEach((element) => {
        element.addEventListener('mouseover', () => {
            const r = Math.floor(Math.random() * 256);
            const g = Math.floor(Math.random() * 256);
            const b = Math.floor(Math.random() * 256);
            const a = Math.random().toFixed(2);
            let randomColor = `rgba(${r}, ${g}, ${b}, ${a})`;
            console.log(randomColor);
            element.style.backgroundColor = randomColor;
        });
    });
};

function updateVariable() {
    const inputElement = document.getElementById('userInput');
    gridSize = inputElement.value;
    if (gridSize > 100) {
        gridSize = 100;
    }
    updateGrid();
}

function resetGrid() {
    const element = document.querySelectorAll('#frameElement')
    element.forEach((element) => {
        element.style.backgroundColor = '';
    })
};

function updateGrid() {
    document.querySelectorAll('#frameElement').forEach(element => {
        element.remove();
    });
    createGrid();
}