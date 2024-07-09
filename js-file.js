const DEFAULT_COLOR = "black";
const DEFAULT_SIZE = 16;

let currentColor = DEFAULT_COLOR;
let currentSize = DEFAULT_SIZE;

const grid = document.querySelector("#grid-container");
//const input;

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

//make event listener for all boxes when hovering
grid.addEventListener("mouseover", (e)=>{
    if(e.target.classList.contains("box")){
        e.target.style.backgroundColor = currentColor;
    }
});
