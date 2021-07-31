
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var dustbinObj,groundObject,p1
var world;


function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	groundObject=new ground(width/2,670,width,20);
	dustbinObj=new dustbin(1200,650);

	p1 = new paperr(400,650)

	Engine.run(engine);
  
}
function draw() {
  rectMode(CENTER);
  background(230);
 
  keyPressed();
  groundObject.display();
  dustbinObj.display();
  p1.display();

}
function keyPressed() {
	if (keyCode === UP_ARROW) {
		Matter.Body.applyForce(p1.body,p1.body.position,{x:1,y:-9})
	}
}