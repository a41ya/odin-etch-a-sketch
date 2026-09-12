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