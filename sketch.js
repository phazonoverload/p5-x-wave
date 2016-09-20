var canvasSize = 1000;
var lineSize;
var xOffset;

function setup() {
  createCanvas(canvasSize, canvasSize / 2);
  lineSize = height / 13;
  colorMode(HSB);
}

function draw() {
  background(30);

  translate(lineSize * 0.25, 0);

  for(var j = 0; j < 5; j++) {

    translate(0, lineSize * 2);

    var colorOffset = j * 2;

    for(var i = 0; i < 12; i++) {
      strokeWeight(i * 1);
      startHue = 295;
      stroke(startHue + (i * 2) + colorOffset, 100, 100);
      line((lineSize * i) * 2 + lineSize, 0, (lineSize * i) * 2, lineSize);
      line((lineSize * i) * 2 + lineSize, lineSize, (lineSize * i) * 2, 0);
    }

  }

}