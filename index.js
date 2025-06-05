const sketchBoard = document.querySelector(".sketch-board");
const startButton = document.getElementById("start-btn");
const clearButton = document.getElementById("clear-btn");
let col;
let row;
let size;
let drawingCell;


startButton.addEventListener("click", () => {
    clearSketchBoard()
    size = prompt("Enter the size you want", "16 for 16x16");
    makeGrids(size);
});

clearButton.addEventListener("click", () => {
    clearBoard()
});

function makeGrids(size){
    for(let i = 0; i < size; i++){
        col= document.createElement("div");
        col.classList.add("column");
        for(let j = 1; j <= size; j++){
            row=document.createElement("div");
            row.classList.add("row");
            col.appendChild(row);
        }
        sketchBoard.appendChild(col);
    }
    drawing();
}

function drawing(){
    drawingCell = document.querySelectorAll(".row");
    
    drawingCell.forEach((cell) =>{
        cell.addEventListener("mousemove", () => {
            cell.style.backgroundColor="#4B0082";
        })
    });
}

function clearBoard(){
    drawingCell = document.querySelectorAll(".row");
    drawingCell.forEach((cell) => {
        cell.style.backgroundColor="white";
    });
}

function clearSketchBoard(){
    sketchBoard.innerText = "";
}
