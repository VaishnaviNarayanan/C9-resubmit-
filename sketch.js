
function setup() {
  createCanvas(400,400);
  background(30);
}

function draw() 
{
  
  if(keyIsDown(DOWN_ARROW)){
    background("red")
  }
  if(keyIsDown(UP_ARROW)){
    background("blue")
  }
  if(keyIsDown(RIGHT_ARROW)){
    background("yellow")
  }
  if(keyIsDown(LEFT_ARROW)){
    background("Green")
  }
}




