function Barrels()
{

    xlow = [0, 300, 500];
    ylow = [0, 0, 0];
    lowHeight = [250, 100, 300];
    
    xhigh = [0, 300, 500];
    yhigh = [350, 200, 400];
    heigHeight = [250, 400, 200];

    barrelsAmount = 2;
    xspeed = 1;
    barrelWidth = 100;
    barrelXSpace = 200;
    barrelYSpace = 100;

    var barrelColor = color(0, 255, 0);



    this.update = function()
    {

        

    }

    this.show = function()
    {
        for(var z = 0; z < 3; z++)
        {

            fill(255);
            console.log(.xlow[1]);
            // rect(this.xlow[z], this.ylow[z], this.barrelWidth, this.lowHeight[z]);
            // rect(this.xhigh[z], this.yhigh[z], this.barrelWidth, this.heigHeight[z]);
            // console.log("hi");


        }

    }

    this.generate = function(i)
    {



    }

}