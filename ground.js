class Ground{
constructor(){
    var ground_options ={
        isStatic: true
    }

    ground = Bodies.rectangle(400,390,800,20,ground_options);
    World.add(world,ground);


}

display(){
    rectMode(CENTER);
    rect(ground.position.x,ground.position.y,800,20);
}

}