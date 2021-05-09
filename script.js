let myLibrary = [{
        title: "The Lord of the Rings",
        author: "Tolkien",
        pages: 182,
        read: false
    },
    {
        title: "Alice in Wonderland",
        author: "Lewis Caroll",
        pages: 192,
        read: false
    }
];

// BOOK CLASS
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    };
};

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#read');
const bookTable = document.querySelector("#book-table");
const submitButton = document.querySelector("#submit");
const bookLibrary = document.querySelector('table');


submitButton.addEventListener('click', addBookToLibrary);

// Listen for Del Button event
bookLibrary.addEventListener('click', (e) => {
    const currentTarget = e.target.parentNode.parentNode.childNodes[1];
    if (e.target.innerText === 'Del') {
        let index = getBook(myLibrary, currentTarget.innerText);
        deleteBook(index);
        renderLibrary();
    };
});

// Get the matching index position in the array ...
function getBook(libraryArray, bookName) {
    for (book of libraryArray) {
        if (bookName === book.title) {
            return libraryArray.indexOf(book);
        };
    };
};

// Delete a Book
function deleteBook(index) {
    myLibrary.splice(index, 1);
};

// Submit a Book Function
function addBookToLibrary(e) {
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
    bookStatus.checked = false;
    myLibrary.push(newBook);
    renderLibrary();
}

function renderLibrary() {
    bookTable.innerHTML = '';
    myLibrary.forEach((book) => {
        if (book.read === true) {
            const myBook = `
            <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" class="status" checked></td>
            <td><button class="delete">Del</button></td>
            </tr>
            `;
            bookTable.insertAdjacentHTML("afterbegin", myBook);          
        } else {
            const myBook = `
            <tr>
            <td>${book.title}</td>
            <td>${book.author}</td>
            <td>${book.pages}</td>
            <td><input type="checkbox" class="status"></td>
            <td><button class="delete">Del</button></td>
            </tr>
            `;
            bookTable.insertAdjacentHTML("afterbegin", myBook);
        } 
    });
};



renderLibrary();