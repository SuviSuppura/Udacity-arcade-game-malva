// Enemies our player must avoid
// properties image, position x and y, speed how fast the enemy is going accross the board
var Enemy = function(x,y,s) {
  this.sprite = 'images/enemy-bug.png';
  this.x = x;
  this.y = y;
  this.speed = s;
    // Variables applied to each of our instances go here,
    // we've provided one for you to get started
    // The image/sprite for our enemies, this uses
    // a helper we've provided to easily load images
  };
// Update the enemy's position, required method for game
// Parameter: dt, a time delta between ticks
Enemy.prototype.update = function(dt) {
    // You should multiply any movement by the dt parameter
    // which will ensure the game runs at the same speed for
    // all computers.
// defines a random speed for the enemy
    this.x += this.speed * dt;
    if (this.x > 510) {
      this.x = -50;
      var someSpeed = Math.floor(Math.random() * 4 + 1);
      this.speed = 60 * someSpeed;
    }
// if the enemy and player have a collision then set the player to the start position
    var enemyXleftMax = this.x - 65;
    var enemyXrightMax = this.x + 65;
    var enemyYtopMax = this.y - 65;
    var enemyYbottomMax = this.y + 65;
    if(player.x > enemyXleftMax && player.x < enemyXrightMax && player.y > enemyYtopMax && player.y < enemyYbottomMax) {
      player.x = 200;
      player.y = 420;
    }

};

// Draw the enemy on the screen, required method for game
Enemy.prototype.render = function() {
    ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// Now write your own player class
// This class requires an update(), render() and
// a handleInput() method.
// properties image, position x and y
var Player = function(x,y) {
  this.sprite = 'images/char-boy.png';
  this.x = 200;
  this.y = 420;
  };

Player.prototype.update = function() {
  if (this.x > 1) {
      this.x = this.x;
      this.y = this.y;
    }
    if (this.y <= 2) {
      window.alert("You won!"); //alert you won is shown when the player reaches the top
      this.x = 200;
      this.y = 420;
    }
};

Player.prototype.render = function() {
  ctx.drawImage(Resources.get(this.sprite), this.x, this.y);
};
// defines the player movement lenght according the arrow keys on a keyboard
  Player.prototype.handleInput = function(dt) {
      switch (dt) {
          case "up":
            if (this.y > 2) {
              this.y -= 50;
            }
             break;
          case "down":
            if (this.y < 400) {
              this.y += 50;
            }
            break;
          case "left":
            if (this.x > 1) {
              this.x -= 50;
            }
             break;
          case "right":
            if (this.x < 400) {
              this.x += 50;
            }
             break;
        }
};



// Now instantiate your objects.
// Place all enemy objects in an array called allEnemies
var allEnemies = [new Enemy (-200, 65, 60), new Enemy (-150, 145, 60), new Enemy (-100, 230, 60)];
// Place the player object in a variable called player
var player = new Player;



// This listens for key presses and sends the keys to your
// Player.handleInput() method. You don't need to modify this.
document.addEventListener('keyup', function(e) {
    var allowedKeys = {
        37: 'left',
        38: 'up',
        39: 'right',
        40: 'down'
    };

    player.handleInput(allowedKeys[e.keyCode]);
});
