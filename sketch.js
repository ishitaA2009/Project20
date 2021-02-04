var garden,gardenImg;
var cat,rat;
var catImg1,ratImg1,catImg2,ratImg2,catImg3,ratImg3;
function preload() {
    //load the images here
    gardenImg=loadImage("images/garden.png");
    catImg1=loadImage("images/cat1.png");
    ratImg1=loadImage("images/mouse1.png");
    catImg2=loadImage("images/cat2.png","images/cat3.png");
    ratImg2=loadImage("images/mouse2.png","images/mouse3.png");
    catImg3=loadImage("images/cat4.png");
    ratImg3=loadImage("images/mouse4.png")
}

function setup(){
    createCanvas(600,800);
    garden=createSprite(200,200);
    garden.addImage(gardenImg);
    //create tom and jerry sprites here
    cat=createSprite(550,400,10,20);
    cat.addImage(catImg1);
    cat.scale=0.1;
    rat=createSprite(250,400,10,20);
    rat.addImage(ratImg1);
    rat.scale=0.1;
}

function draw() {

    background(255);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x-rat.x<(cat.width-rat.width)/2){
      cat.velocityX=0;
      cat.addAnimation("catLastImage",catImg3);
      cat.changeAnimation("catLastImage");
      rat.addAnimation("ratLastImage",ratImg3);
      rat.changeAnimation("ratLastImage");
    }
    drawSprites();
}


function keyPressed(){
if(keyCode === LEFT_ARROW){
 cat.velocityX=-5;
 cat.addAnimation("catRunning",catImg2);
 cat.changeAnimation("catRunning");
 rat.addAnimation("ratTeasing",ratImg2);
 rat.changeAnimation("ratTeasing");
  text(mouseX+','+mouseY,10,45);
}
}
