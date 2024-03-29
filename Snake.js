let snake = {
    head_row: 6,
    head_col: 6,
    lastMove: undefined,
}

function eat(){
    if (fruit.fruit_row === snake.head_row && fruit.fruit_col === snake.head_col)
    dropFruit()
}

function move(direction){
    changeClass(snake.head_row, snake.head_col, "grid_class")
    if (direction.keyCode == 37){snake.head_col += -1}
    if (direction.keyCode == 39){snake.head_col += +1}
    if (direction.keyCode == 38){snake.head_row += -1}
    if (direction.keyCode == 40){snake.head_row += +1}
    wallCheck()
    eat()
    changeClass(snake.head_row, snake.head_col, "head_class")

}


