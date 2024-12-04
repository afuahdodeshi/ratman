
import Rat from "rat.js";
import Exterminator from "exterminator.js";
import red_Exterminator from "red_exterminator.js";
import blue_Exterminator from "blue_exterminator.js";
import pink_Exterminator from "pink_exterminator.js";

// let red_exterminator;
let boxSize = 50;
let rat;
let normal_cheese;
let blue_cheese;

let maze = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 2, 0, 0, 2, 0, 0, 2, 0, 1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1,1 ],
  [1, 1, 1, 3, 1, 1, 0, 2, 1, 1, 2, 1, 1, 0, 1, 1, 0, 2, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 2, 0, 1, 1, 0, 1, 1, 2, 1, 1, 2, 0, 1, 1, 2, 1, 1, 1],
  [1, 1, 1, 2, 1, 1, 0, 2, 1, 1, 2, 1, 1, 0, 1, 1, 0, 2, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 2, 0, 2, 0, 0, 3, 0, 1, 1, 0, 2, 0, 2, 0, 2, 0, 2, 1, 1, 1],
  [1, 1, 1, 2, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 2, 0, 2, 1, 0, 0, 2, 1, 1, 3, 0, 0, 1, 0, 2, 0, 2, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 2, 1, 0, 0, 2, 0, 0, 2, 0, 0, 1, 0, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 3, 0, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 1, 1, 1, 1, 1, 1],
  [2, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 0, 0, 0, 2, 0, 0, 2, 0, 2, 0, 2, 0, 2],
  [1, 1, 1, 1, 1, 1, 2, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 1, 1, 0, 1, 0, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 0, 0],
  [0, 0, 0, 0, 1, 1, 2, 1, 0, 2, 0, 2, 0, 0, 2, 0, 1, 0, 1, 1, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 0, 0, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 2, 2, 0, 1, 0, 0, 0, 0, 1, 0, 2, 0, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 0, 2, 0, 2, 0, 1, 1, 0, 0, 0, 0, 1, 1, 3, 0, 2, 0, 2, 1, 1, 1],
  [1, 1, 1, 2, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 2, 0, 1, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 1, 0, 0, 2, 1, 1, 1],
  [1, 1, 1, 1, 1, 0, 1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 2, 1, 1, 1, 1, 1],
  [1, 1, 1, 2, 0, 2, 0, 0, 2, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 0, 0, 2, 1, 1, 1, 2, 0, 2, 1, 1, 1, 3, 1, 1, 1],
  [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 0, 1, 1, 1, 1, 1, 2, 1, 1, 1],
  [1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 1, 1, 1],
  [1, 1, 1, 0, 2, 0, 2, 0, 2, 0, 0, 2, 0, 2, 0, 2, 0, 2, 0, 2, 2, 1, 1, 1],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
 
 
];
  function preload() {
    img = loadImage('rat pac man game plan-03 copy.png');
    imgright = loadImage('rat pac man game plan-03 copy.png');
    imgleft = loadImage('rat pac man game plan-03 up flipped.png');
    imgup = loadImage('rat pac man game plan-03 up.png');
    imgdown = loadImage('rat pac man game plan-03 down.png');
    imgclosed_right = loadImage('rat pac man game plan-03 closed.png');
    imgclosed_left = loadImage('rat pac man game plan-03 closed left.png');
    imgclosed_down = loadImage('rat pac man game plan-03 closed  down.png');
    imgclosed_up = loadImage('rat pac man game plan-03 closed up.png');
    exterminator = loadImage('exterminator.png');
    normal_cheese = loadImage('normal_cheese.png');
    blue_cheese = loadImage('blue_cheese.png');
    red_exterminator = loadImage('redExterminator.png');
    blue_exterminator = loadImage('blueExterminator.png');
    pink_exterminator = loadImage('pinkExterminator.png');
  }
  
  // function collision(){
  //   for (let row = 0; row < maze.length; row++) {
  //     for (let col = 0; col < maze[row].length; col++) {
  //       if (maze[row][col] === 1) {  
  //       }
  //     }
  //   }
  // }

  function setup() {
    createCanvas(1200, 1500);
    
    rat = new Rat(img, imgright, imgleft, imgup, imgdown,imgclosed_up,imgclosed_down,imgclosed_left,imgclosed_right);
    exterminator = new Exterminator(exterminator);
    red_exterminator = new red_Exterminator(red_exterminator);
    blue_exterminator = new blue_Exterminator(blue_exterminator);
    pink_exterminator = new pink_Exterminator(pink_exterminator);
  }
 
  function drawGrid(){
  background(0); 
    fill(0);
    stroke(255, 180, 190); 
    strokeWeight(3);
  
    
    
    for (let row = 0; row < maze.length; row++) {
      for (let col = 0; col < maze[row].length; col++) {
        if (maze[row][col] === 1) {
          rect(col * boxSize , row * boxSize, boxSize, boxSize);
        }
        if (maze[row][col] === 2) {
          image(normal_cheese,col * boxSize , row * boxSize, boxSize, boxSize);
        }
        if (maze[row][col] === 3) {
          image(blue_cheese,col * boxSize , row * boxSize, boxSize, boxSize);
        } 
      }
    }
 }

  function keyReleased() {
    rat.keyReleased();
    
  }

  function draw() {
    drawGrid();
    
    
    exterminator.show();
    exterminator.move();
    rat.movement(); 
    rat.show(); 
    rat.checkCollision();

    red_exterminator.show();
    blue_exterminator.show();
    pink_exterminator.show();
    
  }
