export class Card {
  constructor(cardString) {
    this.rank = cardString.substring(0, cardString.length - 1);
    this.suit = cardString.charAt(cardString.length - 1);

    this.RANK_TO_VALUE_MAPPING = {
      2: 2,
      3: 3,
      4: 4,
      5: 5,
      6: 6,
      7: 7,
      8: 8,
      9: 9,
      10: 10,
      J: 11,
      Q: 12,
      K: 13,
      A: 14,
    };
  }

  getRank() {
    return this.rank;
  }

  getValue() {
    return this.RANK_TO_VALUE_MAPPING[this.rank];
  }

  getSuit() {
    return this.suit;
  }
}
