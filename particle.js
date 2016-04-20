function Particle(x, y){
  this.x = x;
  this.y = y;
  this.col = color(255);
  this.diameter = 1.5;
  
  this.display = function(){
    stroke(255);
    fill(255);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
    
  
  this.update = function() {
    this.x = this.x + random(-1, 1);
    this.y = this.y + random(-1, 1);
    this.lifespan--;
  };
  
   
  this.isFinished = function() {
    if(this.lifespan < 0 ){
      return true;
    } else {
      return false;
    }
  };
}
