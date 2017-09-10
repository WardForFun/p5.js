function Blob()
{


  this.x = 40;
  this.y = 40;

  this.generate = function()
  {

    var randomx = Math.round(random(1, 29));
    var randomy = Math.round(random(1, 29));
    

    this.x = rows[randomx];
    this.y = cols[randomy];

    console.log("X = " + this.x);
    console.log("X = " + this.y);

  }

  this.show = function()
  {

    // console.log(this.x);
    // console.log(this.y);
    fill(color(255, 0, 0));
    rect(this.x, this.y, gridsize, gridsize);

  }



}
