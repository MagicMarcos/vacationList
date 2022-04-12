export default class ListTitle {
  update() {
    const listTitle = document.getElementById('listTitle');
    listTitle.innerText = 'My WishList';
  }

  reset() {
    const listTitle = document.getElementById('listTitle');
    const savedVacationCount =
      document.querySelectorAll('.savedVacation').length;

    if (savedVacationCount === 0) {
      listTitle.innerHTML = 'Enter destination details';
    }
  }
}
