let introText = 'Hello, my name is Sophia Gruhl and this website ';

function preload() {
    breadImage = loadImage("https://sjg-portfolio-images.s3.amazonaws.com/IMG_3074.jpg");
    bananaBreadImage = loadImage("https://sjg-portfolio-images.s3.amazonaws.com/banana-bread.jpg");
}

function setup() {
  createCanvas(1000, 1000); 
  background(255,255,255);
  textSize(32);
  text(introText, 10, 30);
  fill(0, 102, 153, 51);
}

function draw() {
    
}

function keyPressed() {
  if (keyCode === 74) {
    
  } else if (keyCode === 76) {
    
  }
}

function mousePressed() {
    y = 90;
}
