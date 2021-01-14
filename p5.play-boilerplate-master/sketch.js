var wall, thickness;
var bullet, speed, weight;

function setup() {
  createCanvas(800,400);

speed=random(223,321);
weight=random(30,52);

car = createSprite(50,200,50,50);
wall = createSprite(1200, 200, thicness, height/2);
thickness=random(22,83);
}

function draw() {
  background("salmon");  

car.velocityX= speed;

if(wall.x-car.x < (car.width+wall.width)/2){
  car.velocityX=0;
  var deformation=0.5 * weight * speed * speed/22590;

  if(deformation>180){
    car.shapecolor=color(255,0,0);
  }

  if(deformation<180 && deformation>100){
    car.shapecolor=color(230,230,0);
  }

  if(deformation<100){
    car.shapecolor=color(0,255,0);
  }
}

if(hasCollided(bullet, wall)){
  bullet.velocityX=0;
  var damge=0.5 *weight * speed *speed/(thickness*thickness*thickness);
  
  if(damge>10){
    wall.shapecolor=color(255,0,0);
  }
  
  if(damge<10){
    wall.shapecolor=color(0,255,0);
  }
  
  }


  drawSprites();
}

function hasCollided(ibullet, iwall){
bulletRightEdge=ibullet.x+ibullet.width;
wallLeftEdge=iwall.x;

if(bulletRightEdge>=wallLeftEdge){
  return true
}
return false;

}

