import fetchUrl from './fetchUrl.js';
class Card {
  constructor(name, location, description, photo) {
    this.name = name;
    this.location = location;
    this.description = description;
    this.photo = photo === '' ? false : photo;
    this.query = name;
  }
  async create() {
    if (!this.photo) {
      await this.setUrl(this.query);
    }
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

    return card;
  }
  async setUrl(query) {
    this.photo = await fetchUrl(query);
  }
}

export default Card;
