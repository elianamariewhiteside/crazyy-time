var dodo, dodoimg;
var bg,bgimg;
var bird,birdimg
var girl,girlimg
var anime,animeimg

function preload() {
  dodoimg = loadAnimation("images/dodo 1.png", "images/dodo 2.png", "images/dodo 3.png", "images/dodo 4.png");
  bgimg = loadImage ("images/background.jpg")
  birdimg = loadAnimation("images/2.png","images/3.png","images/4.png","images/5.png","images/6.png","images/7.png","images/8.png");
  girlimg =  loadAnimation("images/girl 1.png","images/girl 3.png","images/girl 4.png","images/girl 5.png","images/girl 6.png");
  animeimg = loadAnimation("images/anime 1.png","images/anime 2.png","images/anime 3.png","images/anime 4.png","images/anime 5.png","images/anime 6.png");
}
function setup() {
  createCanvas(700, 700);



  bg = createSprite(350,250,700,300);
bg.addImage("background",bgimg);
bg.scale = 3;
bg.velocityX = -2;

bird = createSprite(100,100,10,10);
bird.addAnimation("bird",birdimg);
bird.scale = 1.2;

  dodo = createSprite(200, 550, 10, 10);
  dodo.addAnimation("dodo", dodoimg);
  dodo.scale = 1;

  girl = createSprite(500, 550, 10, 10);
  girl.addAnimation("girl", girlimg);
  girl.velocityX = 2;
  girl.scale = 1;

  anime = createSprite(300, 80, 10, 10),
  anime.addAnimation("anime", animeimg);
  anime.scale = 1;
}
function draw() {
  background(180);

  if (girl.x>700){
girl.x = 50;
  }

  if (bg.x <0){
bg.x = 350
  }

  drawSprites();
}
