const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];

function setup() {
  createCanvas(800,750);
  engine = Engine.create();
  world = engine.world;

  ground=new Ground(100,height,1400,20)
  ground1=new Ground(01,600,10,300)
  ground2=new Ground(115,600,10,300)
  ground3=new Ground(229,600,10,300)
  ground4=new Ground(343,600,10,300)
  ground5=new Ground(457,600,10,300)
  ground6=new Ground(571,600,10,300)
  ground7=new Ground(685,600,10,300)
  ground8=new Ground(799,600,10,300)

  for (var j = 45; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,75))
  }  
  
  for (var j = 25; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,175))
  }

  for (var j = 45; j <=width; j=j+50) {
    plinkos.push(new Plinko(j,275))
  }

  for (var j = 20; j <=width-10; j=j+50) {
    plinkos.push(new Plinko(j,375))
  }

}

function draw() {
  background(0);
  ground.display(); 
  ground1.display();
  ground2.display();
  ground3.display();
  ground4.display();
  ground5.display();
  ground6.display();
  ground7.display();
  ground8.display();

  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display()
  }

  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
  }

 for (var i = 0; i < particles.length; i++) {
    particles[i].display();
  }

  drawSprites();
}