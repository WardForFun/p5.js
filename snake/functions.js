function keyPressed()
{

  if(keyCode == UP_ARROW)
  {
    if(snake.yspeed != 1)
    {
    snake.dir(0, -1);
    }
  }
  else if(keyCode == DOWN_ARROW)
  {
    if(snake.yspeed != -1)
    {
    snake.dir(0,1);
    }
  }
  else if(keyCode == LEFT_ARROW)
  {
    if(snake.xspeed != 1)
    {
    snake.dir(-1, 0);
    }
  }
  else if(keyCode == RIGHT_ARROW)
  {
    if(snake.xspeed != -1)
    {
    snake.dir(1, 0);
    }
  }

}

