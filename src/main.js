let canvas = document.querySelector("#canvas");

/** @type {CanvasRenderingContext2D} */
let context = canvas.getContext("2d");

let window_height = window.innerHeight;
let window_width = window.innerWidth;

canvas.width = window_width;
canvas.height = window_height;

canvas.style.background = "#bbf";

class Circle {
  constructor(xpoint, ypoint, radius, color) {
    this.xpoint = xpoint;
    this.ypoint = ypoint;
    this.radius = radius;
    this.color = color;
  }
  /** @type {CanvasRenderingContext2D} */
  draw(context) {
    context.beginPath();
    context.arc(this.xpoint, this.ypoint, this.radius, 0, Math.PI * 2, false);
    context.strokeStyle = "grey";
    context.lineWidth = 3;
    context.stroke();
    context.closePath();
  }
}

let circle = new Circle(200, 200, 100, "red");
circle.draw(context);
