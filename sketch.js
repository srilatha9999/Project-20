var bg,canvas;
var cat,mouse;

function preload() {
    bg = loadImage("images/garden.png");
    catImg1= loadAnimation("images/cat1.png");
    catImg2=loadAnimation("images/cat2.png","images/cat3.png");
    catImg3= loadAnimation("images/cat4.png");
    mouseImg1=loadAnimation("images/mouse1.png");
    mouseImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
    mouseImg3=loadAnimation("images/mouse4.png");
}

function setup(){
    canvas = createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 600);
    cat.addAnimation("tomSleeping", catImg1);
    cat.scale = 0.2;

    mouse = createSprite(200, 600);
    mouse.addAnimation("jerryStanding", mouseImg1);
    mouse.scale = 0.15;

}

function draw() {

    background(bg);
   
    if(cat.x - mouse.x < (cat.width - mouse.width)/2)
    { 
        cat.velocityX=0;
        cat.addAnimation("tomLastImage", catImg3);
        cat.x =300;
        cat.scale=0.2;
        cat.changeAnimation("tomLastImage");
        mouse.addAnimation("jerryLastImage", mouseImg3);
        mouse.scale=0.15;
        mouse.changeAnimation("jerryLastImage");
    }  

    drawSprites();
}


function keyPressed(){

    if(keyCode === LEFT_ARROW){
        cat.velocityX = -5; 
        cat.addAnimation("tomRunning", catImg2);
        cat.changeAnimation("tomRunning");
        
        mouse.addAnimation("jerryTeasing", mouseImg2);
        mouse.frameDelay = 25;
        mouse.changeAnimation("jerryTeasing");
    }


}
