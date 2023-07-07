let canvas = document.querySelector("#canvas");

/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

class Circle {
  constructor(xpos, ypos, radius, color) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
  }

  draw(context) {
    context.beginPath();
    context.lineWidth = 5;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }
}

// let my_circle = new Circle(100, 100, 50, "black");
// let my_circle2 = new Circle(200, 200, 50, "black");

// my_circle.draw(context);
// my_circle2.draw(context);

let all_circles = [];

let createCircle = (circle) => {
  circle.draw(context);
};

for (let numbers = 0; numbers < 10; numbers++) {
  let random_x = Math.random() * window_width;
  let random_y = Math.random() * window_height;

  let my_circle = new Circle(random_x, random_y, 50, "black");
  all_circles.push(my_circle);
  createCircle(all_circles[numbers]);
}
