class Dustbin {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      World.add(world, this.body);
      this.image= loadImage("dustbin.png")
    }
    display(){
      var pos =this.body.position;
      fill("gray");
      imageMode(CENTER)
      image(this.image, pos.x, pos.y-90 ,200, 200);
    }
  };