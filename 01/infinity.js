var x, y, speed, vx, vy, limitX, limitY, offSet, offSet2;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height / 2;

  speed = 5;

  vx = speed;
  vy = speed;

  limitX = 100;
  limitY = 50;

  lx1 = x + limitX;
  lx2 = x - limitX;

  ly1 = y + limitY;
  ly2 = y - limitY;

  offSet = 0;
  offSet2 = 255;
  background(22, 25, 27);
  frameRate(70);
  colorMode(HSB, 255);
}

function draw() {
  fill(offSet, 255, 200, 115);
  stroke(offSet2, 255, 200, 115);
  ellipse(x, y, 50, 50);

  offSet++;
  offSet2--;

  if (offSet > 255) {
    offSet = 0;
  }
  if (offSet2 < 0) {
    offSet2 = 255;
  }

  if (x <= lx2 || x >= lx1) {
    vx = -vx;
  }
  if (y <= ly2 || y >= ly1) {
    vy = -vy;
  }

  x += vx;
  y += vy;
}
