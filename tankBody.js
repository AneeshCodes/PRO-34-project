class TankBody {
  constructor(x, y) {
    var tankBodyOption = {
      isStatic: true,
    };

    this.body = Bodies.rectangle(x, y, 50, 50, tankBodyOption);
    this.image = loadImage("Body.png");
  }

  display() {
    fill(100, 100, 100);
    image(this.image, this.body.position.x, this.body.position.y, 200, 75);
  }
}
