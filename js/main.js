class Die {
  constructor (sides) {
    this.sides = sides;
  }
  
  roll () {
    var result;
    result = Math.floor(Math.random() * this.sides + 1);
    return result;
  }
}
