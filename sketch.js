const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;
var maxDrops=100;
var drops=[];

function preload(){
    boy1=loadImage("walking_1.png");
    thunder1=loadImage("thunder1.png");
    thunder2=loadImage("thunder2.png");
    
}

function setup(){
var canvas=createCanvas(400,700);
engine = Engine.create();
world = engine.world;
boy=createSprite(150,570,350,350);
  boy.addImage(boy1);
  boy.scale=0.4;
  //umbrella1=new umbrella(150,170);
  rain=new createDrop(30,40,40,40);
  if(frameCount % 150===0){

  
//var createDrop=random(0,400);
for(var i=0;i<maxDrops;i++){
  drops.push(new createDrop(random(0,400),random(0,400)));
}
}     
      

   
    
}

function draw(){
    background(0);
    Engine.update(engine);
    text(mouseX+","+ mouseY,mouseX,mouseY);
    rain.display();
 // umbrella1.display();
    
    drawSprites();
    rand=Math.round(random(1,4));
    if(frameCount % 80===0){
      thunderCreatedFrame=frameCount;
      thunder=createSprite(random(10,370),random(10,30),10,10);
      switch(rand){
        case 1: thunder.addImage(thunder1);
        break;
        case 2:thunder.addImage(thunder2);
        break;
        default: break;
       
  
      }
    
    thunder.scale= random(0.3,0.6);
    }
   

    

    
} 

 


