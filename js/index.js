import Edit from './edit.js';
import ListTitle from './listTitle.js';
import Card from './card.js';
const edit = new Edit();
const listTitle = new ListTitle();

document.getElementById('vacationForm').addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  listTitle.update();
  createCard();
  e.target.reset();
}

// ! Cards
async function createCard() {
  const vacationForm = document.getElementById('vacationForm');
  const name = vacationForm.elements['destinationName'].value;
  const location = vacationForm.elements['location'].value;
  const description = vacationForm.elements['description'].value;

  const card = new Card(name, location, description);

  const cardContainer = document.getElementById('savedVacations');
  cardContainer.innerHTML += await card.create();

  addButtonEventListeners();
}

// ! Buttons
// TODO we must ensure that this doesn't have to loop every time a new button is created
function addButtonEventListeners() {
  document
    .querySelectorAll('.delete')
    .forEach(button => button.addEventListener('click', deleteVacation));
  document
    .querySelectorAll('.edit')
    .forEach(button => button.addEventListener('click', editVacation));
}

function deleteVacation(e) {
  e.target.parentElement.parentElement.parentElement.remove();
  listTitle.reset();
}

function editVacation(e) {
  edit.photo(e);
  edit.destination(e);
  edit.location(e);
  edit.description(e);
}
