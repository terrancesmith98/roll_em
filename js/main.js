var Die;

Die = (function() {
  function Die(sides) {
    this.sides = sides;
  }

  Die.prototype.roll = function(quantity) {
    var result;
    result = Math.floor(Math.random() * this.sides + 1) * quantity;
    return result;
  };

  return Die;

})();
