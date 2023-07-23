class Soldier {
  constructor(x, y, width, height) {
    var soldier_properties = {
      timeScale: 0.5,
    };

    this.body = Bodies.rectangle(x, y, width, height, soldier_properties);
    this.width = width;
    this.height = height;
    this.image = loadImage("Paratrooper.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(255, 50, 50);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }
}
