import fetchUrl from './fetchUrl.js';
class Card {
  constructor(id, name, location, description, photo, dateCreated) {
    this.id = id;
    this.name = name;
    this.location = location;
    this.description = description;
    this.photo = photo === '' ? false : photo;
    this.dateCreated = dateCreated;
    this.query = name;
  }
  async create() {
    if (!this.photo) {
      await this.setUrl(this.query);
    }
    const card = `
    <div class= "cardContainer" id= ${this.id}>
    <div class="card px-0 m-1" id = "card">
     <img class="card-img-top" alt="photo of ${this.name}" src="${this.photo}">
     <div class="card-body">
         <h5 class="card-title">${this.name}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${this.location}</h6>
         <p class="card-text">${this.description}</p>
         <div class=" d-flex justify-content-between">
             <button class="btn btn-warning edit" >Edit</button>
             <button class="btn btn-danger delete">Remove</button>
         </div>
         <div class="relevantDates d-flex flex-column align-items-end mt-2"> 
         <div class="text-muted" id="lastEdit"></div>
            <div class="text-muted">Posted ${this.dateCreated}</div>
         </div>
     </div>
  </div>
  </div>`;
    window.localStorage.setItem(this.id, card);
    console.log(Object.values(localStorage));
    return card;
  }
  async setUrl(query) {
    this.photo = await fetchUrl(query);
  }
}

export default Card;
