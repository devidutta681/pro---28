class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB: pointB,
            stiffness:0.02,
            length:25
        }
        this.launch = Constraint.create(options)
        this.pointB = pointB
        World.add(world,this.launch)
    }

    fly(){
        this.launch.bodyA = null
    }
    attach(body){
        this.launch.bodyA = body
    }
    display(){
        if(this.launch.bodyA){
            var pointA = this.launch.bodyA.position
            var pointB = this.pointB
            push();
            stroke(48,22,8);
            line(pointA.x,pointA.y,pointB.x,pointB.y)
            pop();
        }
    }
}