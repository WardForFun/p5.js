function Barrels()
{

    this.xlow = [1200, 1600, 2100];
    this.ylow = [0, 0, 0];
    this.lowHeight = [250, 100, 300];
    
    this.xhigh = [1200, 1600, 2100];
    this.yhigh = [350, 200, 400];
    this.highHeight = [250, 400, 200];

    this.barrelsAmount = 2;
    this.xspeed = 3;
    this.barrelWidth = 150;
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
            rect(this.xhigh[i], this.yhigh[i], this.barrelWidth, this.highHeight[i]);
            //console.log("hi");


        }

    }

    this.generate = function(i)
    {

        for(var i = 0; i < this.barrelsAmount; i++)
            {


                /* if the barrel isn't visible set the x to 600 and randomize the heights */
                if(this.xlow[i] < 0 - this.barrelWidth)
                    {

                        this.xlow[i] = 600;
                        this.xhigh[i] = 600;



                        //this.yhigh = 

                        //this.lowHeight = 
                        
                        //this.highHeight = 



                    }

            }

    }

}