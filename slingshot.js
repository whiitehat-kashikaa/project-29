class Slingshot{
    constructor(pointA, bodyB){
        var options={
            pointA: pointA,
            bodyB: bodyB,
            stiffness: 0.04,
            length: 10
        }
        this.sling = Constraint.create(options);
        this.pointA = pointA;
        World.add(world,this.sling);
    }
fly(){
    this.sling.bodyB = null;
}

display(){
    if(this.sling.bodyB){  
 var pointA  = this.sling.bodyB.position;
 var pointB  = this.pointA;

 strokeWeight(4);
 line(pointA.x, pointA.y, pointB.x, pointB.y);
}
}
}