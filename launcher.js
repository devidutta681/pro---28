class launcher{
    constructor(bodyA,pointB){
        var options={
            bodyA:stone,
            pointB: pointB,
            stiffness:0.04,
            length:5
        }
        this.launch = Constraint.create(options)
        World.add(world,this.launch)
    }

    fly(){
        this.launch.bodyA = null
    }
    attach(body){
        this.launch.bodyA = body
    }
    display(){
        var pointA = this.launch.bodyA.position
        var pointB = this.pointB
        if(this.launch.bodyA){
            push();
            if(this.launch.bodyA !== null){
            stroke(48,22,8);
            if(pointA.x < 220) {
                strokeWeight(7);
                line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            }
            else{
                strokeWeight(3);
                line(pointA.x + 25, pointA.y, pointB.x -10, pointB.y)
            }
            pop();
            }
        }
    }
}