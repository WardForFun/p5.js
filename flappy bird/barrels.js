function Barrels()
{

    this.xlow = [1200, 1500, 1800];
    this.ylow = [0, 0, 0];
    this.lowHeight = [250, 100, 300];
    
    this.xhigh = [1200, 1500, 1800];
    this.yhigh = [350, 200, 400];
    this.heigHeight = [250, 400, 200];

    this.barrelsAmount = 2;
    this.xspeed = 3;
    this.barrelWidth = 150;
    this.barrelXSpace = 300;
    this.barrelYSpace = 150;


    this.barrelColor = color(0, 255, 0);



    this.update = function()
    {

        for(var i = 0; i < this.barrelsAmount; i++)
            {

                this.xlow[i] = this.xlow[i] - this.xspeed;
                this.xhigh[i] = this.xhigh[i] - this.xspeed;

            }

    }

    this.show = function()
    {
        for(var i = 0; i < this.barrelsAmount; i++)
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

                        this.maxOfArray = Math.max.apply(0, this.xlow);

                        console.log("maxofarray: ", this.maxOfArray);

                        this.xlow[i] = this.maxOfArray + this.barrelXSpace;
                        this.xhigh[i] = this.maxOfArray + this.barrelXSpace;



                    }

            }

    }

}