const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

// matter.js variables
var engine, world, body;

// other variables
var tankBody, tankTurret;
var ground;
var bullets, soldiers;

var noBullets = 0;

var rotation;

function setup() {
  createCanvas(800, 400);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(400, 390, 800, 20);
  tankBody = new TankBody(550, 310);
  tankTurret = new TankTurret(500, 318);

  //more setup
  rotation = 0;
  bullets = [];
  soldiers = [];
}

function draw() {
  // update the engine
  Engine.update(engine);

  //setting the background
  background(100, 190, 205);

  //displaying items
  ground.display();
  tankTurret.display();
  tankBody.display();

  // rotate the turret
  if (keyIsDown(UP_ARROW) && rotation < 90) {
    tankTurret.rotateUp();
    rotation++;
  }

  if (keyIsDown(DOWN_ARROW) && rotation > -10) {
    tankTurret.rotateDown();
    rotation--;
  }

  if (keyIsDown(32) && frameCount % 20 === 0) {
    var bullet = new Bullet(
      405 + 0.5 * rotation,
      318 - 0.75 * rotation,
      60,
      15
    );
    bullet.fire(-15, rotation * -0.2 - 2);
    bullets.push(bullet);
  }

  for (var x = 0; x < bullets.length; x++) {
    if (bullets[x].body.position.y >= 370) {
      Matter.World.remove(world, bullets[x].body);
    } else {
      bullets[x].display(-0.02, -0.02);
    }
  }

  if (frameCount % 100 === 0) {
    var soldierSpawnX = random(0, 390);
    var soldier = new Soldier(soldierSpawnX, -100, 50, 100);
    soldiers.push([soldier, soldierSpawnX]);
  }

  for (var y = 0; y < soldiers.length; y++) {
    if (soldiers[y][0].body.position.y >= 330) {
      Matter.World.remove(world, soldiers[y][0].body);
    } else {
      if (soldiers[y][0].body.position.x !== soldiers[y][1]) {
        Matter.World.remove(world, soldiers[y][0].body);
      } else {
        soldiers[y][0].display(-0.02, -0.02);
      }
    }
  }
}
