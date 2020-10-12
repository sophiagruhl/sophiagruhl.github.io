let introText = 'Hello, my name is Sophia Gruhl and this website ';
let bucketNameUrl = 'https://sjg-portfolio-images.s3.amazonaws.com';

function preload() {
    breadImage = loadImage(bucketNameUrl + "/IMG_3074.jpg");
    bananaBreadImage = loadImage(bucketNameUrl + "/banana-bread.jpg");
    breadEarlyImage = loadImage(bucketNameUrl + "/bread-early.jpg");
    coneCakeImage = loadImage(bucketNameUrl + "/cone-cake.jpg");
    cupcakesImage = loadImage(bucketNameUrl + "/cupcakes.jpg");
    logCakeImage = loadImage(bucketNameUrl + "/log-cake.jpg")
    strawberryCakeGradientImage = loadImage(bucketNameUrl + "/strawberry-cake-gradient.jpg");
    
}

function setup() {
  createCanvas(1100, 1100); 
  background(255,255,255);
  //Initialize the opening text
  textSize(32);
  textFont('Comic Sans MS');
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
