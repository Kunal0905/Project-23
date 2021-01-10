var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground;
var leftBody, downBody, rightBody;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.15

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)

	
    engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 ,{isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
	 World.add(world, ground);
	 var options = {
		 isStatic: true
	 }
	leftBody = Bodies.rectangle(270,619,20,100,options);
	fill("red");
	World.add(world,leftBody);
	downBody = Bodies.rectangle(380,655,200,20,options);
	fill("red");
	World.add(world,downBody);
	rightBody = Bodies.rectangle(490,618,200,20,options);
	fill("red");
	World.add(world,rightBody);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y
  rect(leftBody.position.x,leftBody.position.y,20,100);
  rect(downBody.position.x,downBody.position.y,200,20);
  rect(rightBody.position.x,rightBody.position.y,20,100);
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
 Matter.Body.setStatic(packageBody,false);
    
  }
}



