import Store from './modules/store.js';
import UI from './modules/ui.js';

class Book {
  constructor(title, author) {
    this.title = title;
    this.author = author;
  }
}

// Event to display books
document.addEventListener('DOMContentLoaded', UI.displayBooks);
// add book
document.querySelector('#book-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  const book = new Book(title, author);
  // add book to UI
  UI.addBookToList(book);
  // add Book to store
  Store.addBook(book);
  UI.clearFields();
});
// delete book
document.querySelector('.book-list').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target);
  //   Delete book msg
  UI.showAlert('Book Deleted', 'success');
});