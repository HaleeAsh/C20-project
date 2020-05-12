var car,wall ;
var speed,weight;
var deformation;

 function setup() {
  createCanvas(1600,400);
  car = createSprite(400, 200, 50, 50);
  car.shapeColor = color(255);
  wall = createSprite(1500,200,60,height/2);
  wall.shapeColor = (80,80,80);
  
  speed = random(55,90)
    weight = random(400,1500)
    car.velocityX = speed;


}

function draw() {
  background("darkBlue"); 

  fill(0,255,0)
  textSize(20)
  text("if the deformation < 100, it is SAFE for passengers",673,280)
  fill("yellow")
  text("if the deformation < 180 && deformation > 100,it is AVERAGE for passengers",673,310)
  fill(255,0,0)
  text("if the deformation > 180,it is DANGEROUS for passengers",673,340)
  textSize(30)
  fill("white")
  text("DEFORMATION =",868,383);
  fill("orange")
  text("Global Car Safety Organisation",670,30)
  if(wall.x-car.x===(car.width+wall.width)/2)
  {
    car.velocityX = 0;
    deform();
  }
 
  drawSprites();
}
function deform(){
   deformation = 0.5* weight * speed * speed/22509;
   textSize(35)
   if(deformation > 180)
   {
     car.shapeColor = color(255,0,0);
     fill(255,0,0)
     text(Math.round(deformation),1123,383);
   }

   if(deformation < 180 && deformation > 100)
  {
    car.shapeColor = color(230,230,0);
    fill(230,230,0)
    text(Math.round(deformation),1123,383);
  }

  if(deformation <= 100)
  {
    car.shapeColor = color(0,255,0);
    fill(0,255,0)
    text(Math.round(deformation),1123,383);
  }
}
