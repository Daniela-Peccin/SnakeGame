let game = {
    started: false
}

let snake = {
    head_row: Math.round(rows_max/2),
    head_col: Math.round(cols_max/2),
    lastMove: undefined,
    bodyPosition: []
}

function eat(){
    console.log(snake.bodyPosition)
    dropFruit()
}

function move(direction){
    
    if (game.started == false){
        startGame(start = direction)
        return
    }

    let last_head_pos = [snake.head_row, snake.head_col]
    snake.bodyPosition.push(last_head_pos)
    if (direction.keyCode == 37){snake.head_col += -1}
    if (direction.keyCode == 39){snake.head_col += +1}
    if (direction.keyCode == 38){snake.head_row += -1}
    if (direction.keyCode == 40){snake.head_row += +1}
    wallCheck()
    changeClass(snake.head_row, snake.head_col, "head_class")

    if (fruit.fruit_row === snake.head_row && fruit.fruit_col === snake.head_col)
        eat()
    else {
        changeClass(snake.bodyPosition[0][0], snake.bodyPosition[0][1] , "grid_class")
        snake.bodyPosition = snake.bodyPosition.slice(1)
    }

    for(let aux = 0; aux < snake.bodyPosition.length; aux++){
        changeClass(snake.bodyPosition[aux][0], snake.bodyPosition[aux][1] , "snake_class")
    }

    snake.lastMove = direction
}

function defaultBehavior(){
    if (snake.lastMove == undefined) {
        return
    }
    move(snake.lastMove)
}