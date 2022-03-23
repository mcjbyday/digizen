/*
digizen
etch.js
Michael Jacobs
3/23/2022
*/

const container = document.querySelector("#grid_container");
const interface = document.querySelector("#interface");
const buttonNorm = document.createElement("button");
const buttonDark = document.createElement("button");
const buttonClear = document.createElement("button");
var lastMode = '';

function makeGrid(rows, cols) {
  for (var cellCount = 1; cellCount <= (rows * cols); cellCount++) {
    let cell = document.createElement("div");
    cell.style.border = '1px solid #ebe198';
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    cell.classList.add("grid_element");
    container.appendChild(cell);
    // alternative one line syntax
    // container.appendChild(cell).className = "grid_element"; 
    };  
}

function etchingNormal() {
  const cellItems = document.querySelectorAll('#grid_container > div');
  const mainBackG = document.querySelector('.main_container');
  const containerBackG = document.querySelector('.interactive_container');
  buttonNorm.textContent = "Normal Mode";
  buttonNorm.addEventListener('click' , () => {
    mainBackG.style.backgroundColor = '#FFFFFF';
    containerBackG.style.backgroundColor = '#939597';
    cellItems.forEach((item) => {
      item.style.backgroundColor = '#b6b18f';
      item.count = 0;
      item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#5c6470';
        e.target.style.opacity = 1;
        });
      })
  });
  lastMode = '#b6b18f';
  interface.appendChild(buttonNorm).classList.add('btn');
}

function etchingDark() {
  const cellItems = document.querySelectorAll('#grid_container > div');
  const mainBackG = document.querySelector('.main_container');
  const containerBackG = document.querySelector('.interactive_container');
  buttonDark.textContent = "Dark Mode";
  buttonDark.addEventListener('click' , () => {
    mainBackG.style.backgroundColor = '#000000';
    containerBackG.style.backgroundColor = '#252525';
    cellItems.forEach((item) => {
      item.count = 0;
      item.style.backgroundColor = '#B9B9B9';
      item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#252525';
        e.target.style.opacity = 1;
        });
      })
  });
  lastMode = '#B9B9B9';
  interface.appendChild(buttonDark).classList.add('btn');
}

// resetEtched and etchClear are removed until I can sort out saving the prior mode setting
// function resetEtched() {
//   const cellItems = document.querySelectorAll('#grid_container > div');
//   cellItems.forEach((item) => {
//     item.style.backgroundColor = lastMode;
//   });
// }

// function etchClear() {
//   buttonClear.textContent = "Clear Etching";
//   buttonClear.addEventListener('click' , () => {
//     resetEtched();
//   });
//   interface.appendChild(buttonClear).classList.add('btn');
// }

function startPage() {
  makeGrid(16, 16);
  etchingNormal();
  etchingDark();
  // etchClear is removed until I can sort out saving the prior mode setting
  // etchClear();
  //changeSize();
  //changeMode();
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