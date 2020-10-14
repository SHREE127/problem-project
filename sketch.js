
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function setup() {
	createCanvas(1200, 400);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height-20,1200,20)
	paper1 = new paper(100,390);

	red1= new block();
	
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper1.display();
  
  red1.display();

  drawSprites();
 
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
	   
	   Body.applyForce(paper1.body, paper1.body.position, {x: 10 , y: -10})
	   
	 }

	 if (keyCode === DOWN_ARROW) {
	   
		Body.applyForce(paper1.body, paper1.body.position, {x: 10 , y: 10})
		
	  }
   }



