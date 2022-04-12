import card from './card.js';
import Edit from './edit.js';
import ListTitle from './listTitle.js';
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
function createCard() {
  const cardContainer = document.getElementById('savedVacations');
  cardContainer.innerHTML += card();
  addButtonEventListeners();
}

// ! Buttons
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
