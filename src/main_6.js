let canvas = document.querySelector("#canvas");

/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

let hit_counter = 0;

class Circle {
  constructor(xpos, ypos, radius, color, text, speed) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
    this.speed = speed;

    this.dx = 1 * this.speed;
    this.dy = 1 * this.speed;
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    context.fillText(this.text, this.xpos, this.ypos);

    context.lineWidth = 5;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }

  update() {
    this.draw(context);

    if (this.xpos + this.radius > window_width) {
      this.dx = -this.dx;
    }
    if (this.xpos - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.ypos + this.radius > window_height) {
      this.dy = -this.dy;
    }
    if (this.ypos - this.radius < 0) {
      this.dy = -this.dy;
    }

    this.xpos += this.dx;
    this.ypos += this.dy;
  }
}

let getDistance = (xpos1, ypos1, xpos2, ypos2) => {
  let result = Math.sqrt(
    Math.pow(xpos2 - xpos1, 2) + Math.pow(ypos2 - ypos1, 2)
  );
  return result;
};

let randomNumber = (min, max) => {
  let result = Math.random() * (max - min) + min;
  return result;
};

const all_circles = [];

for (let i = 0; i < 10; i++) {
  const radius = 50;
  const random_x = randomNumber(radius, window_width - radius);
  const random_y = randomNumber(radius, window_height - radius);

  for (let a = 0; a < all_circles.length; a++) {
    if ( (getDistance(random_x,random_y,all_circles[a].xpos,all_circles[a].ypos) -radius +all_circles[a].radius) <0) {
      random_x = randomNumber(radius, window_width - radius);
      random_y = randomNumber(radius, window_height - radius);
    }
    a = all_circles.length;
  }
  let my_circle = new Circle(random_x, random_y, radius, "black", "A", 10);
  all_circles.push(my_circle);
}

let updateCircle = () => {
  requestAnimationFrame(updateCircle);
  context.clearRect(0, 0, window_width, window_height);

  all_circles.forEach((element) => {
    element.update();
  });
};

updateCircle();
