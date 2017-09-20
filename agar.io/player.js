function Player()
{

    this.pos = createVector(width/2, 800/2);
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


    // använd map för att justera hastigheten beroende på var musen är placerad

    this.move = function()
    {

        if(mouseX > this.pos.x)
        {

            this.xspeed = this.speedMultiplier;
            console.log("4");

        }
        else if(mouseX < this.pos.x)
        {

            this.xspeed = -this.speedMultiplier;
            console.log("3");

        }
        else if(mouseY < this.pos.y)
        {

            this.yspeed = -this.speedMultiplier;
            console.log("1");


        }
        else if(mouseY > this.pos.y)
        {

            this.yspeed = this.speedMultiplier;
            console.log("2");

        }
        else
        {

            this.xspeed = 0;
            this.yspeed = 0;

        }

    }


}