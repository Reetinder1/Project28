class Tree {
    constructor(x,y,width,height){
        var options = {
           

            restitution : 0,
            friction : 0,
            density : 0,
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width;
        this.height = height;

        World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        push();
        translate(pos.x,pos.y);
        rectMode(CENTER);
        fill("white");
        rect(pos.y,pos.x,this.widht,this.height);
        pop();
    }
};