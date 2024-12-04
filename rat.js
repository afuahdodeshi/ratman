//codes taken from p5.js

export default class Rat{
    constructor(img,imgright,imgleft,imgup,imgdown,imgclosed_right,imgclosed_left,imgclosed_down,imgclosed_up){
      this.size = 50; 
      this.img = img;
      this.imgright = imgright;
      this.imgleft = imgleft;
      this.imgup = imgup;
      this.imgdown = imgdown;
      this.imgclosed_right = imgclosed_right;
      this.imgclosed_left = imgclosed_left;
      this.imgclosed_down = imgclosed_down;
      this.imgclosed_up = imgclosed_up; 
      this.x = 560;
      this.y = 590;
    }
    show(){
      image(this.img, this.x, this.y, 80, 50);
    }
    movement(){
      if (keyIsDown(UP_ARROW)) {
        this.img= this.imgup;
        this.y -= 3; 
      }
      if (keyIsDown(DOWN_ARROW)) {
        this.img= this.imgdown;
        this.y += 3; 
      }
      if (keyIsDown(LEFT_ARROW)) {
        this.img= this.imgleft;
        this.x += -3;
      }
      if (keyIsDown(RIGHT_ARROW)) {
        this.img= this.imgright;
        this.x += 3;
      }

      
    }
    checkCollision() {
      let col = floor(this.x );  // Calculate column based on x position
      let row = floor(this.y );  // Calculate row based on y position
    
      // Check if the calculated row and column are valid in the maze
      if (maze[row] && maze[row][col]) {
        if (maze[row][col] === 2 || maze[row][col] === 3) {  // Check if it's a cheese pellet
          maze[row][col] = 0;  // Set it back to 0 after the rat eats the cheese
        }
      }
    }
    
    keyReleased() {
        if (keyCode === UP_ARROW) {
          this.img = this.imgclosed_up;
        }
        if (keyCode === DOWN_ARROW) {
          this.img = this.imgclosed_down;
        }
        if (keyCode === LEFT_ARROW) {
          this.img = this.imgclosed_left;
        }
        if (keyCode === RIGHT_ARROW) {
          this.img = this.imgclosed_right;
        }
      }
  }