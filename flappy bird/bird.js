function Bird()
{

    this.x = 300 - 15;
    this.y = 300;
    this.birdSize = 30;
    this.gravityStatus = 0;
    this.gravityMax = 15;
    this.gravityIncrease = 0.8;
    this.jumpHeight = -18;
    this.birdColor = color(255,165,0);
    this.score = 0;
    this.checkerForScore = [false, false, false];

    this.update = function()
    {
        if(this.gravityStatus >= this.gravityMax)
            {

                this.gravityStatus = this.gravityMax;

            }
        else if(this.gravityStatus <= this.jumpHeight )
            {

                this.gravityStatus = this.jumpHeight;

            }


        if(this.y <= 0)
            {

                this.y = 0;
                this.gravityStatus = 2;

            }
        if(this.y >= 600 - this.birdSize)
            {

                this.death();

            }
        
        this.y = this.y + this.gravityStatus;
        this.gravityStatus = this.gravityStatus + this.gravityIncrease;

    }

    this.show = function()
    {

        fill(this.birdColor);
        rect(this.x, this.y, this.birdSize, this.birdSize);

    }

    this.jump = function()
    {

        this.gravityStatus = this.gravityStatus + this.jumpHeight;

    }

    this.death = function()
    {

        this.y = 300;
        this.score = 0;
        this.gravityStatus = 0;
        barrels.xlow = [1200, 1600, 2100];
        barrels.ylow = [0, 0, 0];
        barrels.lowHeight = [250, 100, 300];
        
        barrels.xhigh = [1200, 1600, 2100];
        barrels.yhigh = [350, 200, 400];
        barrels.highHeight = [250, 400, 200];

    }

    this.checkScore = function()
    {

        for(var i = 0; i < this.checkerForScore.length; i++)
            {   

                if(this.x >= barrels.xlow[i] + barrels.barrelWidth 
                    && this.checkerForScore[i] != true)
                {

                    this.score = this.score + 1;
                    this.checkerForScore[i] = true;
                    console.log(i);
                    if(this.checkerForScore[i-1])
                        {

                            this.checkerForScore[i-1] = false;

                        }
                    if(i == 2)
                        {

                            this.checkerForScore[0] = false;
                            this.checkerForScore[1] = false;
                            this.checkerForScore[2] = false;
                            console.log("heee");

                        }

                }   
                    

            }

    }

}