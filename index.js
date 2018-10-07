
let brdSize = this.canvas.width;
let brdHeight = this.canvas.height;
let appleNumber = 1;
// let snakeSpeed = 150;
var snakeSpeed = 100;

// console.log(brdHeight);
// console.log(brdSize);
class Canvas {
        constructor(canvas, context) {
                this.canvas = canvas;
                this.context = context;

        }
        createCanvas(color, strokecolor) {
                this.canvas = document.getElementById('canvas');
                this.context = this.canvas.getContext('2d');
                this.color = color;

                this.context.beginPath();
                this.context.fillStyle = this.color || 'gray'
                this.context.fillRect(0, 0, brdSize, brdHeight);
                this.context.closePath();

                //      this.canvas.width = canvas.width
                //      this.canvas.height = canvas.height

                //      this.context.strokeStyle = strokecolor;
                //      this.context.strokeRect(0,0, this.canvas.width, this.canvas.height);
                //      document.body.appendChild(this.canvas);
        }
}


class Snake {
        constructor(snakeSize, bodyColor, outlineColor, startingPos) {
                this.snakeSize = snakeSize;
                this.bodyColor = bodyColor;
                this.outlineColor = outlineColor;
                this.array = [];
                this.direction = 'right';
                this.nd = ['right'];
                this.nx = 10;
                this.ny = 10;
                this.startingPos = startingPos;
        }
        create() {
                for (var i = this.snakeSize - 1; i >= 0; i--) {
                        this.array.push({ x: this.startingPos.x + i, y: this.startingPos.y })

                }

                //        console.log(this.array);
        };
        advanceSnake() {
                if (this.nd.length) {
                        this.direction = this.nd.shift();
                };
                this.nx = this.array[0].x;
                this.ny = this.array[0].y;


                var tail;


                switch (this.direction) {
                        case 'right':
                                this.nx++;
                                break;
                        case 'left':
                                this.nx--;
                                break;
                        case 'up':
                                this.ny--;
                                break;
                        case 'down':
                                this.ny++;
                                break;
                }
                if (this.outsideBorder() || this.colliding()) {
                      
                        game.over();
                    
                        return;

                }

                if (this.eatingFood()) {
                        game.score += 10;
                        console.log('hello');
                        tail = { x: this.nx, y: this.ny };

                        food.createCoords(1);
                        food.draw();


                } else {
                        var tail = this.array.pop();

                        tail.x = this.nx;
                        tail.y = this.ny;
                }



                this.array.unshift(tail);
                this.paint();

        }
        outsideBorder() {
                if (this.nx <= -1 || this.nx === brdSize / 10 || this.ny <= -1 || this.ny === brdHeight / 10) {
                        return true;
                }
                return false;
        }
        colliding(x,y){
                x = x || this.nx,
		y = y || this.ny;
	for(var i = 0; i < this.array.length; i++) {
		if(this.array[i].x === x && this.array[i].y === y) {
			
			return true;
		}
	}
	return false;
        }
        eatingFood() {
                for (let i = 0; i < food.apple.length; i++) {
                        if (this.nx == food.apple[i].x && this.ny == food.apple[i].y) {
                                food.apple.splice(i, 1);
                                return true;
                        }
                }
                return false;
        }
        paint(x, y) {
                for (var i = 0; i < this.array.length; i++) {
                        let x = this.array[i].x
                        let y = this.array[i].y

                        canvas.context.fillStyle = 'blue';
                        canvas.context.fillRect(x * this.snakeSize, y * this.snakeSize, 10, 10);
                        canvas.context.strokeStyle = 'darkgreen';
                        canvas.context.strokeRect(x * this.snakeSize, y * this.snakeSize, 10, 10);
                }
        }

}

class Food {
        constructor() {
                this.apple = [];

        }
        createCoords(apples) {
                for (let i = 0; i < apples; i++) {
                        this.apple.push({
                                x: Math.round(Math.random() * (brdSize - 10) / 10),
                                y: Math.round(Math.random() * (brdSize - 10) / 10)
                                
                        })


                }

        }

        draw() {
                for (let i = 0; i < this.apple.length; i++) {
                        var x = this.apple[i].x
                        var y = this.apple[i].y
                        canvas.context.beginPath();
                        canvas.context.fillStyle = "red"
                        canvas.context.fillRect(x * 10, y * 10, 10, 10);
                        canvas.context.strokeStyle = 'white'
                        canvas.context.strokeRect(x * 10, y * 10, 10, 10);
                        canvas.context.closePath();
                }

        }

}


let canvas = new Canvas();
canvas.createCanvas();


mainSnake = new Snake(10, 'red', 'blue', { x: 5, y: 3 });
mainSnake.create();


let food = new Food();
food.createCoords(appleNumber);



var game = new Object();
game.score = 0;
game.scoreText = ' Score : '
game.drawScore = function () {
        canvas.context.font = '15px Arial';
        canvas.context.fillText(`Score is ${game.score}`, 30, 30);
};

