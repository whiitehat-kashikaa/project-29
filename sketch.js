const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var Groung;
var Stand;
var polygonshot, polygon;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block20, block11, block12, block13, block14, block15, block16

function preload(){
    polygon_img = loadImage("polygon.png");
}

function setup(){
    createCanvas(1200, 500);

    engine = Engine.create();
    world = engine.world;
    Engine.run(engine);

    Groung = new Ground(700, 495, 1500, 20);
    Stand = new Ground(180, 320, 280, 20);

    block1 = new Block(145, 120, 20, 20);

   block2 = new Block(135, 130, 20, 20); 
   block3 = new Block(145, 130, 20, 20); 
   block4 = new Block(155, 130, 20, 20); 

   block5 = new Block(125, 140, 20, 20); 
   block6 = new Block(135, 140, 20, 20);  
   block7 = new Block(145, 140, 20, 20); 
   block8 = new Block(155, 140, 20, 20); 
   block9 = new Block(165, 140, 20, 20); 

   //last row
   block10 = new Block(115, 150, 20, 20); 
   block11 = new Block(125, 150, 20, 20); 
   block12 = new Block(135, 150, 20, 20);

   block13 = new Block(145, 150, 20, 20); 
   block14 = new Block(155, 150, 20, 20);
   block15 = new Block(165, 150, 20, 20);

   block16 = new Block(175, 150, 20, 20);

   //polygon = new Shooter(100, 150);
   polygon = Bodies.circle(550, 200, 20);
   World.add(world, polygon);

   polygonshot = new Slingshot({x:600, y:200} , this.polygon);

   

}

function draw(){

    background('skyblue');
    Engine.update(engine);


    fill("black")
    textSize(30);
 
    stroke(8);
    text(' Drag the hexagonal stone and release it, to launch it towards the blocks! ⇙', 50, 100);
  
    Groung.display();
 Stand.display();

    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    block11.display();
    block12.display();
    block13.display();
    block14.display();
    block15.display();
    block16.display();

    polygonshot.display();
    //polygon.display();

    imageMode(CENTER)
    image(polygon_img ,polygon.position.x,polygon.position.y,40,40);

}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
    polygonshot.fly();
  }