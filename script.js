//grid container
const divContainer = document.querySelector("#divContainer");
const divCell = document.createElement("div");
divCell.classList = "divCell";

//create grid loop
for (let i = 0; i < (16*16); ++i){
  const cellClone = divCell.cloneNode(true);
  divContainer.appendChild(cellClone);
  cellClone.classList = "divCell";
}

//change color function
divContainer.addEventListener("mouseover", changeCellColor);

function changeCellColor (event){
  console.log(event.target)
  if (event.target.classList.contains("divCell")){
    event.target.style.backgroundColor = "pink";
  }
}

//pop ups for grid size and color
const gridBtn = document.querySelector("#gridBtn");
const colorBtn = document.querySelector("#colorBtn");

const gridPopUp = document.querySelector("#gridPopUp");
const colorPopUp = document.querySelector("#colorPopUp");
const closeBtnGrid = document.querySelector("#closeBtnGrid")
const closeBtnColor = document.querySelector("#closeBtnColor")

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
  
}

function showColorPopUp (){
  colorPopUp.showModal();
  
}
