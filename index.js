const addToList = document.getElementById('vacationForm');
addToList.addEventListener('submit', addLocation);

// ! handles form behavior, calls list creating
function addLocation(e) {
  e.preventDefault();
  saveVacation();
  resetForm();
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

document.getElementById('savedVacations').innerHTML = document.createElement(
  `<div class="card" style="width: 15rem">
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
</div>`
);

function elementFromHTML(html) {
  const card = document.createElement('card');

  card.innerHTML = html.trim();

  return card.content.firstElementChild;
}
