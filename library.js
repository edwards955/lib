const myLibrary = [
  new Book("Harrow County", "Cullen Bunn", 300, 'not yet read'),
  new Book("Broken Sky", "Chris Wooding", 200, 'read'),
  new Book("V For Vendetta", "Alan Moore", 250, "not yet read"),
];

function Book(title, author, pages, read) {
  this.title = title;
  this.author = author;
  this.pages = pages;
  this.read = read;
  this.info = function() {
    return `${this.title} by ${this.author}, ${pages} pages, ${read}`;
  }
}

function addBookToLibrary(title, author, pages, read) {
  let book = new Book(title, author, pages, read);
  myLibrary.push(book);
  displayLibrary();
  return "Book added";
}

function displayLibrary() {
  const oldLibrary = document.querySelector('.library-body');
  const newLibrary = document.createElement('tbody');
  newLibrary.classList.toggle('library-body');
  
  myLibrary.forEach((book, index) => {
    // Create row for book info
    let row = document.createElement('tr');
    
    // Create cells for book info
    let title = document.createElement('td');
    title.textContent = book.title;
    let author = document.createElement('td');
    author.textContent = book.author;

    let pages = document.createElement('td');
    pages.textContent = book.pages;

    let read = document.createElement('td');
    read.textContent = book.read;

    let remove = document.createElement('td');
    let removeButton = document.createElement('button');
    removeButton.type = 'button';
    removeButton.textContent = 'Remove';
    removeButton.value = index;
    remove.appendChild(removeButton);

    // Attach cells to the row
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);
    row.appendChild(remove);

    // Attach row to the table body
    newLibrary.appendChild(row);
  })

  oldLibrary.parentNode.replaceChild(newLibrary, oldLibrary);
}

const dialog = document.querySelector('.newBookForm');
const form = document.querySelector('form');
const newBookButton = document.querySelector('.addNewBook');
const cancelButton = document.querySelector('.cancelButton');
const submitBookButton = document.querySelector('.submitBookButton');
const titleInput = document.querySelector('#title');
const authorInput = document.querySelector('#author');
const pagesInput = document.querySelector('#pages');
const readInput = document.querySelector('#read');

newBookButton.addEventListener('click', () => {
  dialog.showModal();
})

cancelButton.addEventListener('click', () => {
  dialog.close();
})

submitBookButton.addEventListener('click', (e) => {
  e.preventDefault();
  addBookToLibrary(
    titleInput.value,
    authorInput.value,
    pagesInput.value,
    readInput.value
  )
  form.reset();
  dialog.close();
})

displayLibrary();