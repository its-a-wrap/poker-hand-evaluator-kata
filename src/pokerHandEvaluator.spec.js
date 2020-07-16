import chai from 'chai';
import { PokerHandEvaluator } from './pokerHandEvaluator.js';

const { expect } = chai;

describe('GIVEN PokerHandEvaluator class', () => {
  let pokerHandEvaluator;
  describe('AND the two hands are `2H 3D 5S 9C KD` and `2C 3H 4S 8C AH`', () => {
    it('SHOULD recognise that Ace high beats King high', () => {
      pokerHandEvaluator = new PokerHandEvaluator('2H 3D 5S 9C KD', '2C 3H 4S 8C AH');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player two wins with High Card');
    });
  });

  describe('AND the two hands are `2H 3D 5S KC KD` and `2C 3H 4S 8C AH`', () => {
    it('SHOULD recognise that two of a kind beats Ace high', () => {
      pokerHandEvaluator = new PokerHandEvaluator('2H 3D 5S KC KD', '2C 3H 4S 8C AH');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player one wins with Two of a Kind');
    });
  });

  describe('AND the two hands are `2H 5D 5S KC KD` and `2C 3H 4S AC AH`', () => {
    it('SHOULD recognise that two pairs beats a single pair', () => {
      pokerHandEvaluator = new PokerHandEvaluator('2H 5D 5S KC KD', '2C 3H 4S AC AH');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player one wins with Two Pairs');
    });
  });

  describe('AND the two hands are `2H 5D 5S KC KD` and `3C 3H 3S 8C AH`', () => {
    it('SHOULD recognise that three of a kind beats two pairs', () => {
      pokerHandEvaluator = new PokerHandEvaluator('2H 5D 5S KC KD', '3C 3H 3S 8C AH');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player two wins with Three of a Kind');
    });
  });

  describe('AND the two hands are `2H 3D 4S 5C 6D` and `3C 3H 3S 8C AH`', () => {
    it('SHOULD recognise that straight beats three of a kind', () => {
      pokerHandEvaluator = new PokerHandEvaluator('2H 3D 4S 5C 6D', '3C 3H 3S 8C AH');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player one wins with Straight');
    });
  });

  describe('AND the two hands are `2H 3D 4S 5C 6D` and `3C 3C 3C 8C AC`', () => {
    it('SHOULD recognise that flush beats straight', () => {
      pokerHandEvaluator = new PokerHandEvaluator('2H 3D 4S 5C 6D', '3C 3C 3C 8C AC');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player two wins with Flush');
    });
  });

  describe('AND the two hands are `5H 5D 5S KC KD` and `3C 3C 3C 8C AC`', () => {
    it('SHOULD recognise that full house beats flush', () => {
      pokerHandEvaluator = new PokerHandEvaluator('5H 5D 5S KC KD', '3C 3C 3C 8C AC');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player one wins with Full House');
    });
  });

  describe('AND the two hands are `5H 5D 5S KC KD` and `3C 3C 3C 3C AC`', () => {
    it('SHOULD recognise that four of a kind beats full house', () => {
      pokerHandEvaluator = new PokerHandEvaluator('5H 5D 5S KC KD', '3C 3C 3C 3C AC');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player two wins with Four of a Kind');
    });
  });

  describe('AND the two hands are `9D 10D JD QD KD` and `3C 3C 3C 3C AC`', () => {
    it('SHOULD recognise that straight flush beats four of a kind', () => {
      pokerHandEvaluator = new PokerHandEvaluator('9D 10D JD QD KD', '3C 3C 3C 3C AC');
      const result = pokerHandEvaluator.compareHands();
      expect(result).to.be.eql('Player one wins with Straight Flush');
    });
  });
});
