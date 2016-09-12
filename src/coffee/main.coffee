class Die
  constructor: (@sides) ->

  roll: (quantity) ->
    #alert "You rolled #{quantity} #{@sides} sided dice."
    result = Math.floor((Math.random() * @sides + 1)) * quantity
    result


