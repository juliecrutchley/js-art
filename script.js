// reference the canvas element
var canvas = document.getElementById('canvas');

// make the canvas full screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// reference the canvas context
var c = canvas.getContext('2d');

// create basic vars
var numCircles = 2000;
var maxRadius = 15;
var minRadius = 4;

// create Circle object constructor
function Circle (x, y, dx, dy, radius) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

// create function to draw the arc (circle)
  this.draw = function() {
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI*2, false); // Math.PI*2 = radian - 360 degree equivalent
    c.strokeStyle = 'black';
    c.stroke();
    // c.fill();
  }

// create function to stop circles from going off page
  this.update = function() {
    if (this.x + this.radius > canvas.width || this.x - this.radius < 0) {
      this.dx = -this.dx;
    }
    if (this.y + this.radius > canvas.height || this.y - this.radius < 0) {
      this.dy = -this.dy;
    }
    this.x += this.dx;
    this.y += this.dy;

    this.draw();
  }
}

// create array to hold all the cirles
var circleArray = [];

// create for loop to create the circles (x100)
for (var i=0; i<numCircles; i++) {

  // this sets the starting points to not be right on the edge so they don't get stuck
  var x = Math.random() * (canvas.width - radius * 2) + radius;
  var y = Math.random() * (canvas.height - radius * 2) + radius;
  var dx = (Math.random() - 0.5) * 7;
  var dy = (Math.random() - 0.5) * 7;
  var radius = minRadius+(Math.random()*(maxRadius-minRadius));
  circleArray.push(new Circle(x, y, dx, dy, radius));
}

// create function to clear the screen with every loop and animate
function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, canvas.width, canvas.height);

  for (i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
}

// call the animate function
animate();



// add rectangles
// c.fillStyle = 'red';
// c. fillRect(100, 100, 100, 100);
// c.fillStyle = 'green';
// c. fillRect(200, 200, 100, 100);
// c.fillStyle = 'blue';
// c. fillRect(300, 300, 100, 100);

// add lines
// c.beginPath();
// c.moveTo(50, 300);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = 'purple'
// c.stroke();

// add circles
// c.beginPath();
// c.arc(300, 300, 30, 0, Math.PI*2, false);
// c.strokeStyle = 'black'
// c.stroke();
