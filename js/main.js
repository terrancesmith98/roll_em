var Die;

Die = (function() {
  function Die(sides1) {
    this.sides = sides1;
  }

  Die.prototype.roll = function(quantity) {
    return alert("You rolled " + quantity + " " + sides + " sided dice.");
  };

  return Die;

})();
