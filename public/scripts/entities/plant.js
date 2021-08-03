class Plant extends Denizen {

    constructor(options) {
      super(options);
      this.imageUri = '/images/fish_tank_plant.png';
      this.position.y += this.height;
     
    }
  
    update(t) {
        // no physics for Starter
      }
    

      onClick(event) {
        var xVel = randRangeInt(-300, 300);
        var yVel = 400 - Math.abs(xVel);
        var s = new Fish({
          tank: this.tank,
          position: this.position,
          velocity: new Vector(xVel, yVel),
          type: this.tank.getRandomSpecies(),
        });
      }
       
  }
  




