class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.visibility =255;
    this.trajectory = [];
    this.redBird = loadImage("sprites/bird.png");
    this.blueBird = loadImage("sprites/bluebird.png")
    this.yellowBird = loadImage ("sprites/yellowbird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    
  }
   displayRed(){
   var angle = this.body.angle
   push ()
   translate(this.body.position.x,this.body.position.y)
   rotate (angle);
   imageMode (CENTER)
   image (this.redBird,0,0,this.width,this.height);
   pop ()
}
displayBlue(){
  var angle = this.body.angle
  push ()
  translate(this.body.position.x,this.body.position.y)
  rotate (angle);
  imageMode (CENTER)
  image (this.blueBird,0,0,this.width,this.height);
  pop ()
}
displayYellow(){
  var angle = this.body.angle
  push ()
  translate(this.body.position.x,this.body.position.y)
  rotate (angle);
  imageMode (CENTER)
  image (this.yellowBird,0,0,this.width,this.height);
  pop ()
}





  displayTrajectory() {
    
    
    if(this.body.velocity.x>10 && this.body.position.x >200){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
  }
    

    for (var i=0; i<this.trajectory.length;i++){
      push()
      this.visibility = this.visibility-0.5
      tint (255,this.visibility);
      image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])
      pop()
    }
  }
}
