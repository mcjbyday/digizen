/*
digizen
etch.js
Michael Jacobs
3/25/2022

currently missing functionality that automatically selects a mode (or remembers prior mode) upon selection of new density
 TO DO - make a 'standard always persistent etch theme, not a function of a button?
*/

const container = document.querySelector("#grid_container");
const modeInterface = document.querySelector("#mode_interface");
const resInterface = document.querySelector("#density_interface");
const buttonNorm = document.createElement("button");
const buttonDark = document.createElement("button");
const buttonClear = document.createElement("button");
const buttonLowDens = document.createElement("button");
const buttonNormDens = document.createElement("button");
const buttonHighDens = document.createElement("button");


function etchLowDensity() {
  buttonLowDens.textContent = "Low Density";
  buttonLowDens.addEventListener('click' , () => {
    makeGrid(8,8);
  });
  resInterface.appendChild(buttonLowDens).classList.add('btn');
}

function etchNormDensity() {
  
  buttonNormDens.textContent = "Normal Density";
  buttonNormDens.addEventListener('click' , () => {
    makeGrid(32,32);
  });
  resInterface.appendChild(buttonNormDens).classList.add('btn');
}

function etchHighDensity() {
  
  buttonHighDens.textContent = "High density";
  buttonHighDens.addEventListener('click' , () => {
    makeGrid(64,64);
  });
  resInterface.appendChild(buttonHighDens).classList.add('btn');
}

function makeGrid(rows, cols) {
  simpleReset();
  for (var cellCount = 1; cellCount <= (rows * cols); cellCount++) {
    let cell = document.createElement("div");
    cell.style.border = '0.5px solid #ebe198';
    // use template literals to take function arguments (rows, cols), 
    // convert values to inline string, in order to uniformly distribute size
    container.style.gridTemplateColumns = `repeat(${cols}, 1fr)`
    container.style.gridTemplateRows = `repeat(${rows}, 1fr)`
    cell.classList.add("grid_element");
    container.appendChild(cell);
    };
  etchDefault();
  etchingNormal();
  etchingDark();
}

function etchDefault() {
  const cellItems = document.querySelectorAll('#grid_container > div');
  const mainBackG = document.querySelector('.main_container');
  const containerBackG = document.querySelector('.interactive_container');

  mainBackG.style.backgroundColor = '#a3b5de',
  containerBackG.style.backgroundColor = '#4e81db',
  cellItems.forEach((item) => {
    item.count = 0;
    item.style.backgroundColor = '#7f9de0';
    item.addEventListener('mouseenter', (e) => {
      e.target.style.backgroundColor = '#2c58ce';
      e.target.style.opacity = 1;
      });
    })
}


function etchingNormal() {
  const cellItems = document.querySelectorAll('#grid_container > div');
  const mainBackG = document.querySelector('.main_container');
  const containerBackG = document.querySelector('.interactive_container');
  buttonNorm.textContent = "Daylight";
  buttonNorm.addEventListener('click' , () => {
    mainBackG.style.backgroundColor = '#FFFFFF',
    containerBackG.style.backgroundColor = '#939597',
    cellItems.forEach((item) => {
      item.count = 0;
      item.style.backgroundColor = '#b6b18f';
      item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#5c6470';
        e.target.style.opacity = 1;
        });
      })
  });
  modeInterface.appendChild(buttonNorm).classList.add('btn');
}

function etchingDark() {
  const cellItems = document.querySelectorAll('#grid_container > div');
  const mainBackG = document.querySelector('.main_container');
  const containerBackG = document.querySelector('.interactive_container');
  buttonDark.textContent = "Late Night";
  buttonDark.addEventListener('click' , () => {
    // startPage();
    mainBackG.style.backgroundColor = '#000000',
    containerBackG.style.backgroundColor = '#252525',
    cellItems.forEach((item) => {
      item.count = 0;
      item.style.backgroundColor = '#B9B9B9';
      item.addEventListener('mouseenter', (e) => {
        e.target.style.backgroundColor = '#252525';
        e.target.style.opacity = 1;
        });
      })
  });
  modeInterface.appendChild(buttonDark).classList.add('btn');
}

function simpleReset() {
  const cellItems = document.querySelectorAll('#grid_container > div');
  cellItems.forEach(item => item.remove());
} 


function startPage() {
  makeGrid(32,32);
  etchLowDensity(); 
  etchNormDensity();
  etchHighDensity();
}

startPage();

