
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score;
var invisibibleground;
var ground;
var survivaltime;
var score;


function preload(){
  
 
monkey_running=       loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  monkey=createSprite(150,100,60,60)
  monkey.addAnimation("running",monkey_running);
  monkey.scale=0.1;
  
  ground=createSprite(150,180,20,20);
  ground.visible=false;
  
  invisibleground=createSprite(150,180,300,20)
  invisibleground.visible=false;
  
  
   foodsGroup = new Group();
  obstaclesGroup = new Group();
  
}


function draw() {
background("green")
  drawSprites();
  
  if(keyDown("space")){
    monkey.velocityY=-6;
    }
  
  if(monkey.isTouching(foodsGroup)){
    score=score+1
  }
  
 monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(invisibleground);
  
  
   if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  
  
  food();
  obstacle();
  
  if(obstaclesGroup.isTouching(monkey)){ 
    ground.velocityX = 0;
                                        monkey.velocityY = 0; 
    obstaclesGroup.setVelocityXEach(0); 
    foodsGroup.setVelocityXEach(0); 
    obstaclesGroup.setLifetimeEach(-1); 
    foodsGroup.setLifetimeEach(-1); 
    survialTime=0
    foodGroup.Destroy()
    obstaclesGroup.Destroy()
  } 
    
  
  stroke("black"); 
  textSize(20);
  fill("black"); 
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time: "+ survivalTime, 100,50);
  
  
  stroke("black"); 
  textSize(20);
  fill("black"); 
  score=Math.ceil(frameCount/frameRate()) 
  text("Score: "+score+1, 260,50);
  
}


function food(){
  if(frameCount % 150 === 0) {
    var foods = createSprite(260,80,10,40);
    foods.addImage(bananaImage);
    foods.scale=0.1
  
  
   foodsGroup.add(foods);
    foods.velocityX=-3
    
  }
  
 
}


function obstacle(){
  
  
  if(frameCount % 260 === 0) {
    var obstacle = createSprite(200,160,10,40);
    obstacle.addImage(obstacleImage)
    //obstacle.debug = true;
   
    obstacle.scale= 0.1
   
    
    //assign scale and lifetime to the obstacle           
    
    obstacle.lifetime = 200;
    //add each obstacle to the group
    obstaclesGroup.add(obstacle);
    obstacle.velocityX=-3
  }

  
}
