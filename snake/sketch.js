var snake;
var gridsize = 20;
var blob;
var tail;

var rows = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
           320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 500, 520, 540, 560, 580];

var cols = [0, 20, 40, 60, 80, 100, 120, 140, 160, 180, 200, 220, 240, 260, 280, 300,
           320, 340, 360, 380, 400, 420, 440, 460, 480, 500, 500, 520, 540, 560, 580];


function setup() 
  {
    createCanvas(600, 600);
    frameRate(10);
    blob = new Blob(); 
    snake = new Snake();
    tail = new Tail();

  }
  
  function draw() 
  {

    background(100);
     blob.show();
     snake.checkForCollision();
     snake.update();
     tail.show();
     snake.show();
     if(snake.didEat())
     {

      tail.tailTotal = tail.tailTotal + 1;
      blob.generate()
      
     }
     snake.checkForWalls();
  
  }