game.drawHighScoreText = 'Highscore '
game.drawHighscore = function () {
        canvas.context.font = '15px Georgia';
        canvas.context.fillText(`Highscore is ${localStorage.getItem('highscore')}`, 400, 30);
};


setSnakeSpeed = function (speed_value) {
        snakeSpeed = parseInt(speed_value);
}

game.runLoop = function () {
        on = setInterval(function () {
                canvas.createCanvas();
                game.start();
                mainSnake.advanceSnake();
                food.draw();
                game.drawScore();
                game.drawHighscore();
        }, snakeSpeed);
        console.log(`runloop - ${snakeSpeed}`)
};

game.start = function () {
        mainSnake.paint();
        mainSnake.eatingFood();
};

let anotherStart = function () {
        console.log(`SnakeSpeed is - ${snakeSpeed}`)
        myStopFunction();
        showScreen(1);
        mainSnake = new Snake(10, 'red', 'yellow', { x: 5, y: 3 });
        food = new Food();
        food.createCoords(appleNumber);
        mainSnake.create();
        canvas.createCanvas();
        game.start();
        game.runLoop();
}

function myStopFunction() {
        clearInterval(on);
}



game.over = function () {

        if (localStorage.getItem('highscore' === null)) {
                localStorage.setItem('highscore', game.score)
        } else if (game.score > localStorage.getItem('highscore')) {
                localStorage.setItem('highscore', game.score);
        }
        // console.log('lost')
        game.drawHighscore();

        canvas.createCanvas('darkyellow');
        myStopFunction();
        game.score = 0;
        showScreen(2);

}

let newGame = function () {
        showScreen(1);
        canvas.createCanvas();
        game.start();
        game.runLoop();
}

let showScreen = function (screen) {
        switch (screen) {
                case 0:
                        screen_snake.style.display = 'none';
                        screen_menu.style.display = 'block';
                        screen_gameover.style.display = 'none';
                        // screen_settings.style.display = 'none';
                        break;
                case 1:
                        screen_snake.style.display = 'block';
                        screen_menu.style.display = 'none';
                        screen_gameover.style.display = 'none';
                        // screen_settings.style.display = 'none';
                        break;
                case 2:
                        screen_snake.style.display = 'none';
                        screen_menu.style.display = 'none';
                        screen_gameover.style.display = 'block';
                        // screen_settings.style.display = 'none';
                        break;
        //         case 3: 
        //                 screen_snake.style.display = 'none';
        //                 screen_menu.style.display = 'none';
        //                 screen_gameover.style.display = 'none';
        //                 screen_settings.style.display = 'block'
        //                 break;
        }
}

window.onload = function () {
        //screens 
        screen_snake = document.getElementById('canvas');
        screen_menu = document.getElementById('menu');
        screen_gameover = document.getElementById('gameover');
        // screen_settings = document.getElementById('settings');
      

        // Buttons
        button_newgame_menu = document.getElementById('newgame_menu');
        // button_newgame_setting = document.getElementById('setting_menu');
        button_newgame_gameover = document.getElementById('newgame_gameover');
        // button_setting_gameover = document.getElementById('setting_gameover');
        // button_setting_newgame = document.getElementById('newgame_setting');


        button_newgame_menu.onclick = function () { anotherStart(); };
        button_newgame_gameover.onclick = function () { anotherStart(); }
        // button_newgame_setting.onclick = function(){ showScreen(3); }
        // button_setting_newgame.onclick = function(){ anotherStart();}
        // button_setting_gameover.onclick = function(){showScreen(3)};
        myStopFunction();
}


speed_setting = document.getElementsByName("speed");

for (let i = 0; i < speed_setting.length; i++) {
        speed_setting[i].addEventListener("click", function ({ target}) {
               if( target.checked ){
                       snakeSpeed = parseInt(target.value);
               }
               console.log(`SnakeSpeed ${snakeSpeed}`)
        });
}


apple_setting = document.getElementsByName('applenumber');
for(let i = 0; i < apple_setting.length; i++){
       apple_setting[i].addEventListener('input', function ({ target}) {
       appleNumber = parseInt(target.value);
       console.log(`applenumber ${appleNumber}`);
       })
}


game.start();
game.runLoop();


document.onkeydown = function (e) {
        // Cross browser keycode detection
        var key = e.keyCode;
        var td;
        if (mainSnake.nd.length) {
                td = mainSnake.nd[mainSnake.nd.length - 1];
        } else {
                td = mainSnake.direction;
        }
        if (key == "37" && td != 'right') {
                mainSnake.nd.push('left');
        } else if (key == "38" && td != 'down') {
                mainSnake.nd.push('up');
        } else if (key == "39" && td != 'left') {
                mainSnake.nd.push('right');
        } else if (key == "40" && td != 'up') {
                mainSnake.nd.push('down');
        }

}