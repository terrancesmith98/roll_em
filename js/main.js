var Die;

Die = (function() {
  function Die(sides) {
    this.sides = sides;
  }

  Die.prototype.roll = function(quantity) {
    var result, results, rolls, x;
    rolls = [];
    x = quantity;
    results = [];
    while (x < quantity) {
      x++;
      result = Math.floor(Math.random() * this.sides + 1);
      rolls.push(result);
      results.push(result);
    }
    return results;
  };

  return Die;

})();
