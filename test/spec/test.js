describe('Bowling game', () => {

  beforeEach(function() {
    game = new BowlingGame()
  })

  function rollMany(n, pins) {
    for (var i = 0; i < 20; i++)
      game.roll(pins)
  }

  function rollSpare() {
    game.roll(5)
    game.roll(5)
  }

  function rollStrike() {
    game.roll(10)
  }


  it('Should handle a gutter game', () => {

    rollMany(20, 0)
    expect(game.score()).toEqual(0)
  })

  it('Should handle all ones', () => {

    rollMany(20, 1)
    expect(game.score()).toEqual(20)
  })

  it('Should handle a spare', () => {

    rollSpare()
    game.roll(4)
    rollMany(17, 0)
    expect(game.score()).toEqual(18)
  })

  it('Should handle a strike', () => {

    rollStrike()
    game.roll(4)
    game.roll(3)
    rollMany(17, 0)
    expect(game.score()).toEqual(24)
  })

  it('Should handle a perfect game', () => {

    rollMany(12, 10)
    expect(game.score()).toEqual(300)
  })
})
