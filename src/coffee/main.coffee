class Die
  constructor: (@sides) ->

  roll: (quantity) ->
    #alert "You rolled #{quantity} #{@sides} sided dice."
      rolls = []
      x = quantity
      while x < quantity
        x++
        result = Math.floor((Math.random() * @sides + 1))
        rolls.push result
        result


