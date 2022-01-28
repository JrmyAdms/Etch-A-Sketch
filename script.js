const container = $("#gridSpace");
const rainbowSelect = $("#selectRainbow");
const colorSelect = $("#colorpicker");
const greySelect = $("#selectGrey");
const defaultColor = "#ff0000";
const defaultGame = "color";
const defaultGridSize = "16";
const gridSlider = $("#gridSize");
const gridChange = $("#gridChange");
const sliderValue = $("#sliderValue")
console.log(gridChange);

let gameMode = defaultGame;
let color = defaultColor;
let gridSize = defaultGridSize;

$(document).ready( function(){
    initializeBoard();
})

function initializeBoard(){
    //Display Grid
    makeRows(gridSize, gridSize);

    //Set Event Listeners on Game Buttons
    colorSelect[0].addEventListener("click", function(event) {
        setGame(event);
    });
    rainbowSelect[0].addEventListener("click", function(event) {
        setGame(event);
    });
    gridSlider[0].addEventListener("change", function(event) {
        gridChange[0].setAttribute("value", event.target.value);
        sliderValue[0].innerHTML = event.target.value;
    });
    gridChange[0].addEventListener("click", function(event) {
        clearGrid(event.target.value);
    });
}


//Create Grid
function makeRows(rows, cols) {
    container[0].style.setProperty('--grid-rows', rows);
    container[0].style.setProperty('--grid-cols', cols);
    for (c = 0; c < (rows * cols); c++) {
        let cell = document.createElement("div");
        cell.setAttribute("value", c);
        container[0].appendChild(cell).className = "grid-item";
        cell.addEventListener("mouseenter", function(event){
            changeColor(event.target);
        })
    };
};

function changeColor(element){
    console.log(element)
    if(gameMode === "color"){
        color = $("#colorpicker")[0].value;
        element.style.backgroundColor = color;
    } else if(gameMode === "rainbow"){
        randomColor = Math.floor(Math.random()*16777215).toString(16);
        color = "#" + randomColor;
        element.style.backgroundColor = color;
    }
}

function clearGrid(sliderValue){
    container.empty();
    makeRows(sliderValue, sliderValue);
}

function setGame(event){
    gameMode = event.target.className;
}
