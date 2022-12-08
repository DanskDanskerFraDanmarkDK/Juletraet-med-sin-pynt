console.log("Js called");
var setup = function(){
    push();
    // base
    var width = 800;
    var height = 1000;
    var xMid = width / 2;
    var yMid = height / 2;
    createCanvas(width, height);
    drawBackground();
    drawTree(xMid, yMid + 50);
    drawGodJul(xMid, yMid + 50);

    // examples
    drawJulekugle(xMid - 150, yMid + 170);
    drawDannebrog(xMid + 100, yMid - 100);

    // call you own functions here
    drawTemplate(260, 780);
    pop();
};

var drawTree = function (centerX, centerY) {
    push();

    // stem
    fill(150, 100, 50);
    rect(centerX - 25, centerY + 275, 50, 75);

    // leaves
    var counter = 0;
    while (counter < 3){
        drawLevel(centerX, centerY, counter);
        counter++;
    } 

    pop();
};

var drawLevel = function(centerX, centerY, level) {
    push()
    fill(0, 153, 0);
    var slimSize = 20 * level;
    var baseWidth = 600;
    var baseHeight = 0.5 * baseWidth;
    var horizontalSpace = 80;
    var baseY = centerY + 280 - level * horizontalSpace;
    const halfWidth = baseWidth / 2 - slimSize;
    triangle(centerX - halfWidth, baseY, centerX, baseY - baseHeight, centerX + halfWidth, baseY);
    pop()
};

/**
 * Should draw a background the tree
 */
function drawBackground() {
    background('rgba(30%,30%,30%,1)')
};

var drawGodJul = function (centerX, centerY) {
    push();
    textSize(45);
    fill(255, 0, 0)
    text("God Jul VG", centerX - 110, centerY);
    pop();
};

var drawDannebrog = function (centerX, centerY) {
    push();
    var height = 56;
    var width = 75;
    fill(255, 0, 0);
    rect(centerX - width / 2, centerY - height / 2, width, height);
    noStroke();
    fill(255);
    rect(centerX - width / 2, centerY - 1 / 14 * height, width, height / 7);
    rect(centerX - width / 2 + 3 * height / 7, centerY - height / 2, height / 7, height);
    pop();
};

var drawJulekugle = function(centerX, centerY) {
    push();
    fill(174, 0, 255);
    rect(centerX - 11, centerY - 60, 20, 30);
    fill(255, 201, 0);
    ellipse(centerX, centerY, 75, 75);
    fill(255, 255, 255)
    ellipse(centerX, centerY, 25, 25)
    pop();
};

/**
 * Make a draw function here
 * It should be positioned to the parameters
 * Should contain at least one loop and one if statement
 * @param {number} centerX
 * @param {number} centerY
 */
var drawTemplate = function(centerX, centerY) {
    push();
    // You decorations
    pop();
};

console.log("JS finished.")
