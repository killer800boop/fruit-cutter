var knife,swordimage,fruit1,fruit2,fruit3,fruit4,
bomb,endimage;
var PLAY = 1;
var END = 0;
var gameState = PLAY

function preload(){
  swordimage = loadImage("sword.png");
  fruit1 = loadImage("fruit1.png");
  fruit2 = loadImage("fruit2.png");
  fruit3 = loadImage("fruit3.png");
  fruit4 = loadImage("fruit4.png");
  bomb = loadAnimation("alien1.png");
  endimage = loadImage("gameover.png")
 
  
  
 
}
function setup(){
 knife = createSprite(200,200,20,20);
 knife.addImage(swordimage);
 knife.scale = 0.7
  score = 0

  
  friend = new Group();
  killer = new Group();
  
}

function draw(){
  background("blue")
  drawSprites()
  text("Score: "+ score, 340,20);
    knife.x = World.mouseX
    knife.y = World.mouseY

 if(gameState === PLAY){
  fruits();
  enemy(); 

  if(friend.isTouching(knife)){
    friend.destroyEach()
    score = score + 2

  }
   if (killer.isTouching(knife)){
   gameState = END
    }
  
}
  if(gameState === END){
    fruit.velocityX = 0
    monster.velocityX = 0
    knife.X = 200
    knife.Y = 200
    end = createSprite(200,200,10,10);
    end.addImage(endimage);
    end.scale = 0.9 
    
  }
}
function fruits(){
  if(World.frameCount%80===0){
    fruit = createSprite(400,200,20,20);
    fruit.scale = 0.2;
    r = Math.round(random(1,4));
    if(r ==1){
      fruit.addImage(fruit1)
    }else if(r==2){
      fruit.addImage(fruit2)
    }else if(r==3){
      fruit.addImage(fruit3)
    }else if(r==4){
      fruit.addImage(fruit4)
    }
    fruit.y = Math.round(random(50,340))
    
    fruit.velocityX = -7
    fruit.setLifetime = 100
    
    friend.add(fruit)
  }
  
}
function enemy(){
  if(World.frameCount%200===0){
    monster = createSprite(400,200,20,20)
    monster.addAnimation("moving" , bomb)
    monster.y = Math.round(random(100,300))
    monster.velocityX = -8
    monster.setLifetime = 50
    
    killer.add(monster)
  }
  
}

























