

const  Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint = Matter.Constraint;

var engine, world;
var dustbin1;
var bob1, bob2;
var roof1;
var rope1;
var render;

var ground1;

var  bobDiameter;
var startBobPositionX , startBobPositionY;


var rope1;










function setup() {
  createCanvas(800,700);
  rectMode(CENTER);

  

  engine = Engine.create();
  world = engine.world;
  //dustbin1 = new dustbin(1200,650);
  //bob1 = new bob(200,450,40);
  ground1 = new roof(width/2,height-20,width,50);
  roof1 = new roof(width/2,height/4,width/3,20);

  bobDiameter = 40;
  startBobPositionX = width/2;
  startBobPositionY = height/2+200;
  bob1 = new bob(startBobPositionX ,startBobPositionY,bobDiameter );
  bob2 = new bob(400,300,50);
  console.log(bob1);

  var render = Render.create(
    {
      element: document.body,
      engine: engine,
      options:{
          width:1200,

          height:700,
          wireframes: false

      }
    }

  );




  




  
    rope1 = new rope(bob1.body,roof1.body,-80,0)

 Engine.run(engine);

}


function draw(){
rectMode(CENTER);
background("grey");
//Engine.update(engine);


roof1.display();

rope1.display();
//ground1.display();
bob1.display();
bob2.display();

rope1.display();
//roof1.display();



}

function keyPressed(){
    if(keyCode === UP_ARROW){
      //Matter.Body.setStatic(ball,false);
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }


}

