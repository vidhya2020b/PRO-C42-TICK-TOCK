const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var man_image;


function preload(){
 // man_image = loadAnimation("clock.gif");
   man_image = loadImage("clock.gif");
  
}

function setup(){
  var canvas = createCanvas(400,400);

  engine = Engine.create();
  world  = engine.world;

  
  



}

function draw(){
  background("white");
  Engine.update(engine);

 
 
  
  
  drawSprites();
}


