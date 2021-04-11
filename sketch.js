var snake; 
var boundary1, boundary2, boundary3, boundary4, boundary5, boundary6, boundary7, boundary8, boundary9, boundary10;
var coinImage, coin, coin1, coin2, coin3, coin4, coin5, coin6, coin7, coin8, coin9, coin10;
var coin11, coin12, coin13, coin14, coin15, coin16, coin17, coin18, coin19, coin20;
var score = 0;
var snakeImage;
var edges;
var coinGroup;

function preload(){

//To add coin image
coinImage = loadImage("COin.png");

snakeImage = loadImage("Snake.jpg");
}

function setup() {
  createCanvas(1000,600);
  edges = createEdgeSprites();

  coinGroup = new Group();

   //To draw snake(playing character)
   snake = createSprite(450, 300, 50, 50);
   snake.shapeColor = "red";
   snake.addImage(snakeImage);
   snake.scale = 0.2;

   //To draw boundaries(non-playing character)
   boundary1 = createSprite(400, 200, 150, 20);
   boundary1.shapeColor = "red";
   boundary1.velocityX = 4;
   boundary2 = createSprite(600, 100, 180, 20);
   boundary2.shapeColor = "blue";
   boundary2.velocityX = -4;
   boundary3 = createSprite(200, 200, 20, 200);
   boundary3.shapeColor = "purple";
   boundary3.velocityY = -4;
   boundary4 = createSprite(100, 500, 20, 150);
   boundary4.shapeColor = "yellow";
   boundary4.velocityY = 4;
   boundary5 = createSprite(400, 500, 150, 20);
   boundary5.shapeColor = "white";
   boundary5.velocityX = 4;
   boundary6 = createSprite(900, 200, 20, 270);
   boundary6.shapeColor = "pink";
   boundary6.velocityY = -4;
   boundary7 = createSprite(700, 400, 20, 150);
   boundary7.shapeColor = "orange";
   boundary7.velocityY = 4;
   boundary8 = createSprite(400, 50, 150, 20);
   boundary8.shapeColor = "pink";
   boundary8.velocityX = -4;
   boundary9 = createSprite(900, 550, 150, 20);
   boundary9.shapeColor = "blue";
   boundary9.velocityX = 4;
   boundary10 = createSprite(50, 200, 20, 200);
   boundary10.shapeColor = "green";
   boundary10.velocityY = -4;

}

function draw() {
  background(0);
  
  //To make the walls bounce off the edges
  boundary1.bounceOff(edges);
  boundary2.bounceOff(edges);
  boundary3.bounceOff(edges);
  boundary4.bounceOff(edges);
  boundary5.bounceOff(edges);
  boundary6.bounceOff(edges);
  boundary7.bounceOff(edges);
  boundary8.bounceOff(edges);
  boundary9.bounceOff(edges);
  boundary10.bounceOff(edges);
  snake.bounceOff(edges);

  //Calling function to make coins
  spawnCoins();

  //Condition for increasing score and destroying the coin on touching
  if(snake.isTouching(coinGroup)){
    score = score+1;
    console.log("Hi");
    coinGroup.destroyEach();
  }
  
  //To add text for score
  textSize(30);
  fill("white");
  text("Score: "+score,50,30);

  //To add key movements for snake
  if(keyDown(UP_ARROW)){
    snake.velocityY = -4;
  }
  if(keyDown(DOWN_ARROW)){
    snake.velocityY = 4;
  }
  if(keyDown(RIGHT_ARROW)){
    snake.velocityX = 4;
  }
  if(keyDown(LEFT_ARROW)){
    snake.velocityX = -4;
  }

  //Condition for game over
  if(snake.isTouching(boundary1) || snake.isTouching(boundary2) || snake.isTouching(boundary3) || snake.isTouching(boundary4) || snake.isTouching(boundary5) || snake.isTouching(boundary6) || snake.isTouching(boundary7) || snake.isTouching(boundary8) || snake.isTouching(boundary9) || snake.isTouching(boundary10)){
    snake.setVelocity(0,0);
    coinGroup.destroyEach();
    boundary1.setVelocity(0,0);
    boundary2.setVelocity(0,0);
    boundary3.setVelocity(0,0);
    boundary4.setVelocity(0,0);
    boundary5.setVelocity(0,0);
    boundary6.setVelocity(0,0);
    boundary7.setVelocity(0,0);
    boundary7.setVelocity(0,0);
    boundary8.setVelocity(0,0);
    boundary9.setVelocity(0,0);
    boundary10.setVelocity(0,0);

    textSize(40);
    fill("white");
    text("OH! GAME OVER", 350, 300);
  }
  
  drawSprites();
}

function spawnCoins(){

  if(frameCount%60 === 0){
   coin = createSprite(400, Math.round(random(50,400)), 10, 10);
   coin.addImage(coinImage);
   coin.scale = 0.1;
   coin.lifetime = 100;
   coinGroup.add(coin);
  }
}