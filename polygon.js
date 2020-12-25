class Polygon{
    constructor(){
        var options = {
            'restitution' : 0.8,
            'friction' : 1.0,
            'density' : 1.0
        }
        this.image = loadImage("polygon.png");
        this.body = Bodies.circle(100,140,20,options);
        World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var position = this.body.position;
        push();
        translate(position.x, position.y);
        rotate(angle);
        imageMode(RADIUS);
        image(this.image, this.body.position.x, this.body.position.y,40,40);
        pop();
    }
}