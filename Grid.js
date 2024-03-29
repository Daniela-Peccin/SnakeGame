

// changeClass: changes the class in order to match the style required
function changeClass(row, col, newClass){
    let elementId = row + "," + col
    let element = document.getElementById(elementId)
    element.className = newClass
}

function cleanGrid(){ 
    let grid = ''
    for (let row = 0; row < rows_max; row++) {
        let ln = ''
        for (let col = 0; col < cols_max; col++) {
            let cell_id = row + ',' + col
            ln += '<td id=' + cell_id + '>' + cell_id + '</td>';
        }
        grid += '<tr>' + ln + '</tr>';
    let gridHTML = document.getElementById("grid_id")
    gridHTML.innerHTML = grid
    }
}

function wallCheck(){
    if (wall==true){
        if (snake.head_row >= rows_max || 
            snake.head_col >= cols_max ||
            snake.head_row < 0 ||
            snake.head_col < 0){
            alert("PERDEU!")
            location.reload()   
        }
    }
    if (wall==false){
        if (snake.head_row >= rows_max){
            snake.head_row = 0
        }
        if (snake.head_col >= cols_max){  
            snake.head_col = 0
        }
        if (snake.head_row < 0){
            snake.head_row = rows_max-1
        }
        if (snake.head_col < 0){
            snake.head_col = cols_max-1
        }
    }
}

function gameOver(){
    alert("Perdeu, mané!")
}