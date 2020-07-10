/*
  Code modified from:
  http://www.lostdecadegames.com/how-to-make-a-simple-html5-canvas-game/
  using graphics purchased from vectorstock.com
*/

/* Initialization.
Here, we create and add our "canvas" to the page.
We also load all of our images. 
*/


let canvas;
let ctx;



canvas = document.createElement("canvas");
ctx = canvas.getContext("2d");
canvas.width = 512;
canvas.height = 480;
document.body.appendChild(canvas);
let heroX = canvas.width / 2;
let heroY = canvas.height / 2;

// implementation variables
let bgReady, heroReady;
let monsterReady, monsterReady2, monsterReady3;
let monsterCollection = [monsterReady, monsterReady2, monsterReady3]
let bgImage, heroImage;
let monsterImage, monsterImage2;
let startTime = Date.now();
const SECONDS_PER_ROUND = 30;
let elapsedTime = 0;

var sprites = [];


// score
let highScsore = [];
let score = 0;

// bullet
// implemation
let bulletImage, bulletReady
let bullet = {
  'img': bulletImage,
  'ready': bulletReady,
}

// implementation bullet speed
let speedX = []
let speedY = []

// implementation bullet position
var bulletX = []
let bulletY = []

//treeImage
let treeImage, treeReady
let tree = {
  'img': treeImage,
  'ready': treeReady,
}

//direction
let direction = "up"

// moving animation
function dragonGoUp() {
  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image
    heroReady = true;
  };
  heroImage.src = "images/dragon-up.png";
}

function dragonGoDown() {
  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image
    heroReady = true;
  };
  heroImage.src = "images/dragon-down.png";
}

function dragonGoLeft() {
  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image
    heroReady = true;
  };
  heroImage.src = "images/dragon-left.png";
}

function dragonGoRight() {
  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image
    heroReady = true;
  };
  heroImage.src = "images/dragon-right.png";
}


function loadImages() {
  bgImage = new Image();
  bgImage.onload = function () {
    // show the background image
    bgReady = true;
  };

  bgImage.src = "images/background.png";

  heroImage = new Image();
  heroImage.onload = function () {
    // show the hero image
    heroReady = true;
  };
  heroImage.src = "images/dragon-down.png";

  // tree 


  tree['img'] = new Image();
  tree['img'].onload = function () {
    // show the hero image
    tree['ready'] = true;
  };
  tree['img'].src = "images/tree.png";


  monsterImage = new Image();
  monsterImage.onload = function () {
    // show the monster image
    monsterCollection[0] = true;
  };
  monsterImage.src = "images/monster.png";

  monsterImage2 = new Image();
  monsterImage2.onload = function () {
    // show the monster image
    monsterCollection[1] = true;
  };
  monsterImage2.src = "images/monster.png";

}


/**************** 
// bullet, shoot
****************/
function shoot() {
  // if (speedX[0] != 0 || speedY[0] != 0) {
  //   return
  // }

  //create bullet
  bullet['img'] = new Image();
  bullet['img'].onload = function () {
    // show the monster image
    bullet['ready'] = true;
  };
  bullet['img'].src = "images/fire-bullet.png";
  // console.log("ddd")

  // bullet position 
  bulletX.push(heroX + 10);
  bulletY.push(heroY + 1);
  console.log("X ", bulletX);
  console.log("Y ", bulletY);
  console.log(heroX);
  console.log(heroY);
  // console.log(bulletY)

  //let bullet fly

  if (direction === 'up') {
    speedY.push(-5)
  } else if (direction === 'down') {
    speedY.push(5)
  } else if (direction === 'left') {
    speedX.push(-5)
  } else if (direction === 'right') {
    speedX.push(5)
  }
}

function movingBullet() {
  // if()
  // console.log(bulletX);

  for (let i = 0; i < bulletX.length; i++) {
    if (bulletY[i] < 0 || bulletY[i] > canvas.height || bulletX[i] < 0 || bulletX[i] > canvas.width) {
      speedX[i] = 0
      speedY[i] = 0
    } else {
      bulletY[i] += speedY[i]
      bulletX[i] += speedX[i]
    }
  }


}


/** 
 * Setting up our characters.
 * 
 * Note that heroX represents the X position of our hero.
 * heroY represents the Y position.
 * We'll need these values to know where to "draw" the hero.
 * 
 * The same applies to the monster.
 */


let monsterX = 100;
let monsterY = 100;

let monster2X = 200;
let monster2Y = 200;


