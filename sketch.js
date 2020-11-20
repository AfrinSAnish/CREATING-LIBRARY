var movingRect,fixedRect;

var gameObject1,gameObject2,gameObject3,gameObject4;

function setup() {
  createCanvas(800,800);
  movingRect=createSprite(400, 200, 50, 50);
  fixedRect=createSprite(300,200,50,40);

  gameObject1=createSprite(100,100,50,100);
  gameObject2=createSprite(200,100,50,100);
  gameObject3=createSprite(300,100,50,100);
  gameObject4=createSprite(400,100,50,100);

  movingRect.shapeColor="green";
  fixedRect.shapeColor="green";
}

function draw() {
  background(255,255,255); 
  
  movingRect.x=mouseX;
  movingRect.y=mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor="red";
    gameObject1.shapeColor="red";
  }
  else{
    movingRect.shapeColor="green";
    gameObject1.shapeColor="green";
  }
  if(isTouching(movingRect,gameObject2)){
    movingRect.shapeColor="blue";
    gameObject2.shapeColor="blue";
  }else{
    movingRect.shapeColor="yellow";
    gameObject2.shapeColor="yellow";
  }
  
  console.log(fixedRect.x-movingRect.x);
  drawSprites();
}
