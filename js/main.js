var Die;

Die = (function() {
  function Die(sides) {
    this.sides = sides;
  }

  Die.prototype.roll = function(quantity) {
    var result, rolls, x;
    rolls = [];
    x = quantity;
    while (x < quantity) {
      x++;
      result = Math.floor(Math.random() * this.sides + 1);
      rolls.push(result);
    }
    return rolls;
  };

  return Die;

})();
