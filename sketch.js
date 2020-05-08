const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;
const Constraint = Matter.Constraint;
var bg;

var engine,world;
function preload(){
  bg = loadImage("Photos/bg.png");
}
function setup() {
 engine = Engine.create();
 world = engine.world;
 var canvas = createCanvas(800,400);
 box1 = new Box(540,384);
// ground = new Ground(540,130,200,30);
 Sbox = new Sling(100,200,60,60);
 chain = new Chain(Sbox.body,{x:100,y:100});
 ground1 = new Ground(400,390,800,30);
box2 = new Box(538,130);
 console.log(second); 
 ex  = new Log(550,140,210,30);
 ex2 = new Log(500,250,30,165);
 ex3 = new Log(630,230,30,165);
}

function draw() {
  background(bg); 
  Engine.update(engine);
  box1.display();
  //ground.display();
  Sbox.display();
  chain.display();
  ground1.display();
  box2.display();
  ex.display();
  ex2.display();
  ex3.display();
}

function mouseDragged(){
  Matter.Body.setPosition(Sbox.body,{x:mouseX,y:mouseY});
}

function mouseReleased(){
  chain.fly();
}

function keyPressed(){
  if(keyCode===32){
    chain.attach(Sbox.body);
  } 
}