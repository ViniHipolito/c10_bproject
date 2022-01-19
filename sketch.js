var sky,plane;
var skyImg,planeImg;

function preload(){
  planeImg = loadAnimation("plane.png");
  
  skyImg = loadImage("sky.jpg");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  // Movendo o fundo
  sky=createSprite(400,200);
  sky.addImage(skyImg);
  sky.velocityX = -5;

  
  plane = createSprite(130,200,30,30);
  plane.addAnimation("movingPlane",planeImg);
  plane.scale =0.25;
  
}

function draw() {
  background(0);
  sky.velocityX = -3;

  if(sky.x < 0){
    sky.x = 0;  
    sky.x = sky.width/2;
  }

 
  drawSprites();
}