class Die
  constructor: (@sides) ->

  roll: (quantity) ->
    #alert "You rolled #{quantity} #{@sides} sided dice."
    x for x in  quantity by -1
    
    result = result + Math.floor((Math.random() * @sides + 1))
    result


