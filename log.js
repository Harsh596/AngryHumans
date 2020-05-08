class Log{
  constructor(x,y,width,height){
    var options ={
     restitution:0.8,
     friction:1,
     density:1,
    }
    this.body = Matter.Bodies.rectangle(x,y,width,height,options);

    Matter.World.add(world,this.body);
    this.width = width;
    this.height = height;
    //this.angle = angle;
  }
  display(){
    var pos = this.body.position;
    var angle1 = this.body.angle;
    push();
    translate(pos.x,pos.y);
    rotate(angle1);
    fill(123,50,19);
    noStroke();
    rect(0,0,this.width,this.height);//,this.angle);
    pop();
  }
}