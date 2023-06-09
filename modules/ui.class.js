import { luxon } from './luxon.js';
import Store from './store.class.js';

class UI {
  static displayBooks() {
    const storedBooks = Store.getBooks();
    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
    row.classList.add('data');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><i class="fas fa-trash-alt delete remove"></i></td>
        `;
    list.appendChild(row);
  }

  static DateAndTime() {
    document.getElementById('date').innerHTML = luxon.DateTime.now().toLocaleString(
      luxon.DateTime.DATETIME_MED_WITH_SECONDS,
    );
  }

  static deleteBook(el) {
    if (el.classList.contains('remove')) {
      el.parentElement.parentElement.remove();
    }
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

export default UI;