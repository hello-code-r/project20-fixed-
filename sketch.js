var wall, car, speed, weight;
var carXstart, carXend, carYstart, carYend;
var wallXstart, wallXend, wallYstart, wallYend;

function setup() {
  createCanvas(2000,500);
   car = createSprite(50, 200, 50, 50);
   wall = createSprite(1500, 200, 60, height/2);
   speed = random(55, 90)
   weight = random(400, 1500)
   car.shapeColor = "black";
   wall.shapeColor=color(80,80,80);
}

function draw() {
  background("white")
  wallXstart = wall.x - wall.width/2;
  wallXend = wall.x + wall.width/2;
  wallYstart = wall.y - wall.height/2;
  wallYend = wall.y + wall.height/2;

  carXstart = car.x - car.width/2;
  carXend = car.x + car.width/2;
  carYstart = car.y - car.height/2;
  carYend = car.y + car.height/2;

  car.velocityX=speed;
  if(wallXend>carXstart && wallXstart<carXend && wallYend>carYstart && wallYstart<carYend){
      car.velocityX = 0;
      var deformation = (0.5 * weight * speed * speed)/25000
     if (deformation>180){
        car.shapeColor=color(255,0,0);
      }
      if (deformation<180 && deformation>100){
       car.shapeColor=color(230,230,0);
     }
      if (deformation<100){
        car.shapeColor=color(0,255,0);
     }
  }
  drawSprites();
}