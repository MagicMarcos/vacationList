export default class CardStorage {
  constructor() {
    this.storageMap = new Map();
    this.cards;
  }

  setUniqueId() {
    const id = Math.ceil(Math.random() * 1000);
    if (this.getMap().has(id)) {
      setUniqueId();
    }
    return id;
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

// use JSON.stringify() and parse() to store everything

// let objVar = {d: "montana", l: "USA"}
// undefined
// let objStr = JSON.stringify(objVar)
// undefined
// JSON.parse(objStr)
// {d: 'montana', l: 'USA'}
