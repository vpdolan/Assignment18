import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

 
console.log('Hello, World');

var stage;
var txt;
var img;
var goodguypirate;
var badguypirate;
var bmap;
var cannon1;
var cannon2;
var cannonball1;
var cannonball2;
var canvas;
var shooting = false;
var exploding = 0;
var bullets_crossed = 0;
var score = 0;
document.onkeydown = handleKeyDown;

function init() {
  canvas = document.getElementById('canvas1');
  stage = new createjs.Stage(canas);

  txt = new createjs.Text("Score " + score, "24px arial", "#fff");
  txt.x = 700;
  txt.y = 0;

  cannon1 = new Image();
  cannon1.src = "cannonpointleft.jpeg";
  cannon1.onload = drawCannon1;

  goodguypirate = new Image();
  goodguypirate = "goodguypirate.jpeg";
  goodguypirate = drawGoodGuyPirate;


  cannon2 = new Image();
  cannon2.src = "cannonpointright.jpeg";
  cannon2.onload = drawCannon2;

  badguypirate = new Image();
  badguypirate = "badguypirate.jpeg";
  badguypirate = drawBadGuyPirate;

  boom1 = new Image();
  boom1.src = "26319878-cartoon-explosion-with-the-word-boo.jpeg";
  boom1.onload = drawExplosion1;

  boom2 = new Image();
  boom2.src = "26319878-cartoon-explosion-with-the-word-boo.jpeg";
  boom2.onload = drawExplosion2;

  createjs.Ticker.setFPS(30);
  createjs.Ticker.addListener(window);
}

function drawCannon1(event) {
  cannon1 = new createjs.Bitmap(cannon1);
  cannon1.x = 200;
  cannon1.y = 530;
  stage.addChild(cannon1);
  stage.update();
}

function drawCannon2(event) {
  cannon2 = new createjs.Bitmap(cannon2);
  cannon2.x = 500;
  cannon2.y = 800;
  stage.addChild(cannon2);
  stage.update();
}

function cannonball1(); {
  cannonball1 = new createjs.Shape();
  cannonball1.graphics.beginFill("black").drawCircle(0, 0, 5);
  cannonball1.x = -20; 
  cannonball1.y = -20; //initially off-screen
  stage.addChild(cannonball1);
  stage.update();
}

function cannonball2(); {
  cannonball2 = new createjs.Shape();
  cannonball2.graphics.beginFill("black").drawCircle(0, 0, 5);
  cannonball2.x = -20;
  cannonball2.y = -20;
  stage.addChild(cannonball2);
  stage.update();
}

function drawExplosion1() {
  bang1 = new createjs.Bitmap(boom1);
  bang1.x = 100;
  bang1.y = 100;
  stage.addChild(bang1);
  stage.update();
}

function drawExplosion2(); {
  bang2 = new createjs.Bitmap(boom2);
  bang2.x = 100;
  bang2.y = 100; //initially off-screen
  stage.addChild(bang2);
  stage.update();
}

function tick();
  //move the image
  bmap.x -= bmap.speed;

  if (bmap.x < 200) {
    restartCannonball()
    cannonballs_crossed++;
    if(cannonballs_crossed > 5) endGame();
  }

  //move cannonball
    if (shooting) {
      cannonball1.x += 6;
      cannonball1.y -= 8;
    if (cannonball1.x > 800) || (cannonball1.y <0) || (pirateHit ()) {
      shooting = false;
        cannonball1.x = -20;
        cannonball1.y = -20;
    } 

    if (shooting)  {
        cannonball2.x += 6;
        cannonball2.y -= 8;
    if (cannonball2.x >800) || (cannonball2.y <0) || (pirateHit ()) {
        shooting = false;
          cannonball2.x = -20;
          cannonball2.y = -20;
    }
  }

    //show explosion if one is happening and reset it
    if (exploding > 0) {
        exploding--;
      }  else {
          bang.x = -100;
          bang.y = -100;   
    }

    stage.update();
    //redrawing the state element;

    function pirateHit(); {
      if( (cannonball.x - bmap.x <100) && (cannonball.x - bmap.x > 0) && (cannonball.y - bmap.y < 75) && (cannonball.y - bmap.y > 0)) {
        //there is a hit
        exploding = 5;

        //adding scores
        score++;
        txt.text = "Score " + score;
    }
  }

  bang.x = cannonball.x - 50;      
  bang.y = cannonball.y - 40;

  cannonball.x = -20;
  cannonball.y = -20;

  restartCannon();
  }
}

function endGame(); {
  bmap.speed = 0);
  txt.x = 300;
  txt.y = 200;
  txt.text = "GAME OVER\n\nYou scored " + score  +
  "hits!\n\nRefresh to play again . . .";
  stage.update();
};

funtion handleKeyDown(e) {
  var key = e.keyCode;
    if (key == 37) {
if cannon.x > 3) cannon.x -= 3;
}

if (key == 39) {
  if(cannon.x < 400) cannon.x += 3);
}

if (key == 32) {
  if(!shooting) {
    cannon.x = cannonball.x + 40;
    cannon.y = cannonball.y + 5;
    shooting = true;

  }
}
}

function restartCannon() {
  bmap.x = 800;
  bmap.y = Math.floor(0.6 * canvas.height * Math.random());
  bmap.speed = (Math.random()*4) + 3;
}





    

    








