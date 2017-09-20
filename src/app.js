const BowlingGame = function() {

    this.rolls = []
    this.currentRoll = 0
}


  BowlingGame.prototype.roll = function(pins) {
    return this.rolls[this.currentRoll++] = pins
  }

  BowlingGame.prototype.score = function() {
    let score = 0
    let frameIndex = 0
    let self = this

    function sumOfBallsInFrame() {
      return self.rolls[frameIndex] + self.rolls[frameIndex + 1]
    }

    function isSpare() {
      return self.rolls[frameIndex] + self.rolls[frameIndex + 1] === 10
    }

    function spareBonus() {
      return self.rolls[frameIndex + 2]
    }

    function isStrike() {
      return self.rolls[frameIndex] === 10
    }

    function strikeBonus() {
      return self.rolls[frameIndex + 1] + self.rolls[frameIndex + 2]
    }


    for (var i = 0; i < 10; i++) {
      if(isStrike()) {
        score = score + 10 + strikeBonus()
        frameIndex = frameIndex + 1
      } else if (isSpare()) {
        score = score + 10 + spareBonus()
        frameIndex = frameIndex + 2
      } else {
        score = score + sumOfBallsInFrame()
        frameIndex = frameIndex + 2
      }
    }

    return score
  }