let treeX = 100;
let treeY = 100;
/** 
 * Keyboard Listeners
 * You can safely ignore this part, for now. 
 * 
 * This is just to let JavaScript know when the user has pressed a key.
*/
let keysDown = {};
function setupKeyboardListeners() {
  // Check for keys pressed where key represents the keycode captured
  // For now, do not worry too much about what's happening here. 
  addEventListener("keydown", function (key) {
    keysDown[key.keyCode] = true;
  }, false);

  addEventListener("keyup", function (key) {
    delete keysDown[key.keyCode];
  }, false);
}



/**
 *  Update game objects - change player position based on key pressed
 *  and check to see if the monster has been caught!
 *  
 *  If you change the value of 5, the player will move at a different rate.
 */
function naughtyMonster() {
  monsterX += 1;
  monster2X += 5;
}

let lockBulletDirection = false

// update here
let update = function () {

  if (SECONDS_PER_ROUND - elapsedTime <= 0) {
    return
  }
  // Update the time.
  elapsedTime = Math.floor((Date.now() - startTime) / 1000);

  // bulletX += 5


  movingBullet()

  // updatekeydown
  if (38 in keysDown) { // Player is holding up key
    heroY -= 5;


    dragonGoUp()
    direction = "up"
  }
  if (40 in keysDown) { // Player is holding down key
    dragonGoDown()
    heroY += 5;
    direction = "down"
  }
  if (37 in keysDown) { // Player is holding left key
    dragonGoLeft()
    heroX -= 5;
    direction = "left"
  }
  if (39 in keysDown) { // Player is holding right key
    dragonGoRight()
    heroX += 5;
    direction = "right"
  }

  // if (32 in keysDown) {
  //   shoot();

  // }
  if (17 in keysDown) {
    heroX -= 30.
  }



  // Check if player and monster collided. Our images
  // are about 32 pixels big.
  if (
    bulletX <= (monsterX + 32)
    && monsterX <= (bulletX + 32)
    && bulletY <= (monsterY + 32)
    && monsterY <= (bulletY + 32)

  ) {
    // Pick a new location for the monster.
    // Note: Change this to place the monster at a new, random location.
    monsterX = Math.round(Math.random() * canvas.width);
    monsterY = Math.round(Math.random() * canvas.height);

  }

  //limitation for heroes and monstser position
  //heroes position
  if (heroX > canvas.width - 32) {
    heroX = 0;
  }

  if (heroX < 0) {
    heroX = canvas.width - 32;
  }

  if (heroY > canvas.height - 32) {
    heroY = 0;
  }

  if (heroY < 0) {
    heroY = canvas.height - 32
  }

  // monster positions
  if (monsterX > canvas.width - 32) {
    monsterX = 0;
  }

  if (monsterX < 0) {
    monsterX = canvas.width - 32;
  }

  if (monsterY > canvas.height - 32) {
    monsterY = 0;
  }

  if (monsterY < 0) {
    monsterY = canvas.height - 32
  }



};

/**
 * This function, render, runs as often as possible.
 */
var render = function () {
  if (bgReady) {
    ctx.drawImage(bgImage, 0, 0);
  }
  if (heroReady) {
    ctx.drawImage(heroImage, heroX, heroY);
  }
  if (monsterCollection[0]) {
    ctx.drawImage(monsterImage, monsterX, monsterY);
  }
  if (monsterCollection[1]) {
    ctx.drawImage(monsterImage2, monster2X, monster2Y);
  }
  if (tree['ready']) {
    ctx.drawImage(tree['img'], treeX, treeY);
  }



  if (bullet['ready']) {
    ctx.drawImage(bullet['img'], bulletX, bulletY);
  }

  // TIMEOUT-ENDGAME
  if (SECONDS_PER_ROUND - elapsedTime <= 0) {

    // setting highscore
    if (score >= highScsore[highScsore.length]) {
      highScsore.push[score]
    }

    ctx.fillText(`Time out`, 50, 100);
  } else {
    ctx.fillText(`Seconds Remaining: ${SECONDS_PER_ROUND - elapsedTime}`, 20, 100);
  }



  ctx.fillText(`Score: ${score}`, 30, 300);


};


// highscore


/**
 * The main game loop. Most every game will have two distinct parts:
 * update (updates the state of the game, in this case our hero and monster)
 * render (based on the state of our game, draw the right things)
 */
var main = function () {
  update();
  render();
  // Request to do this again ASAP. This is a special method
  // for web browsers. 
  requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame.
// Safely ignore this line. It's mostly here for people with old web browsers.
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
loadImages();
setupKeyboardListeners();
main();

document.addEventListener('keydown', function (event) {
  if (event.keyCode == 32) {
    shoot();
  }
});