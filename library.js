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
  
  myLibrary.forEach(book => {
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

    // Attach cells to the row
    row.appendChild(title);
    row.appendChild(author);
    row.appendChild(pages);
    row.appendChild(read);

    // Attach row to the table body
    newLibrary.appendChild(row);
  })

  oldLibrary.parentNode.replaceChild(newLibrary, oldLibrary);
}

displayLibrary();