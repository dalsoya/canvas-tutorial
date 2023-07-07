let canvas = document.querySelector("#canvas");

/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#ff8";

class Circle {
  constructor(xpos, ypos, radius, color, text) {
    this.xpos = xpos;
    this.ypos = ypos;
    this.radius = radius;
    this.color = color;
    this.text = text;
  }

  draw(context) {
    context.beginPath();

    context.strokeStyle = this.color;
    context.textAlign = "center";
    context.textBaseline = "middle";
    context.font = "20px Arial";
    context.fillText(this.text, this.xpos, this.ypos);
    // context.strokeText(this.text, this.xpos, this.ypos);

    context.lineWidth = 5;
    context.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
    context.stroke();
    context.closePath();
  }
}

let circle_counter = 1;

let all_circles = [];

let createCircle = (circle) => {
  circle.draw(context);
};

for (let numbers = 0; numbers < 10; numbers++) {
  let random_x = Math.random() * window_width;
  let random_y = Math.random() * window_height;

  let my_circle = new Circle(random_x, random_y, 50, "black", circle_counter);
  all_circles.push(my_circle);
  createCircle(all_circles[numbers]);
  circle_counter++;
}
