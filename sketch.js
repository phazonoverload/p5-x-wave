var canvasSize = 1000;
var armyOfExes = [];
var stepLtr = 0;
var stepRtl = 20;

function setup() {
  createCanvas(canvasSize, canvasSize / 2);
  colorMode(HSB);
  patientX = new XShape();
  for(var i = 0; i < canvasSize + (canvasSize * 2); i++) {
    armyOfExes[i] = new XShape(i);
  }
}

function stepCounter() {
  if(stepLtr > 20) { 
    stepLtr = 0; 
  }
  stepLtr++;
  noFill();
  textSize(10);
}

function XShape(soliderId) {
  this.weight = 0; 
  this.color = 200;
  this.shapeSize = height / 10;
  this.x = 0;
  this.y = 0;
  this.xPos = 0;
  this.yPos = 0;

  this.changeXPos = function() {
    this.xPos = soliderId % (width / this.shapeSize);
    this.x = this.xPos * this.shapeSize;
    if(soliderId % (width / this.shapeSize) == 0) {
      this.x = 0;
    }
  }

  this.changeYPos = function() {
    this.yPos = parseInt(soliderId / (height / this.shapeSize) / 2);
    this.y = this.yPos * this.shapeSize;
  }

  this.distance = function() {
    currentStep = stepLtr % (canvasSize / this.shapeSize);
    distance = abs(this.xPos - currentStep);
    distance %= (canvasSize / this.shapeSize);
    if (distance > (canvasSize / this.shapeSize) / 2) {      
      distance = (canvasSize / this.shapeSize) - distance;
    }
    return distance;
  }

  this.changeColor = function() {
    this.color = this.distance() * 2;
  }

  this.changeStroke = function() {
    this.weight = this.distance() / 2;
  }

  this.display = function() {
    strokeWeight(this.weight);
    stroke(this.color, 100, 100);
    line(this.x, this.y, this.x + this.shapeSize, this.y + this.shapeSize); // Top left to bottom right
    line(this.x, this.y + this.shapeSize, this.x + this.shapeSize, this.y); // Bottom left to top right
  }
}

function draw() {
  background(30);
  textSize(30);
  stepCounter();
  for(var i = 0; i < armyOfExes.length; i++) {
    armyOfExes[i].display();
    armyOfExes[i].changeXPos();
    armyOfExes[i].changeYPos();
    armyOfExes[i].changeColor();
    armyOfExes[i].changeStroke();
  }      
}