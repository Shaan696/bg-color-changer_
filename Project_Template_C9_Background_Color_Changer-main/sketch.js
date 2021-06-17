var btn_red;
var btn_green;

var r = 0;
var g = 0;
var b = 0;

function setup() {
  createCanvas(600, 600);  
}

var btn_red = createButton(200,200);

function draw() {
  background(r,g,b);

  function red(){
    r = 255
    g = 0
    b = 0
  }

  function green(){
    r = 0
    g = 255
    b = 0
  }

  btn_red = createButton("Red");
  btn_red.position(200,300);
  btn_red.mousePressed(red);

  btn_green = createButton("Green");
  btn_green.position(400,300);
  btn_green.mousePressed(green);
}
