var path,boy,cash,diamonds,chocolate,burger
var pathImg,boyImg,candyImg,chocolateImg,lolImg,burgerImg;
var treasureCollection = 0;
var candyG,chocolateG,lolG,burgerGroup;
var gameOverImg

//Game States
var PLAY=1;
var END=0;
var gameState=1;

function preload(){
  pathImg = loadImage("Road.png");
  boyImg = loadAnimation("boy3.png");
  candyImg = loadImage("candy.png");
  chocolateImg = loadImage("chocolate.png");
  lolImg = loadImage("lol.png");
  burgerImg = loadImage("burger.png");
  gameOverImg = loadImage("gameOver.png")
  
}

function setup(){
  
  createCanvas(400,600);
// Moving background
path=createSprite(200,200);
path.addImage(pathImg);
path.velocityY = 4;


//creating boy running
boy = createSprite(70,580,20,20);
boy.addAnimation("SahilRunning",boyImg);
boy.scale=0.7;

gameOver = createSprite(250,100);
  gameOver.addImage(gameOverImg);
  gameOver.scale=0.7
  
  
candyG=new Group();
chocolateG=new Group();
lolG=new Group();
burgerGroup=new Group();

}

function draw() {

  if(gameState===PLAY){
  background(0);
  boy.x = World.mouseX;
  
  gameOver.visible = false;

  edges= createEdgeSprites();
  boy.collide(edges);
  
  //code to reset the background
  if(path.y > 400 ){
    path.y = height/2;
  }
  
    createCandy();
    createchocolate();
    createlol();
    createburger();

    if (candyG.isTouching(boy)) {
      candyG.destroyEach();
      treasureCollection=treasureCollection+50;
    }
    else if (chocolateG.isTouching(boy)) {
      chocolateG.destroyEach();
      treasureCollection=treasureCollection+100;
      
    }else if(lolG.isTouching(boy)) {
      lolG.destroyEach();

      // treasureCollection=+ 150;
      // treasureCollection= 150;
      // treasureCollection= treasureCollection - 150;
      treasureCollection= treasureCollection + 150;
      
    }else{
      if(burgerGroup.isTouching(boy)) {
        gameState=END;
        
       
        // cashG.destroyEach;
        // diamondsG.destroyEach;
        // jewelryG.destroyEach;
        // swordGroup.destroyEach;

        // cashG.destroy();
        // diamondsG.destroy();
        // jewelryG.destroy();
        // swordGroup.destroy();
        
         candyG.destroyEach();
         chocolateG.destroyEach();
        lolG.destroyEach();
         burgerGroup.destroyEach();
        
        // cashGdestroyEach();
        // diamondsGdestroyEach();
        // jewelryGdestroyEach();
        // swordGroupdestroyEach();
        
        candyG.setVelocityYEach(0);
        chocolateG.setVelocityYEach(0);
        lolG.setVelocityYEach(0);
        burgerGroup.setVelocityYEach(0);
        
      gameOver.visible = true;
     
    }
  }
  
  drawSprites();
  textSize(20);
  fill(255);
  text("Treasure: "+ treasureCollection,10,30);
  }

}

function createCandy() {
  if (World.frameCount % 200 == 0) {
  var candy = createSprite(Math.round(random(50, 350),40, 10, 10));
  candy.addImage(candyImg);
  candy.scale=0.12;
  candy.velocityY = 3;
  candy.lifetime = 150;
  candyG.add(candy);
  }
}

function createchocolate() {
  if (World.frameCount % 320 == 0) {
  var chocolate = createSprite(Math.round(random(50, 350),40, 10, 10));
  chocolate.addImage(chocolateImg);
  chocolate.scale=0.5;
  chocolate.velocityY = 3;
  chocolate.lifetime = 150;
  chocolateG.add(chocolate);
}
}

function createlol() {
  if (World.frameCount % 410 == 0) {
  var lol = createSprite(Math.round(random(50, 350),40, 10, 10));
  lol.addImage(lolImg);
  lol.scale=0.4;
lol.velocityY = 3;
lol.lifetime = 150;
  lolG.add(lol);
  }
}

function createburger(){
  if (World.frameCount % 530 == 0) {
  var burger = createSprite(Math.round(random(50, 350),40, 10, 10));
burger.addImage(burgerImg);
  burger.scale=0.1;
burger.velocityY = 3;
 burger.lifetime = 150;
  burgerGroup.add(burger);
  }
}
