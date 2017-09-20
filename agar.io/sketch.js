var blobs = [];
var blob;
var player;
var arrayPos = 0;
var arrayCount = 2000;
var playArea = 10000;
var blobscounter = 0;

function setup()
{

    createCanvas(800, 800);
    frameRate(60);

    blobs.push(new Blobs());
    player = new Player();

}

function draw()
{   

    background(255);

    if(blobs.length != arrayCount)
    {
     
        blobscounter = arrayCount - blobs.length; 
        
    for(var i = 0; i < blobscounter; i++)
    {

        arrayPos = i;
        blobs.push(new Blobs());

    }
    }


    for(var i = 0; i < blobs.length; i++)
    {

        blobs[i].show();
        blobs[i].update();

    }

    player.update();
    player.show();
    player.move();


}