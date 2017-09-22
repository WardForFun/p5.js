function Blobs()
{

    
    this.pos = createVector(random(10, playArea - 10), random(10, playArea - 10));
    this.radius = 20;
    this.fill = color(random(20, 230), random(20, 230), random(20, 230));

    this.show = function()
    {

        fill(this.fill);
        ellipse(this.pos.x, this.pos.y, this.radius, this.radius);

    }

    this.update = function()
    {

        this.pos.x = player.xspeed * -0.01 + this.pos.x;
        this.pos.y = player.yspeed * -0.01 + this.pos.y;
 
    }

} 