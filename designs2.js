let color = document.getElementById('colorPicker');
const size = document.getElementById('sizePicker');
let table = document.getElementById('pixelCanvas');
let height = document.getElementById('inputHeight').value;
let width = document.getElementById('inputWidth').value;

size.addEventListener('submit', function (event) {
    event.preventDefault();
    table.innerHTML = null;
    var height = document.getElementById('inputHeight').value;
    var width = document.getElementById('inputWidth').value;
    makeGrid(height, width);
});

function makeGrid(height, width) {
    for (var i = 1; i <= height; i++) {
        let tableRow = document.createElement('tr');
        table.appendChild(tableRow);
        for (let k = 1; k <= width; k++) {
            let tableCell = document.createElement('td');
            tableRow.appendChild(tableCell);
            tableCell.addEventListener('click', function (event) {
                event.target.style.backgroundColor = color.value;
            })
        }
    }
};
