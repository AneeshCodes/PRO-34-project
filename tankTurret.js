class TankTurret {
  constructor(x, y) {
    var tankBodyOption = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(x, y, 150, 25, tankBodyOption);
    this.image = loadImage("Turret.png");
  }

  display() {
    fill(100, 100, 100);
    push();
    translate(this.body.position.x, this.body.position.y);
    rotate(this.body.angle);
    image(this.image, 0, 0, 150, 25);
    pop();
  }

  rotateUp() {
    Matter.Body.setAngle(this.body, this.body.angle + PI / 360);
    Matter.Body.translate(this.body, { x: 0.4, y: -1.1 });
  }

  rotateDown() {
    Matter.Body.setAngle(this.body, this.body.angle - PI / 360);
    Matter.Body.translate(this.body, { x: -0.4, y: 1.1 });
  }
}
