// setup canvas

var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

// function to generate random number

function random(min,max) {
  var num = Math.floor(Math.random()*(max-min + 1)) + min;
  return num;
}

function Ball (x, y, velX, velY, color, size){
  //build a constructor
  this.x = x;
  this.y = y;
  this.velX = velX;
  this.velY = velY;
  this.color = color;
  this.size = size;
};

Ball.prototype.draw = function(){
  ctx.beginPath();
  ctx.fillStyle = this.color;
  ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI);
  ctx.fill();
};

Ball.prototype.update = function(){
  if (this.x + this.size > width) {
    this.velX = -(this.velX);
  };
  if (this.x - this.size < 0) {
    this.velX = -(this.velX);
  }
  if (this.y + this.size > height) {
    this.velY = -(this.velY);
  };

  if (this.y - this.size < 0) {
    this.velY = -(this.velY);
  };

  this.x += this.velX;
  this.y += this.velY;
}

let balls = [];

while(balls.length < 25) {
  let size = random(10, 20);
  let ball = new Ball(
    //X Position - At least one ball-size from the right/left edge of the screen.
    random(0 + size, width - size),

    //Y Position - At least one ball-size from the top/bottom of the screen.
    random(0 + size, height - size),

    //velX
    random(-7, 7),

    //velY
    random(-7,7),

    //color
    `rgb(${random(0, 255)}, ${random(0, 255)}, ${random(0, 255)})`,

    //size
    size
  );

  balls.push(ball);
}

function loop() {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  for (var i = 0; i < balls.length; i++) {
    balls[i].draw();
    balls[i].update();
  }

  requestAnimationFrame(loop2);
}



const loop2 = () => {
  ctx.fillStyle = 'rgba(0, 0, 0, 0.25)';
  ctx.fillRect(0, 0, width, height);

  balls.forEach(ball => {
    ball.draw();
    ball.update();
  })

  requestAnimationFrame(loop2);
}

loop();

const d = new Date()


function d2(){
  setTimeout(()=> {
    let newDate = new Date()
    console.log('newDate: ', newDate);
    return newDate;
  }, 5*1000)
};

console.log('d : ', d);
d2();