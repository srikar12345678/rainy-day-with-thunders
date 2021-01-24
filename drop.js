class createDrop{
    constructor(x, y) {
      var options = {
        
          'restitution':1,
          'friction':0.1,
          'density':0.8
      }
      
      this.body = Bodies.circle(x,y,5, options);
      this.radius=5;

      
     
      
      
  World.add(world, this.body);
    }
    updateY(){
      if(this.rain.position.y > height){
        Matter.Body.setPosition(this.rain,{x:random(0,400),y:random(0,400)})
      }
  
    }
    display(){
      var pos =this.body.position;
    push();
      
      
      
      ellipseMode(RADIUS);
      fill("blue");
      ellipse(pos.x,pos.y,5,5);
      pop();
  
    }
  }
  
  