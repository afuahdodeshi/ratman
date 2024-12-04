export default class red_Exterminator {
    constructor(red_Exterminator) {
      this.size = 10;
      this.x = 600; // Starting position
      this.y = 870;
      this.red_Exterminator = red_Exterminator;
      this.boxSize = 50; // Size of each grid cell
      // this.direction = this.getRandomDirection(); // Initial direction
    }
  
    // getRandomDirection() {
    //   const directions = ["up", "down", "left", "right"];
    //   return directions[Math.floor(Math.random() * directions.length)];
    // }
  
    move() {
      // let newX = this.x / this.boxSize; // Convert to grid coordinate
      // let newY = this.y / this.boxSize;
  
      // // Update coordinates based on direction
      // if (this.direction === "up") newY -= 1;
      // if (this.direction === "down") newY += 1;
      // if (this.direction === "left") newX -= 1;
      // if (this.direction === "right") newX += 1;
  
      // // Check for walls in the maze
      // if (maze[newY] && maze[newY][newX] !== 1) {
      //   // Update position if no wall
      //   this.x = newX * this.boxSize;
      //   this.y = newY * this.boxSize;
      // } else {
      //   // Change direction if hit a wall
      //   this.direction = this.getRandomDirection();
      // }
    }
  
    show() {
      image(this.red_Exterminator, this.x, this.y, 70, 90);
    }
  }
  