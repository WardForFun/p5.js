var barrels;
var bird;

function setup()
{

    createCanvas(600, 600);
    frameRate(60);
    barrels = new Barrels();
    bird = new Bird();

}

function draw()
{

    background(51);
    barrels.show();
    barrels.update();
    barrels.generate();
    bird.show();
    bird.update();
    bird.checkScore();
    drawScore();

}

function keyPressed()
{

    if(keyCode == UP_ARROW)
        {

            bird.jump();

        }

}

function drawScore()
{

    textSize(48);
    fill(255);
    text(bird.score, 290, 50);

}