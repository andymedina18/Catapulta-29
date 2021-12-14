class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        //Imagen
        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');
        this.pointB = pointB
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image(this.sling1, 200, 20);
        image(this.sling2, 170, 20);

        if(this.sling.bodyA){
            var pointA = this.sling.bodyA.position;
            var pointB = this.pointB;
        

            push();
            //Color de la linea 
            strokeWeight(8);
            stroke(84, 39, 15);

            //No se iguala, se le suma y resta
            line(pointA.x - 27, pointA.y, pointB.x - 10, pointB.y);
            line(pointA.x - 27, pointA.y, pointB.x + 30, pointB.y - 4);
            image(this.sling3, pointA.x - 27, pointA.y - 10, 15, 30);
            pop();
        } 
        
    }
    
}