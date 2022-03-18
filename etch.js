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
    cell.innerText = cellCount;
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
  


//  not appropriate .. constructor approach some eloquent javascript -- seeking to each element an object
//  function Grid(width, height) {
//     this.space = new Array(width * height);
//     this.width = width;
//     this.height = height;
//   }
//   Grid.prototype.isInside = function(vector) {
//     return vector.x >= 0 && vector.x < this.width &&
//            vector.y >= 0 && vector.y < this.height;
//   };
//   Grid.prototype.get = function(vector) {
//     return this.space[vector.x + this.width * vector.y];
//   };
//   Grid.prototype.set = function(vector, value) {
//     this.space[vector.x + this.width * vector.y] = value;
//   };
  
// not appropriate .. nested for loop isn't appropriate 
// given the fact that the display: grid property already sets columns and rows out of box
//
// function makeGrid(rows, cols) {
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', cols);
    
//     for (r = 0; r < rows; r++) {
//         for (c = 0; c < cols; c++) {
//             let cell = document.createElement("div");
//             cell.innerText = (s + 1);
//             container.appendChild(cell).className = "grid_element";
//         }
//     };
//         let cell = document.createElement("div");
//       cell.innerText = (s + 1);
//       container.appendChild(cell).className = "grid_element";
// };


//   makeGrid(4, 4);