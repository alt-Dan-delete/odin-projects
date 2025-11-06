const books = document.querySelector('.books');
const addBook = document.querySelector('.add-book');
const modal = document.querySelector('#modal');
const span = document.querySelector('.close');

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.id = crypto.randomUUID();
}

window.addEventListener('click', (e) => {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
});

span.addEventListener('click', () => {
  modal.style.display = 'none';
});


addBook.addEventListener('click', () => {
  modal.style.display = 'block';
  document.querySelector('.form-title').textContent = 'Add Book';
  document.querySelector('.form-add-button').textContent = 'Add';
});

function addBookToLibrary(title, author, pages, read) {
  myLibrary.push(new Book(title, author, pages, read));
  renderBooks();
}

const addBookForm = document.querySelector('.add-book-form');
addBookForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const data = new FormData(e.target);
  let newBook = {};
  for (let [name, value] of data) {
    if (name === 'book-read') {
      newBook['book-read'] = true;
    } else {
      newBook[name] = value || '';
    }
  }

  if (!newBook['book-read']) {
    newBook['book-read'] = false;
  }
  if (document.querySelector('.form-title').textContent === 'Edit Book') {
    let id = e.target.id;
    let editBook = myLibrary.filter((book) => book.id == id)[0];
    editBook.title = newBook['book-title'];
    editBook.author = newBook['book-author'];
    editBook.pages = newBook['book-pages'];
    editBook.read = newBook['book-read'];
    renderBooks();
  } else {
    addBookToLibrary(
      newBook['book-title'],
      newBook['book-author'],
      newBook['book-pages'],
      newBook['book-read']
    );
  }

  addBookForm.reset();
  modal.style.display = 'none';
});



const myLibrary = [];

const book1 = new Book('C++ Programming Language', 'Bjarne Stroustrup', 1376, false);
const book2 = new Book('C++ Primer', 'Stanley Lippman', 976, true);
const book3 = new Book('The Linux Command Line 2nd Edition', 'William Shotts', 504, true);
myLibrary.push(book1);
myLibrary.push(book2);
myLibrary.push(book3);


function createBookElement(el, content, className) {
  const element = document.createElement(el);
  element.textContent = content;
  element.setAttribute('class', className);
  return element;
}

function createReadElement(bookItem, book) {  
  let read = document.createElement('p');
  read.setAttribute('class', 'book-read');
  read.textContent = "Read: "
  let input = document.createElement('input');
  input.type = 'checkbox';
  input.addEventListener('click', (e) => {
    if (e.target.checked) {
      bookItem.setAttribute('class', 'card book read-checked');
      book.read = true;
      renderBooks();
    } else {
      bookItem.setAttribute('class', 'card book read-unchecked');
      book.read = false;
      renderBooks();
    }
  });
  if (book.read) {
    input.checked = true;
    bookItem.setAttribute('class', 'card book read-checked');
  }
  read.appendChild(input);
  return read;
}

function createEditIcon(book) {
  const editIcon = document.createElement('img');
  editIcon.src = './icons/edit.svg'
  editIcon.setAttribute('class', 'edit-icon');
  editIcon.addEventListener('click', () => {
    fillOutEditForm(book);
  });
  return editIcon;
}

function fillOutEditForm(book) {
  modal.style.display = 'block';
  document.querySelector('.form-title').textContent = 'Edit Book';
  document.querySelector('.form-add-button').textContent = 'Submit';
  document.querySelector('.add-book-form').setAttribute('id', book.id);
  document.querySelector('#book-title').value = book.title || '';
  document.querySelector('#book-author').value = book.author || '';
  document.querySelector('#book-pages').value = book.pages || '';
  document.querySelector('#book-read').checked = book.read;
}

function deleteBook(index) {
  myLibrary.splice(index, 1);
  renderBooks();
}

function createBookItem(book, index) {
  const bookItem = document.createElement('div');  
  bookItem.setAttribute('id', index);
  bookItem.setAttribute('key', index);
  bookItem.setAttribute('class', 'card book');
  bookItem.appendChild(createBookElement('h3', `${book.title}`, 'book-title'));
  bookItem.appendChild(createBookElement('p', `Author: ${book.author}`, 'book-author'));
  bookItem.appendChild(createBookElement('p', `Pages: ${book.pages}`, 'book-pages'));  
  bookItem.appendChild(createReadElement(bookItem, book));
  bookItem.appendChild(createBookElement('button', 'X', 'delete'));
  bookItem.appendChild(createEditIcon(book));
  bookItem.querySelector('.delete').addEventListener('click', () => {
    deleteBook(index);
  });
  books.insertAdjacentElement('afterbegin', bookItem);  
}

function renderBooks() {
  books.textContent = '';
  myLibrary.map((book, index) => {
    createBookItem(book, index);
  });
}

renderBooks();