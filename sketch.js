var ball;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 900);
     var ball_options={
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
		
		}

	engine = Engine.create();
	world = engine.world;
	options={
		isStatic:true
	   }
	ground= Bodies.rectangle(0,height-1, width*2,1,options);
  World.add(world,ground);
  wall1= Bodies.rectangle(700,825, 20,150,options);
  World.add(world,wall1);
  wall2= Bodies.rectangle(850,825, 20,150,options);
  World.add(world,wall2);

	//Create the Bodies Here.
	ball_options={
		restitution:0.3,
		friction:0.01,
		density:0.8
	}
   ball= Matter.Bodies.circle(50,350,20,ball_options)
   World.add(world,ball);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
  rect(ground.position.x, ground.position.y,width*2,1);
  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,20)
  rect(wall1.position.x,wall1.position.y,20,150)
  rect(wall2.position.x,wall2.position.y,20,150)
}

function keyPressed(){
	if(keyCode==UP_ARROW){
		Matter.Body.applyForce(ball,ball.position,{x:50,y:-50})
	}
}



