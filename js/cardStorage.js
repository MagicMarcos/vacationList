export default class CardStorage {
  constructor() {
    this.storageMap = new Map();
    this.cards;
  }

  setMap() {
    for (const [key, value] of Object.entries(localStorage)) {
      this.storageMap.set(key, value);
    }
  }
  getMap() {
    this.setMap();
    return this.storageMap;
  }

  setCards() {
    this.cards = Object.values(localStorage);
  }

  getCards() {
    this.setCards();
    return this.cards;
  }
}
