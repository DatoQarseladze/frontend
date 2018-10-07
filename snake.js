var canvas = new Object();
var mainSnake;
var food;
let stop = false;
let frameCount = 0;
let fps,fpsInterval, startTime, now,then, elapsed;

canvas.element = document.getElementById('canvas');
canvas.context = canvas.element.getContext('2d');
canvas.width = canvas.element.getAttribute('width');
canvas.height = canvas.element.getAttribute('height');
canvas.cellWidth = 10;

canvas.redraw = function(fillColour,strokeColour){
       fillColour = fillColour || 'white',
       strokeColour = strokeColour || 'black';

this.paint(0, 0,fillColour,strokeColour, this.width, this.height);     
}

canvas.paint = function(x, y, fillColour, strokeColour, width, height) {
        width = width || this.cellWidth,
		height = height || this.cellWidth,
		fillColour = fillColour || 'red',
		strokeColour = strokeColour || 'black';

	this.context.fillStyle = fillColour;
	this.context.fillRect(x*canvas.cellWidth, y*canvas.cellWidth, width, height);
	this.context.strokeStyle = strokeColour;
	this.context.strokeRect(x*canvas.cellWidth, y*canvas.cellWidth, width, height);
};

canvas.paintText = function(text, x, y) {
	var x = x || 5,
		y = y || 15;
	this.context.fillText(text, x, y);
};

canvas.redraw();

class Snake{
    constructor(snakeSize, bodyColour, outlineColour, startingPos){
     this.snakeSize = snakeSize;
     this.bodyColour = bodyColour;
     this.outlineColour = outlineColour;
     this.array = [];
     this.direction = 'right';
     this.nd = [];
     this.nx;
     this.ny;

     var startingPos = startingPos;
     this.create = function(){
      for(let i = snakeSize; i > 0; i--){
         this.array.push({x: startingPos.x + i, y: startingPos.y} )
      }
    }
    this.create();
    console.log(this.array);
    }
    

}



Snake.prototype.move = function(){
    if(this.nd.length){
        this.direction = this.nd.shift();
    }

    this.nx = this.array[0].x;
    this.ny = this.array[0].y;
    let head;

    switch(this.direction){
        case 'right': 
        this.nx++;
        break;
        case 'left':
        this.nx--;
        break;
        case 'up':
        this.ny --;
        break;
        case 'down':
        this.ny++;
        break;
    }
    
    // if(this.outsideBounds() || this.colliding()) {
	// 	game.over();
	// 	return;
	// }

    // if(this.eatingFood()) {
	// 	game.score++;
	// 	head = {x: this.nx, y: this.ny};
	// 	food = new Food();
	// } else {
	// 	let head = this.array.pop();
	// 	head.x = this.nx;
	// 	head.y = this.ny;
    // }
    
    this.array.unshift(head);


    this.paint();
}

Snake.prototype.paint = function() {
	canvas.redraw();
	for(var i = 0; i < this.array.length; i++) {
		// The current snake body element
         var j = this.array[i];
		canvas.paint(j.x, this.array[i].y, this.bodyColour, this.outlineColour);
	}
}


// Snake.prototype.outsideBounds = function() {
// 	if(this.nx <= -1 || this.nx === canvas.width/canvas.cellWidth || this.ny <= -1 || this.ny === canvas.height/canvas.cellWidth) {
// 		return true;
// 	}
// 	return false;
// }

// Snake.prototype.eatingFood = function(){
//     if(this.nx === food.x && this.ny === food.y){
//         return true;
//     }
//     return false;
// }

// Snake.prototype.colliding = function(x,y){
//     x = x 
//     y = y 
//     for(let i = 0; i < this.array.length; i++){
//         if(this.array[i].x === x && this.array[i].y === y){
//             return true;
//         }
//         return false;
//     }    
// }

function Food(){
    this.generateCoord = function(){
        this.x = Math.round(Math.random() * (canvas.width/canvas.cellWidth)/canvas.cellWidth);
        this.y = Math.round(Math.random() * (canvas.height/canvas.cellWidth)/canvas.cellWidth);
// debugger;
        //      this.checkCollision();
    }
//     this.checkCollision = function(){
//         if(mainSnake.colliding(this.x,this.y)){
//            generateCoord();
//         }
    this.draw = function(){
        canvas.paint(this.x, this.y, 'seagreen');
    }
    // }

    this.generateCoord();
// 	this.checkCollision();
	this.draw();
}

let game = new Object();

// game.fps = 20;
game.runLoop = function(){
	setTimeout(function() {
        mainSnake.move();
//         requestAnimationFrame(game.runLoop);
       
//         if(typeof food.draw != 'undefined') {
// 			food.draw();
// 		}
    }, 100);
};

game.start = function(){
    mainSnake = new Snake(10, 'red', 'blue', {x:5, y:5});
    mainSnake.paint();
    food = new Food();
   
}


game.start();
game.runLoop();


document.onkeydown = function(e) {

    // Cross browser keycode detection
    var key = (e.keyCode ? e.keyCode : e.which);
    var td;
    if (mainSnake.nd.length) {
        td = mainSnake.nd[mainSnake.nd.length - 1];
    } else {
        td = mainSnake.direction;
    }
    if(key == "37" && td != 'right') {
        mainSnake.nd.push('left');
    } else if(key == "38" && td != 'down') {
        mainSnake.nd.push('up');
    } else if(key == "39" && td != 'left') {
        mainSnake.nd.push('right');
    } else if(key == "40" && td != 'up') {
        mainSnake.nd.push('down');
    }

}