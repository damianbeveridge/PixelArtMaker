//Determines variables to be used
let color = document.getElementById('colorPicker');
const size = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');
const height = document.getElementById('inputHeight');
const width = document.getElementById('inputWidth').value;
// Adds and event listener to the submit button
size.addEventListener('submit', function (event) {
    event.preventDefault();
    table.innerHTML = null;
    let height = inputHeight.value;
    let width = inputWidth.value;
    makeGrid(height, width);
});
//Makes a Grid, height = number of rows, width = number of colums
function makeGrid(height, width) {
    for (var i = 1; i <= height; i++) {
        let tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        for (let k = 1; k <= width; k++) {
            let tableCell = document.createElement('td');
            tableRow.appendChild(tableCell);
            //changes the color of the cell to what ever color was chosen
            tableCell.addEventListener('click', function (event) {
                event.target.style.backgroundColor = color.value;
            })
        }
    }
};
