var car;
var stick;

function setup() {
  createCanvas(1600,600);

  stick1 = createSprite(600, 20, 5, 60);
  stick2 =  createSprite(800, 20, 5, 60);
  stick3 = createSprite(700, 50, 201, 5);
  stick4 = createSprite(480, 500, 1800, 5);
  stick5 = createSprite(5, 570, 10, 140);
  stick7 = createSprite(500, 230, 1800, 5);
  stick8 = createSprite(500, 370, 1800, 5);
  stick9 = createSprite(500, 560, 5, 110);
  stick10 =  createSprite(950, 560, 5, 110);
  stick11 =  createSprite(200, 560, 5, 110);
  stick12 = createSprite(1350, 430, 20, 70);
  stick13 = createSprite(1350, 170, 20, 70);
  stick14 = createSprite(1350, 300, 20, 70);
}

function draw() {
  background("black"); 

  if(rect.isTouching = stick12) {
    fill(Yellow)
  }

  if(rect.isTouching = stick13) {
    fill(RED)
  }

  if(rect.isTouching = stick14) {
    fill(rED)
  }
  
  fill("white");
  text("Car Test", 660,30);

  text("* IF (collision<80) then colour = Green", 250,550);
  text("* IF collision is in between (80-180) then colour = Red", 600,550);
  text("* IF (collision>180) then colour = Yellow", 1000,550);

  text("* Grey-zenia = 180.8", 40,535);
  text("* Blue-cyclap = 134", 50,565);
  text("* White-loutus = 84", 40,590);

  fill("grey");
  rect(30, 400, 30, 30);
  rect.velocityX = -60;
  rect.bounce = stick12;

  fill("blue");
  rect(30, 150, 30, 30);
  rect.velocityX = -45;
  rect.bounce = stick13;

  fill("white");
  rect(30, 280, 30, 30);
  rect.velocityX = -50;
  rect.bounce = stick14;

  drawSprites();
}