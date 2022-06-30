var ball,groundObj,leftside,rightside;
var world;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var radius = 40;

function preload()
{
	
}

function setup() {
	createCanvas(1500, 800);
	rectMode(CENTER);

    var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	groundObj= new ground(width/2, 670, width, 20);
	leftside = new ground(1100, 600, 20, 120);
	rightside = new ground(1350, 600, 20, 120);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	
	ball = Bodies.circle(260, 100, 20, ball_options);
	World.add(world, ball);
	Engine.run(engine);
}

function keyPressed() {
	if (keyCode === Up_Arrow) {
		Matter.Bodies.applyForce(ball, ball.postion, {x:85,y: -85})
	}
}

function draw() {
  rectMode(CENTER);
  background(0);
  ellipse(ball.postion.x, ball.postion.y, radius, radius);
  groundObj.display();
  leftside.display();
  rightside.display();
  
 
}



