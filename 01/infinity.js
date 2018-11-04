var x, y, speed, vx, vy, limitX, limitY;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  x = width / 2;
  y = height / 2;

  speed = 5;

  vx = speed;
  vy = speed;

  limitX = 200;
  limitY = 100;

  lx1 = x + limitX;
  lx2 = x - limitX;

  ly1 = y + limitY;
  ly2 = y - limitY;
}

function draw() {
  background(22, 25, 27, 30);
  fill(255, 255, 255, 150);
  noStroke();
  ellipse(x, y, 50, 50);

  if (x <= lx2 || x >= lx1) {
    vx = -vx;
  }
  if (y <= ly2 || y >= ly1) {
    vy = -vy;
  }

  x += vx;
  y += vy;
}
