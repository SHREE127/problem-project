class block{
    constructor() {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(800, 300, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("images/dustbingreen.png");
      block.scale = 0.1;

      World.add(world, this.body);
    }
    display(){
        
      imageMode(CENTER);
      image(this.image, 800, 300, this.width, this.height);
        
    }
  };