/*
Museum Artwork Generator

In this sketch, you can see the process of a painting drawn by your computer. The colour will be sampled from the randomized source image, then process through a series of rules  become a surprising artwork.

Designer: Yen-Yi Chiang, n10859543

Reference
Frame image retrieved from "https://reurl.cc/R6oGOx"
Random source image retrieved from "https://picsum.photos/300/200"
*/

//assets variables
let img;
let frame
let font


let pxColor

//positioning Variables
let x = 50
let y = 50
let spacing = 5

function preload() {
  img = loadImage("https://picsum.photos/300/200");
  frame = loadImage("frame.png");
  font = loadFont("GreatVibes-Regular.ttf")
}

function setup() {
  createCanvas(800, 290);
  background("#FFFFEF")
  image(img, 450, 45, 300, 200)
  noStroke()
}

function draw() {

  //extracting color value from each pixel 
  pxColor = img.get(x - 50, y - 50)
  let r = red(pxColor);
  let g = green(pxColor);
  let b = blue(pxColor);
  let hueValue = hue(pxColor);
  let sat = saturation(pxColor);
  let bright = brightness(pxColor);

  //drawing from right to left
  if (x < 350) {

    //drawing circles with transparentcy, so the color on circles can overlap each others
    fill(r, g, b, 360 - (hueValue))

    //if the pixel has high satauration or brightness, the circle will be bigger to emphasis that pixel
    circle(x, y, (sat + bright) / 2)
    x = x + spacing;

    //drawing next row
  } else if (x == 350) {
    x = 0
    y = y + spacing
  }

  //finish drawing
  if (y == 250) {
    fill("black")
    textFont(font)
    textSize(20)
    text("Painting is finished!", 450, 275)
    image(frame, 0, 0, 400, 290)
    noLoop()
  }
}