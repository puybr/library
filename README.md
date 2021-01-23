# Library Project - [Odin Project](https://www.theodinproject.com/courses/javascript/lessons/library)

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

const theHobbit = new Book('The Hobbit', 'J.R.R. Tolkien', 182, true);
const books = document.getElementById('container');

for(let i=0; i<myLibrary.length; i++) {
    const content = document.createElement('div');
    content.innerText += myLibrary[i];
    content.classList.add('content');
    container.appendChild(content);
};
```