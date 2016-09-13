class Die
  constructor: (@sides) ->

  roll: (quantity...) ->
    #alert "You rolled #{quantity} #{@sides} sided dice."
    result = [];
    quantity.forEach () ->
      result = Math.floor((Math.random() * @sides + 1))
    result


