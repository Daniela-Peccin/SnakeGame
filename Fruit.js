let fruit = {
    fruit_row: 1,
    fruit_col: 4,
}

function dropFruit(){
    fruit.fruit_row = Math.floor(Math.random() * rows_max);
    fruit.fruit_col = Math.floor(Math.random() * cols_max);
    ripe = Math.random()
    if (ripe > 0.5){
        changeClass(fruit.fruit_row, fruit.fruit_col, "goodFruit_class")
    }
    else {
        changeClass(fruit.fruit_row, fruit.fruit_col, "badFruit_class")
    }
}