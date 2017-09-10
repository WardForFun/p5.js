var barrels;

function setup()
{

    createCanvas(600, 600);
    frameRate(60);
    barrels = new Barrels();

}

function draw()
{

    background(51);
    barrels.show();
    barrels.update();
    barrels.generate();


}