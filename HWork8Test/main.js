class Person {
  constructor(name) {
    this.name = name;
  }
}

class Author extends Person {
  constructor(name, genre, book) {
    super(name);
    this.genre = genre;
    this.book = book;
  }
}

class Books {
  constructor(title, genre, author) {
    this.title = title;
    this.genre = genre;
    this.author = author;
  }
}
//napravio klase koje kreiraju objekte autor i knjige...

const Liberary = (() => {
  let _authors = [];
  let _books = [];

  const addAuthor = (name, genre, book) => {
    _authors.push(new Author(name, genre, book));
  }

  const searchAuthors = (authorName) => {
    const regexAuthors = new RegExp(authorName);
    const authors = _authors.filter((authors) => {
      return authors.name.match(regexAuthors);
    });
    return authors;
  }

  const addBook = (title, genre, author) => {
    _books.push(new Books(title, genre, author));
  }

  const searchBooks = (bookName) => {
    const regexBooks = new RegExp(bookName);
    const books = _books.filter((books) => {
      return books.title.match(regexBooks);
    });
    return books;
  }

  return {
    addA: addAuthor,
    srcA: searchAuthors,
    addB: addBook,
    srcB: searchBooks,
  }
})();
//ova funckija liberary je revealing module i u pitanju je self invoking funkcija... unutra imamo četiri privatne funckije i dvije privatne varijable (niza) u koje smjestamo objekte authors i books... 

const addNewRow = (table, cellF, cellS, cellT) => {
  const newRow = table.insertRow();

  const newCellF = newRow.insertCell();
  const newCellS = newRow.insertCell();
  const newCellT = newRow.insertCell();

  const newTextF = doc.createTextNode(cellF);
  const newTextS = doc.createTextNode(cellS);
  const newTextT = doc.createTextNode(cellT);

  newCellF.appendChild(newTextF);
  newCellS.appendChild(newTextS);
  newCellT.appendChild(newTextT);
}
//ovo je funckija za dodavanje novih redova u tabelu

const checkFields = (table, parF, parS, parT, addBookOrAuthor) => {
  if (table && parF && parS && parT && addBookOrAuthor) {
    switch (addBookOrAuthor) {
      case "author": {
        Liberary.addA(parF, parS, parT);
        addNewRow(table, parF, parS, parT);
        //cleanUpInputA(); funkcija za ciscenje input polja...
      }
        break;
      case "book": {
        Liberary.addB(parF, parS, parT);
        addNewRow(table, parF, parS, parT);
        //cleanUpInputB(); funkcija za ciscenje input polja...
      }
        break;
    }
  }
  else
    alert("Please fill up all needed fields!");
}
//funkcija koja nam sluzi za dodavanje autora/knjiga u biblioteku i tabelu...

/* const cleanUpInputA = () => {
  authorName.value = "";
  authorBook.value = "";
  authorGenre.value = "";
};

const cleanUpInputB = () => {
  bookTitle.value = "";
  bookGenre.value = "";
  bookAuthor.value = "";
} 
ovo su funckije za čišćenje input polja, rade kad se skinu komentari, ali ne sviđa mi se tu nešto...
*/

const searchTableManipulation = (result, tableHeader, searchBookorAuthor) => {
  while (tableHeader.childNodes.length > 1) {
    tableHeader.removeChild(tableHeader.lastChild);
  }

  switch (searchBookorAuthor) {
    case "author": {
      for (let i = 0; i < result.length; i++) {
        addNewRow(tableHeader, result[i].name, result[i].genre, result[i].book);
      }
    }
      break;
    case "book": {
      for (let i = 0; i < result.length; i++) {
        addNewRow(tableHeader, result[i].title, result[i].genre, result[i].author);
      }
    }
      break;
  }
}
//funkcija koja vrši pretragu i generiše novu tabelu rezultata za dati input...

const doc = document;
//cisto da skratim, mozda je ovo i visak, ali eto...

const authorForm = doc.getElementById("author-form");
const authorName = authorForm.firstElementChild;
const authorGenre = authorName.nextElementSibling;
const authorBook = authorGenre.nextElementSibling;
const authorSubmit = authorBook.nextElementSibling;
const authorSearch = doc.getElementById("author-search");
//sva polja i dugme za autora sam smjestio u varijable...

authorSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const table = doc.getElementById("author-table").getElementsByTagName('tbody')[0];
  const name = authorName.value;
  const book = authorBook.value;
  const genre = authorGenre.value;

  checkFields(table, name, genre, book, "author");
})
//event listener za dodavanje novog autora...

authorSearch.addEventListener("keyup", (e) => {
  e.preventDefault();

  const result = Liberary.srcA(e.target.value);
  const tableHeader = doc.getElementById("author-table").getElementsByTagName('tbody')[0];

  searchTableManipulation(result, tableHeader, "author");
})
//event listener za pretragu autora...

const bookForm = doc.getElementById("book-form");
const bookTitle = bookForm.firstElementChild;
const bookGenre = bookTitle.nextElementSibling;
const bookAuthor = bookGenre.nextElementSibling;
const bookSubmit = bookAuthor.nextElementSibling;
const bookSearch = doc.getElementById("book-search");
//sva polja i dugme za knjige sam smjestio u varijable...

bookSubmit.addEventListener("click", (e) => {
  e.preventDefault();

  const table = doc.getElementById("book-table").getElementsByTagName('tbody')[0];
  const title = bookTitle.value;
  const genre = bookGenre.value;
  const author = bookAuthor.value;

  checkFields(table, title, genre, author, "book");
})
//event listener za dodavanje nove knjige...

bookSearch.addEventListener("keyup", (e) => {
  e.preventDefault();

  const result = Liberary.srcB(e.target.value);
  const tableHeader = doc.getElementById("book-table").getElementsByTagName('tbody')[0];

  searchTableManipulation(result, tableHeader, "book");
})
//event listener za pretragu knjiga...

//u cijelom projektu su korištene arrow funckije, i trudio sam da kod bude što čišći i da ne radim DRY, pa sam čak možda i pretjerao sa funckijama...
//projekat je dosta interesantan
