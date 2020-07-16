import { Card } from './card.js';

export class Hand {
  constructor(handString) {
    const cardStringArray = handString.split(' ');
    this.cards = cardStringArray.map((cardAsString) => new Card(cardAsString));

    this.handRankingString = '';
    this.valuesArray = this.cards.map((card) => card.getValue());
    this.suitsArray = this.cards.map((card) => card.getSuit()).sort();

    this.RANK_TO_VALUE = {
      twoOfAKind: 10000,
      twoPairs: 20000,
      threeOfAKind: 30000,
      straight: 40000,
      flush: 50000,
      fullHouse: 60000,
      fourOfAKind: 70000,
      straightFlush: 80000,
    };

    this.rankingValue = this.calculateHandValue();
  }

  getRankingString() {
    return this.handRankingString;
  }

  getRankingValue() {
    return this.rankingValue;
  }

  calculateHandValue() {
    if (this.isStraight() && this.isFlush()) {
      this.handRankingString = 'Straight Flush';
      return this.RANK_TO_VALUE.straightFlush;
    } if (this.isFourOfAKind()) {
      this.handRankingString = 'Four of a Kind';
      return this.RANK_TO_VALUE.fourOfAKind;
    } if (this.fullHouse()) {
      this.handRankingString = 'Full House';
      return this.RANK_TO_VALUE.fullHouse;
    } if (this.isFlush()) {
      this.handRankingString = 'Flush';
      return this.RANK_TO_VALUE.flush;
    } if (this.isStraight()) {
      this.handRankingString = 'Straight';
      return this.RANK_TO_VALUE.straight;
    } if (this.isThreeOfAKind()) {
      this.handRankingString = 'Three of a Kind';
      return this.RANK_TO_VALUE.threeOfAKind;
    } if (this.isTwoPairs()) {
      this.handRankingString = 'Two Pairs';
      return this.RANK_TO_VALUE.twoPairs;
    } if (this.isTwoOfAKind()) {
      this.handRankingString = 'Two of a Kind';
      return this.RANK_TO_VALUE.twoOfAKind;
    }

    this.handRankingString = 'High Card';
    return this.valuesArray[this.valuesArray.length - 1];
  }

  isTwoOfAKind() {
    for (let i = 0; i < this.valuesArray.length; i++) {
      if (this.occurrencesOf(this.valuesArray[i]) === 2) {
        return true;
      }
    }

    return false;
  }

  isTwoPairs() {
    const pairs = new Set();
    for (let i = 0; i < this.valuesArray.length; i++) {
      if (this.occurrencesOf(this.valuesArray[i]) === 2) {
        pairs.add(this.valuesArray[i]);
      }
    }

    return pairs.size === 2;
  }

  isThreeOfAKind() {
    for (let i = 0; i < this.valuesArray.length; i++) {
      if (this.occurrencesOf(this.valuesArray[i]) === 3) {
        return true;
      }
    }

    return false;
  }

  isStraight() {
    for (let i = 0; i < this.valuesArray.length - 1; i++) {
      if (this.valuesArray[i] + 1 !== this.valuesArray[i + 1]) {
        return false;
      }
    }

    return true;
  }

  isFlush() {
    return this.suitsArray[0] === this.suitsArray[this.suitsArray.length - 1];
  }

  fullHouse() {
    const sets = new Set();
    for (let i = 0; i < this.valuesArray.length; i++) {
      if (this.occurrencesOf(this.valuesArray[i]) === 2
        || this.occurrencesOf(this.valuesArray[i]) === 3) {
        sets.add(this.occurrencesOf(this.valuesArray[i]));
      }
    }

    return sets.size === 2;
  }

  isFourOfAKind() {
    for (let i = 0; i < this.valuesArray.length; i++) {
      if (this.occurrencesOf(this.valuesArray[i]) === 4) {
        return true;
      }
    }

    return false;
  }

  occurrencesOf(number) {
    let count = 0;
    let index = 0;

    while (index < this.valuesArray.length) {
      index = this.valuesArray.indexOf(number, index) + 1;
      if (index === 0) {
        break;
      } else {
        count++;
      }
    }

    return count;
  }
}
