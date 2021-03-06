class Paper{
    constructor(x,y,r){
        var options = {
          restitution: 0.3,
          friction: 0.5, 
          density:1.2,
        }
       this.body=Bodies.circle(x,y,r,options)
       World.add(world, this.body) 
       this.r=r
       this.image= loadImage("paper.png")
    }
    display(){
        imageMode(CENTER)
        image(this.image, this.body.position.x, this.body.position.y, 80, 80)
    }
}