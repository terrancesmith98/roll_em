var Die;

Die = (function() {
  function Die() {}

  constructor(function(sides) {
    this.sides = sides;
  });

  Die.prototype.roll = function(quantity) {
    return alert('You rolled #{quantity} ' + '#{sides} sided dice.');
  };

  return Die;

})();


