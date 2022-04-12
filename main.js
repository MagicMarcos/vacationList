const addToList = document.getElementById('vacationForm');
addToList.addEventListener('submit', addLocation);

// ! handles form behavior, calls list creating
function addLocation(e) {
  e.preventDefault();
  saveVacation();
  resetForm();
}

function resetForm() {
  document.getElementById('vacationForm').reset();
}

// ! handles creating/updating list
function saveVacation() {
  const destination = document.getElementById('destinationName').value;
  const location = document.getElementById('location').value;
  const photo = document.getElementById('photo').value;
  const description = document.getElementById('description').value;

  updateListTitle();

  //* card wrapper
  const savedVacations = document.getElementById('savedVacations');
  const savedVacation = createSavedVacation(savedVacations);

  //* card
  const card = createCard(savedVacation);

  //* image
  createImage(card, photo);

  //* card body
  const cardBody = createCardBody(card);
  createCardTitle(cardBody, destination);
  createCardSubtitle(cardBody, location);
  createCardText(cardBody, description);

  //* buttons
  const buttonContainer = createBtnContainer(cardBody);
  createEditBtn(buttonContainer);
  createDeleteBtn(buttonContainer);
}

function updateListTitle() {
  const listTitle = document.querySelector('.listTitle');
  listTitle.innerHTML = 'My WishList';
  listTitle.style.textAlign = 'center';
}

function createSavedVacation(savedVacations) {
  const savedVacation = savedVacations.appendChild(
    document.createElement('div')
  );
  savedVacation.className = 'savedVacation m-1';

  return savedVacation;
}

function createCard(savedVacation) {
  const card = savedVacation.appendChild(document.createElement('div'));
  card.className = 'card';
  return card;
}

function createImage(card, photo) {
  const image = card.appendChild(document.createElement('img'));
  if (photo === '') {
    image.src =
      'https://gwinnettmagazine.com/wp-content/uploads/2021/04/vacation-696x410.jpg';
  } else {
    image.src = photo;
  }
  image.alt = 'travel photo';
  image.className = 'card-img-top';
}

function createCardBody(card) {
  const cardBody = card.appendChild(document.createElement('div'));
  cardBody.className = 'card-body';
  return cardBody;
}

function createCardTitle(cardBody, destination) {
  const cardTitle = cardBody.appendChild(document.createElement('h5'));
  cardTitle.className = 'card-title';
  cardTitle.innerHTML = destination;
}

function createCardSubtitle(cardBody, location) {
  const cardSubtitle = cardBody.appendChild(document.createElement('h6'));
  cardSubtitle.className = 'card-subtitle mb-2 text-muted';
  cardSubtitle.innerHTML = location;
}

function createCardText(cardBody, description) {
  const cardText = cardBody.appendChild(document.createElement('p'));
  cardText.className = 'card-text';
  cardText.innerHTML = description;
}

function createBtnContainer(cardBody) {
  const buttonContainer = cardBody.appendChild(document.createElement('div'));
  buttonContainer.className = 'd-flex justify-content-between';
  return buttonContainer;
}

function createEditBtn(buttonContainer) {
  const editBtn = buttonContainer.appendChild(document.createElement('a'));
  editBtn.className = 'btn btn-warning editBtn';
  editBtn.innerText = 'Edit';
  editBtn.addEventListener('click', editItem);
}

function createDeleteBtn(buttonContainer) {
  const deleteBtn = buttonContainer.appendChild(document.createElement('a'));
  deleteBtn.className = 'btn btn-danger deleteBtn';
  deleteBtn.innerText = 'Delete';
  deleteBtn.addEventListener('click', deleteItem);
}

//! handles editing
function editItem(e) {
  editDestination(e);
  editLocation(e);
  editDescription(e);
  editPhoto(e);
}

function editDestination(e) {
  const destination = e.target.parentNode.parentNode.firstChild;

  const newDestination = window.prompt('Enter a new destination name');
  if (newDestination !== '') {
    destination.innerHTML = newDestination;
  }
}

function editLocation(e) {
  const location = e.target.parentNode.parentNode.firstChild.nextElementSibling;

  const newLocation = window.prompt('Enter a new location');
  if (newLocation !== '') {
    location.innerHTML = newLocation;
  }
}

function editDescription(e) {
  const description =
    e.target.parentNode.parentNode.firstChild.nextElementSibling
      .nextElementSibling;

  const newDescription = window.prompt('Enter a new description');

  if (newDescription !== '') {
    description.innerHTML = newDescription;
  }
}

function editPhoto(e) {
  const photo = e.target.parentNode.parentNode.parentNode.firstChild;

  const newPhoto = window.prompt('Enter a new photo URL');
  if ('' !== newPhoto && !isValidURL(newPhoto)) {
    alert('please enter valid url');
  } else if ('' !== newPhoto) {
    photo.src = newPhoto;
  }
}

//* validates picture url during edit
function isValidURL(photo) {
  let url;

  try {
    url = new URL(photo);
  } catch (error) {
    return false;
  }
  return true;
}

function deleteItem(e) {
  e.target.parentNode.parentNode.parentNode.parentNode.remove();

  resetListTitle();
}

function resetListTitle() {
  const listTitle = document.querySelector('.listTitle');
  const savedVacationCount = document.querySelectorAll('.savedVacation').length;

  if (savedVacationCount === 0) {
    listTitle.innerHTML = 'Enter destination details';
  }
}

// BASIC CARD STRUCTURE
/* <div class="card" style="width: 15rem">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <div class="d-flex justify-content-between">
      <a href="#" class="btn btn-warning">
        Edit
      </a>
      <a href="#" class="btn btn-danger">
        Remove
      </a>
    </div>
  </div>
</div>; */

document.getElementById('savedVacations').innerHTML =
  elementFromHTML(`<div class="card" style="width: 15rem">
  <img src="..." class="card-img-top" alt="..." />
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <h6 class="card-subtitle mb-2 text-muted">Card subtitle</h6>
    <p class="card-text">
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </p>
    <div class="d-flex justify-content-between">
      <a href="#" class="btn btn-warning">
        Edit
      </a>
      <a href="#" class="btn btn-danger">
        Remove
      </a>
    </div>
  </div>
</div>`);

function elementFromHTML(html) {
  const card = document.createElement('card');

  card.innerHTML = html.trim();

  return card.content.firstElementChild;
}
