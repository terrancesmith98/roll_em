var Die,
  slice = [].slice;

Die = (function() {
  function Die(sides) {
    this.sides = sides;
  }

  Die.prototype.roll = function() {
    var quantity, result;
    quantity = 1 <= arguments.length ? slice.call(arguments, 0) : [];
    result = [];
    quantity.forEach(function() {
      return result = Math.floor(Math.random() * this.sides + 1);
    });
    return result;
  };

  return Die;

})();
