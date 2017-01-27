var scl = 20
var snake
var food


function setup() {
  createCanvas(800, 600)
  frameRate(10)
  snake = new Snake()

  food = createVector(random(width), random(height))
}

function pickLocation() {
  var cols = floor(width/scl)
  var rows = floor(width/scl)
  food = createVector(random(random(cols)), random(random(rows)))
  food.mult(scl)
}


function draw() {
  background(51)
  snake.update()
  snake.show()

  // snake.eat()

  fill(255, 204, 0)
  rect(food.x, food.y, scl, scl)
}


function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1)
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1)
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0)
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0)
  }
}
