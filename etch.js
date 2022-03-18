/*
digizen
etch.js
Michael Jacobs
3/16/2022
*/


var container = document.getElementById("grid_container");
//var container = document.querySelector("#grid_container");

function makeGrid(rows, cols) {
  container.style.setProperty('--grid-columns', cols);
  container.style.setProperty('--grid-rows', rows);

  // creates individual cells, iterating over a number of rows and columns
  // css handles positioning 
  for (var cellCount = 1; cellCount <= (rows * cols); cellCount++) {
    let cell = document.createElement("div");
    cell.innerText = 0;
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
      e.target.style.backgroundColor = '#5c6470';
      e.target.style.opacity = 1;
      e.target.backgroundColor = white;
      });
  });
}


function startPage() {
  makeGrid(16, 16);
  startEtching()
  //changeSize();
  //changeMode();
  //eraseListener();
}

startPage();
  
