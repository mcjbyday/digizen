/*
digizen
etch.js
Michael Jacobs
3/16/2022
*/


var container = document.getElementById("grid_container");
var constraint = document.getElementById("grid_frame").clientWidth;
console.log(constraint);

function makeGrid(width) {
  var blockdim = Math.round((constraint)/(width));
  // container.style.setProperty('--grid-columns', cols);
  // container.style.setProperty('--grid(width',(width);

  // creates individual cells, iterating over a number of (width and columns
  // css handles positioning 
  for (var cellCount = 1; cellCount <= (width * width); cellCount++) {
    let cell = document.createElement("div");
    // cell.innerText = cellCount;
    cell.style.width = `${blockdim}px`;
    // cell.style.setProperty('clientWidth', `${blockdim}px`);
    cell.style.height =`${blockdim}px`;
    // container.appendChild(cell).className = "grid_element"; 
    cell.classList.add("grid_element");
    container.appendChild(cell);
    };  
}

function startEtching() {
  const cellItems = document.querySelectorAll('#grid_container > div');
 cellItems.forEach((item) => {
    item.count = 0;
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#6e6e6e';
      e.target.style.opacity = 1;
      // e.target.backgroundColor = white;
      });
  });
}


function startPage() {
  makeGrid(16);
  startEtching();
  //changeSize();
  //changeMode();
  //eraseListener();
}

startPage();
  
