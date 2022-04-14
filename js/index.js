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
  const card = new Card(
    destinationName.value,
    locationName.value,
    description.value,
    photo.value,
    moment().format('ddd, MMM do YYYY')
  );

  savedVacations.innerHTML += await card.create();

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
  edit.all(e);
}

// need some kind of data-id to relate the date time with the individual card to be store in sessions storage
