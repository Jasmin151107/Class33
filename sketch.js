const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var score =0;
var bird, slingShot;
var gameState = "onSling"
var birds = []

function preload() {
   
    getTime();
    bg = loadImage("sprites/bg.png")
    birdSelectSound = loadSound("sprites/bird_select.mp3");
    birdFlySound = loadSound ("sprites/bird_flying.mp3");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    bird = new Bird(200,50);
    bird2 = new Bird (150,170);
    bird3 = new Bird (100,170);
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)

    log6 = new Log(230,180,80, PI/2);
    sling = new Slingshot(bird.body,{x:200,y:50});
}

function draw(){


   if(backgroundImg) {
    background(backgroundImg);
   }
   else{
       background(bg)
   }
 
    textSize (35)
    fill ("white")
    text ("Score: " + score ,width -300, 50)
    if(gameState==="launched"){
    if(birds.length>0){
        fill("yellow")
        text("Press space for next bird",480,50)
    }
    }

    Engine.update(engine);
    strokeWeight(4);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    bird.displayRed();
    bird2.displayBlue();
    bird3.displayYellow();

    bird.displayTrajectory();
    bird2.displayTrajectory();
    bird3.displayTrajectory();
    platform.display();
    //log6.display();
    sling.display();    
}
function mouseDragged(){
    if(mouseX >=0 && mouseX<200 &&  gameState!== "launched" )
 Matter.Body.setPosition(birds[bird.length-1].body,{x:mouseX,y:mouseY});
 birdFlySound.play();
}

function mouseReleased(){
    sling.fly();
    birds.pop()
    gameState = "launched";
}
function keyPressed(){
    if(keyCode===32){
        sling.attach(birds[birds.length-1].body);
        Matter.Body.setPosition(birds[birds.length-1].body,{x:200,y:50});
        Matter.Body.setAngle(bird.body,0)
        gameState = "onSling"
        birdSelectSound.play();
    }
}

async function getTime () {
    var response= await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata")
    var responseJson = await response.json();
    var dateTime = responseJson.datetime
    var hour = dateTime.slice(11,13);
    if (hour>=06&& hour<=18){
        bg = "sprites/bg.png"
    }
  else {
      bg = "sprites/bg2.jpg"
  }
  backgroundImg = loadImage(bg)

    console.log(dateTime);
}


