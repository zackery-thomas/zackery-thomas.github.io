var runLevels = function (window) {
  window.opspark = window.opspark || {};

  var draw = window.opspark.draw;
  var createjs = window.createjs;
  let currentLevel = 0;

  window.opspark.runLevelInGame = function (game) {
    // some useful constants
    var groundY = game.groundY;

    // this data will allow us to define all of the
    // behavior of our game
    var levelData = window.opspark.levelData;

    // set this to true or false depending on if you want to see hitzones
    game.setDebugMode(true);

    // TODOs 5 through 11 go here
    // BEGIN EDITING YOUR CODE HERE
  function createsawblade(x, y){
    var hitZoneSize = 25;
    var damageFromObstacle = 10;
    var sawBladeHitZone = game.createObstacle(hitZoneSize, damageFromObstacle);
    sawBladeHitZone.x = x;
    sawBladeHitZone.y = y;
    game.addGameItem(sawBladeHitZone);
    var obstacleImage = draw.bitmap("img/sawblade.png");
    sawBladeHitZone.addChild(obstacleImage);
    obstacleImage.x = -25;
    obstacleImage.y = -25;
  }
  createsawblade(500, 385);
  createsawblade(800, 300);
  createsawblade(1000, 400);

  

function createEnemy(x,y) {
var enemy = game.createGameItem("enemy", 25);
var redSquare = draw.rect(50, 50, "red");
redSquare.x = -25;
redSquare.y = -25;
enemy.addChild(redSquare);
enemy.x = x;
enemy.y = y;
game.addGameItem(enemy);
enemy.velocityX = -0.75;
enemy.rotationalVelocity = 3;
enemy.onPlayerCollision = function () {
  game.changeIntegrity(-10)
  enemy.shrink();
}
}
createEnemy(670, 298);
createEnemy(400,400);
createEnemy(400, groundY - 10);
createEnemy(800, groundY - 100);
createEnemy(1200, groundY - 50);

function createReward(x,y) {
var reward = game.createGameItem("reward",25)
var greenSquare = draw.rect(50, 50, "green");
greenSquare.x = -25;
greenSquare.y = -25;
reward.addChild(greenSquare);
reward.x = x;
reward.y = y;
game.addGameItem(reward);
reward.velocityX = -0.5; 
reward.rotationalVelocity = 3;
reward.onPlayerCollision = function () {
game.increaseScore(100)
reward.shrink()
}
}
createReward(500,380)

function createMarker(x,y) {
  var marker = game.createGameItem("marker", 50);
  var line = draw.bitmap("img/line-symbol_2000x2000.png");
  line.x = -100;
  line.y = -100;
  marker.addChild(line);
  
  marker.x = x;
  marker.y = y;
  game.addGameItem(marker);
  marker.velocityX = -3;

  marker.onPlayerCollision = function() {
      game.startLevel()
  };
  marker.onProjectileCollision = function () {
      game.startLevel()
      marker.shrink();
  }
}

createMarker(2750,groundY-650)


    function startLevel() {
      // TODO 13 goes below here



      //////////////////////////////////////////////
      // DO NOT EDIT CODE BELOW HERE
      //////////////////////////////////////////////
      if (++currentLevel === levelData.length) {
        startLevel = () => {
          console.log("Congratulations!");
        };
      }
    }
    startLevel();
  };
};

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if (
  typeof process !== "undefined" &&
  typeof process.versions.node !== "undefined"
) {
  // here, export any references you need for tests //
  module.exports = runLevels;
}