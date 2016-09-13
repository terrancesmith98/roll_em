var Die;

Die = (function() {
  function Die(sides) {
    this.sides = sides;
  }

  Die.prototype.roll = function(quantity) {

    var i, result, x;
    for (i = quantity.length - 1; i >= 0; i += -1) {
      x = quantity[i];
      x;
    }
    result = result + Math.floor(Math.random() * this.sides + 1);
    return result;

  };

  return Die;

})();
