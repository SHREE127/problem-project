class paper{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("images/download.jpg");
        paper.scale = 0.1;
        World.add(world, this.body);
      }
      display(){
      
        imageMode();
        image(this.image, 0, 0, this.width-200, this.height-100);
        
      }
}