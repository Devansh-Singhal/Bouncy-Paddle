var ball, paddle;
var ballimg, paddleimg;
var edge;
function preload() 
{
    ballimg = loadImage("ball.png");
  paddleimg = loadImage("paddle.png");
}

function setup() 
{
  createCanvas(400, 400);
  
 
  ball = createSprite(200,200);
  paddle = createSprite(380,200,10,50);
  

  ball.addImage("ball",ballimg);
 paddle.addImage("ball",paddleimg);
  

  ball.velocityX=9;

}

function draw() {
  background(205,153,0);
 
  edges=createEdgeSprites();
  
 
  ball.bounceOff(edges[0]);
  
  ball.bounceOff(edges[2]);
  ball.bounceOff(edges[3]);

  if(ball.isTouching(paddle))
  {
    randomVelocity();
  }
   
  
  ball.bounceOff(paddle);
  

  paddle.bounceOff(edges[0]);
  paddle.bounceOff(edges[1]);
  paddle.bounceOff(edges[2]);
  paddle.bounceOff(edges[3]);
  
  if(keyDown(UP_ARROW))
  {
     
    paddle.y= paddle.y-20;
  }
  
  if(keyDown(DOWN_ARROW))
  {
   
     paddle.y= paddle.y+20;
  }
  drawSprites();
  
}

function randomVelocity()
{
   ball.velocityY=random(-6,6);
  
}

