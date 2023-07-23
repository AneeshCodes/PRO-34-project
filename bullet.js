class Bullet {
  constructor(x, y, width, height) {
    this.body = Bodies.rectangle(x, y, width, height);
    this.width = width;
    this.height = height;
    this.image = loadImage("Shell.png");
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rectMode(CENTER);
    fill(50, 50, 50);
    image(this.image, 0, 0, this.width, this.height);
    pop();
  }

  fire(xVel, yVel) {
    Matter.Body.setVelocity(this.body, { x: xVel, y: yVel });
  }
}
