
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var line1;
var line2;
var line3;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;
    
	line1=createSprite(490,570,20,150) 
    line2=createSprite(690,570,20,150)
    line3=createSprite(590,650,190,20)
	line3.shapeColor=("cyan")
    line2.shapeColor=("magenta")
	line1.shapeColor=("magenta")

	Create the Bodies Here.
   ground = new Ground(600,height,1200,20)
	paperpos=new Paper(235,420,r/2) 
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  paperpos.display();
 drawSprites();
}











