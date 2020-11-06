var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground, manImage1, manImage2, manImage3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var man, k, a;
a = false;
k = -3;

function preload()
{
	helicopterIMG=loadImage("helicopter.png");
	packageIMG=loadImage("package.png");
	manImage1 = loadImage("image2.png");
	manImage2 = loadImage("image1.png");
	manImage3 = loadImage("image3.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	man = createSprite(820, 627, 30, 30);
	man.addImage(manImage1);
	man.scale = 0.2;

	packageSprite=createSprite(width/2, 200, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.7, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
	Engine.update(engine);
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x;
  packageSprite.y= packageBody.position.y;
  if (man.x <= 450)
  {
	  a = true;
	 k = 0; 
	  man.velocityX = 0;
	  man.addImage(manImage2);
  }
  drawSprites();
  if (a)
  {
	  fill("red");
	  stroke("white");
	text("THANK YOU !!", 400, 580);
  }
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	Matter.Body.setStatic(packageBody, false);
	man.velocityX = k;
  }
}



