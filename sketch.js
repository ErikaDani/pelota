var ball;
function setup() {
  createCanvas(400,400);

  ball = createSprite(200,200,80,50);
}

function draw() 
{
  background(30);
if(keyDown("right")){
  ball.position.x = ball.position.x +3;
}

if(keyDown("left")){
  ball.position.x = ball.position.x -3;
}

if(keyDown("up")){
  ball.position.y = ball.position.y -3;
}

if(keyDown("down")){
  ball.position.y = ball.position.y +3;
}
  drawSprites();
}




