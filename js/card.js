import CLIENT_KEY from './api.js';
class Card {
  constructor(name, location, description) {
    this.name = name;
    this.location = location;
    this.description = description;
    this.photo =
      'https://gwinnettmagazine.com/wp-content/uploads/2021/04/vacation-696x410.jpg';
    this.query = name;
  }
  async create() {
    await this.setUrl();
    console.log('creating');
    const card = `<div class="card px-0 m-1" id = "card">
     <img class="card-img-top" alt="photo of ${this.name}" src="${this.photo}">
     <div class="card-body">
         <h5 class="card-title">${this.name}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${this.location}</h6>
         <p class="card-text">${this.description}</p>
         <div class="options d-flex justify-content-between">
             <button class="btn btn-warning edit" >Edit</button>
             <button class="btn btn-danger delete">Remove</button>
         </div>
     </div>
  </div>`;
    console.log('card', card);
    console.log(typeof card);
    return card;
  }
  async setUrl() {
    const response = await fetch(
      `https://api.unsplash.com/photos/random?orientation=landscape&query=${this.query}&client_id=${CLIENT_KEY}`
    );
    const jsonRes = await response.json();

    this.photo = await jsonRes.urls.small;
  }
}

export default Card;
