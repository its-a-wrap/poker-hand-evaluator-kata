import { Hand } from './hand.js';

export class PokerHandEvaluator {
  constructor(playerOneHand, playerTwoHand) {
    this.playerOneHand = new Hand(playerOneHand);
    this.playerTwoHand = new Hand(playerTwoHand);
  }

  compareHands() {
    let result = '';

    if (this.playerOneHand.getRankingValue() > this.playerTwoHand.getRankingValue()) {
      result = `Player one wins with ${this.playerOneHand.getRankingString()}`;
    } else if (this.playerTwoHand.getRankingValue() > this.playerOneHand.getRankingValue()) {
      result = `Player two wins with ${this.playerTwoHand.getRankingString()}`;
    } else {
      result = 'Tie';
    }

    return result;
  }
}
