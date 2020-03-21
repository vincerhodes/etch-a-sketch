
console.log("here");

// initialise constants

// initialise variables
var squares = [];

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

  etchASketch.innerHTML = '';
  // create divs
  for (var i=0; i<gridSize; i++) {
    const row = document.createElement('div');
    row.classList.add('row');
    etchASketch.appendChild(row);
    for(var j=0; j<gridSize; j++) {
      square = document.createElement('div');
      square.classList.add('square');
      square.style.backgroundColor = "white";
      row.appendChild(square);
    };
  };
};

function setSquares() {
  squares = document.querySelectorAll('.square');
};

function addSquareEvents() {
  setSquares();
  squares.forEach((square) => {
    square.onmouseover = (e) => handleMouseOver(e);
    square.addEventListener("touchstart", handleMouseOver(square), false);
    // square.ontouchmove = (e) => handleMouseOver(e);
    square.onclick = (e) => clear(e.target);
  });
};

function handleMouseOver(e) {
  switch(e.buttons) {
    case 0:
      darken(e);
      break;
    case 1:
      clear(e);
      break;
  };
}

function darken(e) {
  e.target.style.backgroundColor = tinycolor(e.target.style.backgroundColor).darken().toString();
}

function clear(e) {
  e.target.style.backgroundColor = 'white';
}
