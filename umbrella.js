class umbrella
{
    constructor(x, y) {
      var options = {
        isStatic:false,
          'restitution':1,
          'friction':0.1,
          'density':0.8
      }
      this.body = Bodies.circle(x,y,25, options);
      World.add(world, this.body);
      this.image=loadImage("walking_1.png");
    }



display(){
  var pos =this.body.position;
push();
  
  
  
  imageMode(RADIUS);
  fill("purple");
  image(this.image,pos.x,pos.y,25,25);
  pop();

}
}
