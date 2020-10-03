function setup() {
  createCanvas(800,400);
  frect=createSprite(400, 200, 50, 10); 
  frect.shapeColor="green"
  mrect=createSprite(300, 200, 10, 50);
  mrect.shapeColor="green"
}

function draw() {
  background(255,255,255);  
  if (frect.x-mrect.x<frect.width/2+mrect.width/2 && mrect.x-frect.x<frect.width/2+mrect.width/2 && frect.y-mrect.y<frect.width/2+mrect.width/2 && mrect.y-frect.y<frect.width/2+mrect.width/2)
  {
mrect.shapeColor="red"
frect.shapeColor="red"
  } else 
  {
    mrect.shapeColor="green"
    frect.shapeColor="green"
  }
  mrect.y=World.mouseY
  mrect.x=World.mouseX
  drawSprites();
}