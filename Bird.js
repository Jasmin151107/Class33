class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.visibility =255;
    this.image = loadImage("sprites/bird.png");
    this.smokeImg = loadImage("sprites/smoke.png");
    this.trajectory = [];
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    if(this.body.velocity.x>10 && this.body.position.x >200){
    var position = [this.body.position.x,this.body.position.y];
    this.trajectory.push(position);
  }
    super.display();

    for (var i=0; i<this.trajectory.length;i++){
      push()
      this.visibility = this.visibility-0.5
      tint (255,this.visibility);
      image(this.smokeImg,this.trajectory[i][0],this.trajectory[i][1])
      pop()
    }
  }
}
