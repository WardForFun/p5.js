function Bird()
{

    this.x = 300 - 15;
    this.y = 300;
    this.birdSize = 30;
    this.gravityStatus = -1;
    this.gravityMax = -20;
    this.jumpHeight = 20;

    this.update = function()
    {



    }

    this.show = function()
    {



    }

    this.jump = function()
    {

        this.gravityStatus = this.gravityStatus + this.jumpHeight;

    }


}