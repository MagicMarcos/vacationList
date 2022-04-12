const card = () => {
  const vacationForm = document.getElementById('vacationForm');

  const name = vacationForm.elements['destinationName'].value;
  const location = vacationForm.elements['location'].value;
  let photo = vacationForm.elements['photo'].value;
  const description = vacationForm.elements['description'].value;

  if (photo === '') {
    photo =
      'https://gwinnettmagazine.com/wp-content/uploads/2021/04/vacation-696x410.jpg';
  }

  const card = `<div class="card px-0 m-1" id = "card">
     <img class="card-img-top" alt="locationPhoto" src="${photo}">
     <div class="card-body">
         <h5 class="card-title">${name}</h5>
         <h6 class="card-subtitle mb-2 text-muted">${location}</h6>
         <p class="card-text">${description}</p>
         <div class="options d-flex justify-content-between">
             <button class="btn btn-warning edit" >Edit</button>
             <button class="btn btn-danger delete">Remove</button>
         </div>
     </div>
  </div>`;

  return card;
};

export default card;
