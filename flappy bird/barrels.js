function Barrels()
{

    this.xlow = [1200, 1500, 1800];
    this.ylow = [0, 0, 0];
    this.lowHeight = [250, 100, 300];
    
    this.xhigh = [1200, 1500, 1800];
    this.yhigh = [350, 200, 400];
    this.heigHeight = [250, 400, 200];

    this.barrelsAmount = 2;
    this.xspeed = 5;
    this.barrelWidth = 100;
    this.barrelXSpace = 200;
    this.barrelYSpace = 100;

    this.barrelColor = color(0, 255, 0);



    this.update = function()
    {

        for(var i = 0; i < 3; i++)
            {

                this.xlow[i] = this.xlow[i] - this.xspeed;
                this.xhigh[i] = this.xhigh[i] - this.xspeed;

            }

    }

    this.show = function()
    {
        for(var i = 0; i < 3; i++)
        {

            fill(this.barrelColor);
            rect(this.xlow[i], this.ylow[i], this.barrelWidth, this.lowHeight[i]);
            rect(this.xhigh[i], this.yhigh[i], this.barrelWidth, this.heigHeight[i]);
            //console.log("hi");


        }

    }

    this.generate = function(i)
    {

        for(var i = 0; i < 3; i++)
            {


                /* if the barrel isn't visible set the x to 600 and randomize the heights */
                if(this.xlow[i] < 0 - this.barrelWidth)
                    {

                        this.xlow[i] = 600;
                        this.ylow[i] = 600;





                    }

            }

    }

}