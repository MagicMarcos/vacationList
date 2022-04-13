export default class ListTitle {
  update() {
    const listTitle = document.getElementById('listTitle');
    listTitle.innerText = 'My WishList';
  }

  reset() {
    if (savedVacations.childNodes.length === 0) {
      listTitle.innerHTML = 'Enter destination details';
    }
  }
}
