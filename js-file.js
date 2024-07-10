const DEFAULT_COLOR = "black";
const DEFAULT_SIZE = 16;
const DEFAULT_MODE = "color";

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;
let currentMode = DEFAULT_MODE;

//set up querySelectors
const grid = document.querySelector("#grid-container");
const colorBtn = document.getElementById("color");
const rainbowBtn = document.getElementById("rainbow");
const toggleGridBtn = document.getElementById("toggle-grid");
const eraserBtn = document.getElementById("eraser");
const clearBtn = document.getElementById("clear");


//make the grid with white backgrounds
function makeGrid(numSquares){
    for(let i = 0; i < numSquares; i++){
        for(let j = 0; j<numSquares; j++){
            //add each box to the grid
            const box = document.createElement("div");
            box.style.width = `calc(100% / ${numSquares})`;
            box.style.height = `calc(100% / ${numSquares})`;
            box.setAttribute("class","box");
            grid.appendChild(box);
        }
    }
}

//call make grid function
makeGrid(currentSize);

//call the event listener for the eraser mode
eraserBtn.addEventListener("click", ()=>{
    if (currentMode === "eraser"){
        currentMode = "color";
        eraserBtn.textContent="Eraser Mode: OFF";
    }
    else{
        currentMode = "eraser";
        eraserBtn.textContent="Eraser Mode: ON";
    }
})

//call the event listener for toggleGrid
toggleGridBtn.addEventListener("click",()=>{
    if(toggleGridBtn.textContent === "Toggle Grid: ON"){
        //if its on, we turn it off
        const squares = grid.querySelectorAll("div.box");
        squares.forEach((s)=>{
            s.style.border = "0";
        });
        toggleGridBtn.textContent = "Toggle Grid: OFF";
    }
    else{
        //otherwise, it is off and needs to be back on
        const squares = grid.querySelectorAll("div.box");
        squares.forEach((s)=>{
            s.style.border="1px solid black";
        });
        toggleGridBtn.textContent = "Toggle Grid: ON";
    }
})

//make event listener for all boxes when hovering
grid.addEventListener("mouseover", (e)=>{
    if(e.target.classList.contains("box")){

        //if on color mode, turn it to current chosen color
        if(currentMode === "color"){
            e.target.style.backgroundColor = currentColor;
        }
        else if(currentMode === "eraser"){
            //if on eraser, make it white
            e.target.style.backgroundColor = "white";
        }
    }
});
