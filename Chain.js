class Chain{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.06,
            length:20,
            airFriction:100000
        }
        this.pointB = pointB;
        this.string=Constraint.create(options);
        World.add(world,this.string);
        }
        fly(){
            this.string.bodyA = null;
        }
        attach(){
            this.string.bodyA = Sbox.body;
        }
    display(){
        if(this.string.bodyA){
        var pointA = this.string.bodyA.position;
        var pointB = this.pointB;

        fill("red");
        //strokeWeight(4);
        rectMode(CENTER);
        line(pointA.x,pointA.y,pointB.x,pointB.y);
    }
}
}