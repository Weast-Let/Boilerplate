var fixedRect, movingRect;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;

  gObj1 = createSprite(300,100,50,50);
  gObj1.shapeColor  = "green";

  gObj2 = createSprite(200,100,50,50);
  gObj2.shapeColor  = "green";

  gObj1.velocityX = +5;
  gObj2.velocityX = +5;

}

function draw() {
  background(0,0,0);  

  bounceOff(gObj1,gObj2);

  movingRect.x = World.mouseX
  movingRect.y = World.mouseY

  if(isTouching(movingRect,gObj1)){
    gObj1.shapeColor = "red";
    movingRect.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "Green";
    gObj1.shapeColor = "Green"; 
  }



  drawSprites();
}

