//grid container
const divContainer = document.querySelector("#divContainer");

//create grid loop
for (let i = 0; i < (16*16); ++i){
  const divCell = document.createElement("div");
  divCell.classList = "divCell";
  divCell.textContent = " ";
  
  //divCell.style.border = "0.1px solid black";
  divContainer.appendChild(divCell);
}