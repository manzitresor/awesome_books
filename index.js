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

const listBtn = document.querySelector('#list');
const bookList = document.querySelector('#bookList');
const contactInfo = document.querySelector('#contactInfo');
const bookForm = document.querySelector('#book-form');
const addBook = document.querySelector('#add');
const contact = document.querySelector('#contact');

// display books Event
listBtn.addEventListener('click', (e) => {
  e.preventDefault();
  bookList.style.display = 'block';
  contactInfo.style.display = 'none';
  bookForm.style.display = 'none';
});
// add book form Event
addBook.addEventListener('click', (e) => {
  e.preventDefault();
  bookForm.style.display = 'block';
  bookList.style.display = 'none';
  contactInfo.style.display = 'none';
});

// contact Event
contact.addEventListener('click', (e) => {
  e.preventDefault();
  contactInfo.style.display = 'block';
  bookForm.style.display = 'none';
  bookList.style.display = 'none';
});