function Snake()
{

  this.x = 0 - gridsize;
  this.y = 0;
  this.xspeed = 1;
  this.yspeed = 0;


// ------------------------------------------------------------------

    this.show = function()
    {

        fill(255);
        rect(this.x, this.y, gridsize, gridsize);

    }

// ------------------------------------------------------------------

  this.dir = function(newxspeed, newyspeed)
  {


    this.xspeed = newxspeed;
    this.yspeed = newyspeed;

  }

//   -------------------------------------------------------

  this.update = function()
  {
    
    for(var i = 0; i < tail.tail.length-1; i++)
    {

        tail.tail[i] = tail.tail[i + 1];

    }
    
    tail.tail[tail.tailTotal-1] = createVector(this.x, this.y)

    this.x = this.x + this.xspeed*gridsize;
    this.y = this.y + this.yspeed*gridsize;

  }

// -------------------------------------------------------

  this.didEat = function()
  {


    if(this.x === blob.x && this.y === blob.y)
    {

        return(true);

    }
    else
    {

       return(false);

    }

  }

//   ------------------------------------------------------

  this.death = function()
  {

    tail.tailTotal = 0;
    tail.tail = [];
    console.log(tail.tail);
    this.x = 0 - gridsize;
    this.y = 0;
    this.dir(1, 0)

  }

  this.checkForWalls = function()
  {

    if(this.x == 0 - gridsize)
    {

        this.death();

    }
    else if(this.x == width)
    {

        this.death();        

    }
    else if(this.y == 0 - gridsize)
    {

        this.death();

    }
    else if(this.y == height)
    {

       this.death(); 

    }

  }

  this.checkForCollision = function()
  {

    if(tail.tailTotal > 1)
    {





    }

  }
}

function Tail()
{

  this.tail = [];
  this.tailTotal = 0;

  this.show = function()
  {

    for(var i = 0; i < this.tailTotal; i++)
      {

          fill(255);
          rect(this.tail[i].x, this.tail[i].y, gridsize, gridsize);

      }

  }


}