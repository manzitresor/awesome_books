import Store from './store.js';

class UI {
  static displayBooks() {
    const storedBooks = Store.getBooks();
    const books = storedBooks;
    books.forEach((book) => UI.addBookToList(book));
  }

  static addBookToList(book) {
    const list = document.querySelector('.book-list');
    const row = document.createElement('tr');
    row.innerHTML = `
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td><a href="#" class="btn btn-danger btn-sm remove">remove</a></td>
        `;
    list.appendChild(row);
  }

  // static deleteBook(el) {
  //   if (el.classList.contains('delete')) {
  //     el.parentElement.parentElement.remove();
  //   }
  // }

  // static showAlert(message, classname) {
  //   const div = document.createElement('div');
  //   div.className = `alert alert-${classname}`;
  //   div.appendChild(document.createTextNode(message));

  //   const container = document.querySelector('.container');
  //   const form = document.querySelector('#book-form');
  //   container.insertBefore(div, form);
  //   setTimeout(() => {
  //     document.querySelector('.alert').remove();
  //   }, 3000);
  // }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
    document.querySelector('#isbn').value = '';
  }
}

export default UI;