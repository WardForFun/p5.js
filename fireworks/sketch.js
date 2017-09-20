var firework = [];

function setup()
{

    createCanvas(500, 400);
    stroke(255);
    strokeWeight(4);
    firework = new Firework(random(3, 497), 400, random(0.1, 0.3));


}

function draw()
{

    background(51);
    firework.particle.update();
    firework.particle.show();
    firework.particle.lowerTheGravity();
    
}