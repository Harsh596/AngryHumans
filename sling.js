class Sling extends BaseClass{
    constructor(x,y,width,height){
       super(x,y,width,height);
        World.add(world,this.body);
        this.image = loadImage("Photos/h.png");   
    }
    } 