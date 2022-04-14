import Edit from './edit.js';
import ListTitle from './listTitle.js';
import Card from './card.js';
import CardStorage from './cardStorage.js';
const edit = new Edit();
const listTitle = new ListTitle();
const cardStorage = new CardStorage();

(() => {
  cardStorage.setMap();
  const cards = cardStorage.getCards();
  if (cards.length > 0) {
    for (let card of cards) {
      savedVacations.innerHTML += card;
      addButtonEventListeners();
    }
  }
})();

document.getElementById('vacationForm').addEventListener('submit', addItem);

function addItem(e) {
  e.preventDefault();
  listTitle.update();
  createCard();
  e.target.reset();
}

// ! Cards
async function createCard() {
  const id = setUniqueId();
  const card = new Card(
    id,
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
  e.target.parentElement.parentElement.parentElement.parentElement.remove();

  window.localStorage.removeItem(
    e.target.parentElement.parentElement.parentElement.parentElement.id
  );
  listTitle.reset();
}

function editVacation(e) {
  edit.all(e);
}

function setUniqueId() {
  const id = Math.ceil(Math.random() * 1000);
  if (cardStorage.getMap().has(id)) {
    setUniqueId();
  }
  return id;
}
