class Spaceship {
  constructor (name, crew, phasers, shields, cloaked, warpDrive, phasersCharge){
    this.name = name
    this.crew = crew
    this.phasers = phasers
    this.shields = shields
    this.cloaked = false
    this.warpDrive =  "disengaged"
    this.phasersCharge =  "uncharged"
    if (crew.length === 0){
      this.docked = true;
    } else {
      this.docked = false;
    }
    if (crew.length > 0){
       crew.forEach(function(member){
         member.currentShip = this
       }.bind(this))
     }
   }
 }
