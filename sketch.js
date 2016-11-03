var c0;
var c1;
var c2;
var c3;
var c4;
var c5;
var c6;

function setup() {
  createCanvas(1024,768);
  
  c0 = new Creature(200,100);
  c1 = new Creature(750,300);
  c2 = new Creature(500,500);
  c3 = new Creature(100,580);
  c4 = new Creature(800,600);
  c5 = new Creature(400,650);
  c6 = new Creature(500,300);
  
}

function draw() {
  background(0);
  fill(255);
  for(var i = 0 ; i < width/20 ;i++){
    triangle(i*40,0,i*40+20,35,i*40+40,0);
  }
  
  c0.render();
  c0.update();
  c0.game();
  c1.render();
  c1.update();
  c1.game();
  c2.render();
  c2.update();
  c2.game();
  c3.render();
  c3.update();
  c3.game();
  c4.render();
  c4.update();
  c4.game();
  c5.render();
  c5.update();
  c5.game();
  c6.render();
  c6.update();
  c6.game();
}

function Creature(x,y){
  this.x = x;
  this.y = y;
  this.r = random(30,200);
  this.hr = random(0.1,0.12);
  this.sw = 1;
  
  this.render = function(){
    stroke(0,127+127*sin(frameCount*this.hr));
    strokeWeight(this.sw);
      
    drawCreature(this.x,this.y,this.r,this.r);
  }
  
  this.update = function(){
    if(dist(mouseX,mouseY,this.x,this.y) < 50){
      this.sw = 6;
      this.y +=5;
    } else{
      this.sw = 3;
      this.y -= 0.5;
    }
  }  
  
  this.game = function(){
    if(this.y < 0){
      textSize(80);
      textFont("Arial");
      fill(255);
      textAlign(CENTER);
      var lose = "Game over!";
      text (lose,500,350);
      
      drawCreature.hide();
    }  
  }
}

function drawCreature(x,y,r,r){
  fill(255);
  ellipse(x,y,r+50,r);
  ellipse(x,y-r/8,r/3+30,r/3);
  fill(0);
  var x1 = map(mouseX,0,width,x-10,x+10);
  var y1 = map(mouseY,0,height,y-r/8-3,y-r/8+3);
  ellipse(x1,y1,r/4,r/4);
}
