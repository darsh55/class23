class Box {
    constructor(x,y,w,h){
var option={ 
    restitution:0.6
}
        this.body= Bodies.rectangle(x,y,w,h,option);
        World.add(world,this.body);
        this.width =w;
        this.height =h;

    }

    //display functions
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(angle);
        rect(0,0,this.width,this.height);
        pop();
    }
}