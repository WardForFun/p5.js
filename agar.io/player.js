function Player()
{

    this.pos = createVector(width/2, height/2);
    this.size = 50;
    this.xspeed = 0;
    this.yspeed = 0;
    this.speedMultiplier = 500;
    this.maxspeed = 500;

    this.show = function()
    {

        fill(255);
        stroke(0);
        strokeWeight(2);
        ellipse(width/2, height/2, this.size, this.size);

    }

    this.update = function()
    {

        constrain(this.yspeed, -this.maxspeed, this.maxspeed);
        constrain(this.xspeed, -this.maxspeed, this.maxspeed);



    }

    this.eatBlob = function()
    {



    }

    this.move = function()
    {

        if(mouseX > this.pos.x)
        {

            this.xspeed = map(mouseX, width/2, width, 0, this.speedMultiplier);

        }
        else if(mouseX < this.pos.x)
        {

            this.xspeed = map(mouseX, width/2, 0, 0, this.speedMultiplier * -1);

        }
        
        if(mouseY < this.pos.y)
        {

            this.yspeed = map(mouseY, height/2, 0, 0, this.speedMultiplier * -1);


        }
        else if(mouseY > this.pos.y)
        {

            this.yspeed = map(mouseY, height/2, height, 0, this.speedMultiplier);

        }
        else
        {

            this.xspeed = 0;
            this.yspeed = 0;

        }

        constrain(this.xspeed, 0, this.speedMultiplier);
        constrain(this.yspeed, 0, this.speedMultiplier);

    }


}