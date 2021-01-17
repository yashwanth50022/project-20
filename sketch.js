var fixedRect,movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect= createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "blue"
  fixedRect.debug = true;
  movingRect= createSprite(400, 200, 80, 30);
  movingRect.shapeColor = "blue"
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = 5;

}


function draw() {
  background("purple");  
  
if(fixedRect.x-movingRect.x<65 && movingRect.x-fixedRect.x<65){
  movingRect.velocityX = movingRect.velocityX*(-1)
fixedRect.velocityX = fixedRect.velocityX*(-1)
} 
if(movingRect.y-fixedRect.y<55 && fixedRect.y-movingRect.y<55){
  movingRect.velocityY = movingRect.velocityY*(-1)
  fixedRect.velocityY = fixedRect.velocityY*(-1)
}
 
  drawSprites();
}
