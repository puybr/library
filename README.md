# 📕 Library Project - [Odin Project](https://www.theodinproject.com/courses/javascript/lessons/library)

```js
let myLibrary = ['The Hobbit', 'The Great Gatsby', 'Frankenstein', 'Jane Eyre'];

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.info = function () {
        return `${title} by ${author}, ${pages} pages, read: ${read}`;
    };
};

function addBookToLibrary() {
    // do stuff here
};

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 1137, true);
const books = document.getElementById('container');

for(let i=0; i<myLibrary.length; i++) {
    const content = document.createElement('div');
    content.innerText += myLibrary[i];
    content.classList.add('content');
    container.appendChild(content);
};
```

## [localStorage](https://developer.mozilla.org/en-US/docs/Web/API/Web_Storage_API/Using_the_Web_Storage_API)

```js
localStorage.setItem('myLibrary', JSON.stringify(myLibrary.books));
```

> 💾 `localStorage` only supports strings. Use `JSON.stringify()` and `JSON.parse()`.

```js
let myLibrary = [];
localStorage.setItem('myLibrary', JSON.stringify(myLibrary.books));

// Local Storage
function saveLocal() {
  localStorage.setItem('myLibrary', JSON.stringify(myLibrary.books));
};

function restoreLocal() {
  const books = JSON.parse(localStorage.getItem('myLibrary'))
  if (books) {
    myLibrary.books = books.map((book) => JSONToBook(book));
  } else {
    myLibrary.books = [];
  };
};

//...
let bookLibrary = JSON.parse(localStorage.getItem("myLibrary"));
// use direct access to set/get item:
localstorage.myLibrary = JSON.stringify(myLibrary);
let bookLibrary = JSON.parse(localStorage.myLibrary);

```

_ _ _

Styled with **[Bootstrap](https://getbootstrap.com/)** 🥰