
console.log("here");

// initialise constants

// initialise variables

// setup DOM selections
const etchASketch = document.querySelector('#etchasketch'),
  gridSizeInput = document.querySelector('#no-of-squares'),
  start = document.querySelector('#start'),
  reset = document.querySelector('#reset');

// draw container on load
  drawContainer();

start.onclick = (e) => {
  e.preventDefault();
  drawContainer();
  drawGrid();
  addSquareEvents();
};

reset.onclick = (e) => {
  // e.preventDefault();
};

function drawContainer() {
  // get width of the container and set the size of each square
  const containerWidth = etchASketch.offsetWidth;
  etchASketch.setAttribute('style', `height:${containerWidth}px;`)
}

function drawGrid() {
  // get the number of squares in the grid from the form
  var gridSize = gridSizeInput.value;

  // create divs
  for (var i=0; i<gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    etchASketch.appendChild(row);
    for(var j=0; j<gridSize; j++) {
      square = document.createElement('div');
      square.classList.add('square');
      row.appendChild(square);
    };
  };
};

function addSquareEvents() {
  const squares = document.querySelectorAll('.square');
  console.log(squares);

  squares.forEach((square) => {
    square.onmouseover = (e) => {
      e.target.style.background = 'pink';
    };
    square.onmouseout = (e) => {

    };
  });
};
