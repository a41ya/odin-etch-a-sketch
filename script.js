const inputGrid = document.querySelector("#inputGrid");
const submitBtn = document.querySelector("#submitGrid");
//
//grid container
//
const divContainer = document.querySelector("#divContainer");
const divCell = document.createElement("div");
divCell.classList = "divCell";

let gridSize = 16;
let gridWidth = 512 / gridSize;

const blackColor = "black";
const pinkColor = "pink";
const rainbowColor = "";

function randomRGB() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

let currentColor = pinkColor;

//create grid loop
function newGrid(){
  for (let i = 0; i < (gridSize*gridSize); ++i){
  const cellClone = divCell.cloneNode(true);
  cellClone.style.width = `${gridWidth}px`;
  cellClone.classList = "divCell";
  divContainer.appendChild(cellClone);
  }
}

newGrid();

function removeGrid(){
  divContainer.replaceChildren();
}

//
//change color function
//

divContainer.addEventListener("mouseover", changeCellColor);

function changeCellColor (event){
  if (!event.target.classList.contains("divCell")){
    return;
  }
  if (currentColor === rainbowColor) {
    event.target.style.backgroundColor = randomRGB();
  } else {
    event.target.style.backgroundColor = `${currentColor}`;
  } 
}

//
//pop ups for grid size and color
//

//show pop-up
const gridBtn = document.querySelector("#gridBtn");
const colorBtn = document.querySelector("#colorBtn");

//dialog windows
const gridPopUp = document.querySelector("#gridPopUp");
const colorPopUp = document.querySelector("#colorPopUp");

//close btns
const closeBtnGrid = document.querySelector("#closeBtnGrid")
const closeBtnColor = document.querySelector("#closeBtnColor")

//color picker buttons
const blackColorBtn = document.querySelector("#blackColor");
const pinkColorBtn = document.querySelector("#pinkColor")
const rainbowBtn = document.querySelector("#rainbow");

gridBtn.addEventListener("click", showGridPopUp);
closeBtnGrid.addEventListener("click", () =>{
  gridPopUp.close();
})

colorBtn.addEventListener("click", showColorPopUp);
closeBtnColor.addEventListener("click", () =>{
  colorPopUp.close();
})

function showGridPopUp (){
  gridPopUp.showModal();
  inputGrid.style.border = '1px solid black'
}

function showColorPopUp (){
  colorPopUp.showModal();
}
//
//change sketch color
//
const colorButtons = document.querySelector("#colorButtons")
colorButtons.addEventListener('click', changeColor)


function changeColor(event){
  colorPopUp.close();
  
  if (event.target.id === "blackColor"){
    currentColor = blackColor;
  } else if (event.target.id === "pinkColor"){
    currentColor = pinkColor;
  } else if (event.target.id === "rainbow"){
    currentColor = rainbowColor;
  }
  
}

//
//change grid size
//


function changeGridSize (){
 if(inputGrid.value > 100 || inputGrid.value < 1){
  inputGrid.style.border = '1px solid red'
 } else {
  inputGrid.style.border = '1px solid black'
  gridPopUp.close();
  gridSize = inputGrid.value;
  console.log(gridSize);
  removeGrid();
  gridWidth = 512 / gridSize;
  newGrid();
}
  
}

submitBtn.addEventListener('click', changeGridSize);