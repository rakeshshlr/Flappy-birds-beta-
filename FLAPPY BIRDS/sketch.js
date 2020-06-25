const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var rocket;
var engine, world;
var bg;
var position;


function preload(){
  bg = loadImage("./images/background.png");
 rocket = loadImage("./images/rocket.png");
}

function setup() {
  engine = Engine.create();
 world = engine.world;
 var canvas = createCanvas(600,600);
//var bg = createSprite(width/2, height/2, 50, 50);
 //bgImg.addImage("bgImg",bg);

 rocket = new Rocket(displayWidth/2,400);
 
 
}

function draw() {
  background(bg);  
  if(keyDown(LEFT_ARROW)){
    rocket.velocity.x = -1;
    console.log("move left");
}
else if(keyDown(RIGHT_ARROW)){
  rocket.body.velocity.x = 1;
}
else if(keyDown(UP_ARROW)){
  rocket.body.velocity.y = -1;
}
else if(keyDown(DOWN_ARROW)){
  rocket.body.velocity.y = 1;
}
  
rocket.display();
Engine.update(engine);
drawSprites();
}
/*function changePosition(){
  rocket.body.position.x = rocket.body.position.x + x;
  rocket.body.position.y = rocket.body.position.y + y;
}
*/





