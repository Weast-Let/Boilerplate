var mRect
var sRect




function setup() {
  createCanvas(800,400);
  mRect = createSprite(400, 200, 50, 50);
  sRect = createSprite(400, 200, 100, 50);

  mRect.shapeColor = "Green";
sRect.shapeColor = "Green"; 
}

function draw() {
  background(0,0,0);  

  mRect.x = World.mouseX
  mRect.y = World.mouseY

  if(mRect.width/2 + sRect.width/2 > sRect.x - mRect.x && 
    mRect.width/2 + sRect.width/2 > mRect.x - sRect.x &&
    mRect.height/2 + sRect.height/2 > sRect.y - mRect.y && 
    mRect.height/2 + sRect.height/2 > mRect.y - sRect.y){

    sRect.shapeColor = "red";
    mRect.shapeColor = "red";
  }
    else{
      mRect.shapeColor = "Green";
      sRect.shapeColor = "Green"; 
    }

  drawSprites();
}