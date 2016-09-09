class Die
  constructor (@sides) ->

  roll: (quantity) ->
    alert 'You rolled #{quantity} ' + '#{sides} sided dice.'
