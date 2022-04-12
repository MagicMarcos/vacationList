export default class Edit {
  photo(e) {
    const card = getCardBody(e).parentElement;
    const photoUrl = card.children[0];
    const editedPhoto = window.prompt('Enter new photo url');

    if ('' !== editedPhoto && !this.isValidURL(editedPhoto)) {
      alert('Please enter a valid URL');
      this.photo(e);
    } else if ('' !== editedPhoto) {
      photoUrl.src = editedPhoto;
    }
  }

  destination(e) {
    const destination = getCardBody(e).children[0];

    const editedDestination = window.prompt('Enter new name');
    if (editedDestination !== '') {
      destination.innerHTML = editedDestination;
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

  //* validates picture url during edit
  isValidURL(photo) {
    let url;

    try {
      url = new URL(photo);
    } catch (error) {
      return false;
    }
    return true;
  }
}

function getCardBody(e) {
  const cardBody = e.target.parentElement.parentElement;
  return cardBody;
}
