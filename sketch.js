const { 
	Engine,
	World,
	Bodies,
	Mouse,
	MouseConstraint,
	Constraint} = Matter

var world,engine;
var ground;
const boxes = [];
var bird;

var mConstraint;
var slingShot;

function setup() {
	const canvas = createCanvas(600, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(width/2,height-10,width,20);
	for(var i = 0; i < 3; i++){
	boxes[i] = box = new Box(450,300 - i*75,50,75);
}
	bird = new Bird(150,300,25);
	slingShot = new SlingShot(150,300,bird.body);

	const mouse = Mouse.create(canvas.elt);
    const options = {
	  mouse: mouse
	}

	mConstraint = MouseConstraint.create(engine,options);
	World.add(world,mConstraint);
}

function keyPressed(){
	if(key == ' '){
	  bird = new Bird(150,300,25);
	  slingShot.attach(bird.body);	
	}
}

function mouseReleased(){
	setTimeout(() => {
	slingShot.fly();
	},100);
}

function draw() {
  background(0);
  Matter.Engine.update(engine);
  ground.show();
  for(var box of boxes){
  box.show();
  }
  bird.show();
  slingShot.show();
}



