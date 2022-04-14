import fetchUrl from './fetchUrl.js';

export default class Edit {
  constructor() {
    this.query;
    this.dateEdited = moment().format('ddd, MMM do YYYY');
  }
  all(e) {
    this.destination(e);
    this.location(e);
    this.description(e);
    this.photo(e);
    this.editDate(e);
    this.updateStorage(e);
  }

  destination(e) {
    const destination = getCardBody(e).children[0];
    this.query = destination;

    const editedDestination = window.prompt('Enter new name');
    if (editedDestination !== '') {
      destination.innerText = editedDestination;
      this.query = editedDestination;
    }
  }
  async photo(e) {
    const card = getCardBody(e).parentElement;
    const photoUrl = card.children[0];
    const editedPhoto = window.prompt('Enter new photo url');

    if ('' !== editedPhoto && !this.isValidURL(editedPhoto)) {
      alert('Please enter a valid URL');
      this.photo(e);
    } else if ('' !== editedPhoto) {
      photoUrl.src = editedPhoto;
    } else {
      photoUrl.src = await fetchUrl(this.query);
    }
  }

  location(e) {
    const location = getCardBody(e).children[1];

    const editedLocation = window.prompt('Enter new location');

    if (editedLocation !== '') {
      location.innerHTML = editedLocation;
    }
  }

  description(e) {
    const description = getCardBody(e).children[2];

    const editedDescription = window.prompt('Enter new description');

    if (editedDescription !== '') {
      description.innerHTML = editedDescription;
    }
  }

  editDate(e) {
    lastEdit.innerHTML = `Edited ${this.dateEdited}`;
  }

  isValidURL(photo) {
    let url;
    try {
      url = new URL(photo);
    } catch (error) {
      return false;
    }
    return true;
  }

  updateStorage(e) {
    const wrapper = getCardBody(e).parentNode.parentNode;
    const wrapperString = wrapper.outerHTML;
    window.localStorage.removeItem(wrapper.id);
    window.localStorage.setItem(wrapper.id, wrapperString);
  }
}

function getCardBody(e) {
  const cardBody = e.target.parentElement.parentElement;
  return cardBody;
}
