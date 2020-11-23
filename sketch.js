const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var ground, ball;
var box3, box4
var box1,box2;
var ground1;

function setup(){
    var canvas = createCanvas(800,400);
    engine = Engine.create();
    world = engine.world;

    ground1= new Ground();
box3 = new Box(400,200,50,50);
box4 = new Box(420,150,50,50);
    box1 = new Box(100,200,50,50);
    box2 = new Box(120,150,50,100);
    //console.log(ground);
}

function draw(){
    background(0);
    Engine.update(engine);
  ground1.display()
    box3.display();
    box4.display();
    box1.display();
    box2.display();
    console.log(box2);

}