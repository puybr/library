"use strict";

let myLibrary = [{
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        pages: 1137,
        read: false
    },
    {
        title: "Alice in Wonderland",
        author: "Lewis Caroll",
        pages: 312,
        read: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        read: false
    },
    {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        pages: 154,
        read: false
    },
    {
        title: "The Naked Lunch",
        author: "William S. Burroughs",
        pages: 112,
        read: false
    },
    {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        pages: 240,
        read: true
    }
];//dummy data

// BOOK CLASS
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;

    };
};


function clearLocal() {
    localStorage.clear();
    myLibrary = [{
        title: "The Lord of the Rings",
        author: "J. R. R. Tolkien",
        pages: 1137,
        read: false
    },
    {
        title: "Alice in Wonderland",
        author: "Lewis Caroll",
        pages: 312,
        read: true
    },
    {
        title: "The Great Gatsby",
        author: "F. Scott Fitzgerald",
        pages: 180,
        read: false
    },
    {
        title: "Slaughterhouse-Five",
        author: "Kurt Vonnegut",
        pages: 154,
        read: false
    },
    {
        title: "The Naked Lunch",
        author: "William S. Burroughs",
        pages: 112,
        read: false
    },
    {
        title: "The Catcher in the Rye",
        author: "J. D. Salinger",
        pages: 240,
        read: true
    }
];//dummy data
    restoreLocal();
    renderLibrary();
};
  

const bookTitle = document.querySelector('#title');
const bookAuthor = document.querySelector('#author');
const bookPages = document.querySelector('#pages');
const bookStatus = document.querySelector('#read');
const bookTable = document.querySelector("#book-table");
const addLibraryBook = document.querySelector("#submit");
const bookLibrary = document.querySelector('#myLibraryGrid')
const openFormButton = document.querySelector('#openFormButton');
const resetFormButton = document.querySelector('#resetFormButton');
const cancelForm = document.querySelector('#cancel');
const inputs = document.querySelectorAll('input');


function restoreLocal() {
    localStorage.setItem('myLibrary', JSON.stringify(myLibrary));
  };


openFormButton.addEventListener('click', openBookForm);
resetFormButton.addEventListener('click', clearLocal);
cancelForm.addEventListener('click', cancelBook);

function cancelBook() {
    document.getElementById('myLibraryForm').style.display = 'none';
    document.getElementById('myLibraryHeader').style.display = 'block';
    document.getElementById('myLibraryGrid').style.display = 'block';
};

function openBookForm(e) {
    e.preventDefault();
    addLibraryBook.removeEventListener('click', addBookToLibrary)
    document.getElementById('myLibraryForm').style.display = 'block';
    document.getElementById('myLibraryHeader').style.display = 'none';
    document.getElementById('myLibraryGrid').style.display = 'none';

};

// RegEx Patterns
const patterns = {
    title: /^[a-z\d]{5,30}$/i,
    author: /^[a-z\d]{5,30}$/i,
    pages: /^\d+$/
};

inputs.forEach((input) => {
    input.addEventListener('keyup', (event) => {
        // console.log(event.target.attributes.name.value);
        validate(event.target, patterns[event.target.name]); // parameters of the validate function
    });
});

// Validation Function 
function validate(field,regex) {
    addLibraryBook.addEventListener('click', addBookToLibrary)
    if (regex.test(field.value)) { // test() method tests for a match in a string
        field.className = 'valid'; // add a new css class
        document.querySelector('#myLibraryForm').className = 'valid';
    } else {
        field.className = 'invalid';
        document.querySelector('#myLibraryForm').className = 'invalid';
    };
};  

// Add a Book to Library Function
function addBookToLibrary(e) {
    e.preventDefault();
    const newBook = new Book(bookTitle.value, bookAuthor.value, bookPages.value, bookStatus.checked);
    bookTitle.value = '';
    bookAuthor.value = '';
    bookPages.value = '';
    bookStatus.checked = false;
    myLibrary.push(newBook);
    restoreLocal();
    renderLibrary();
    document.getElementById('myLibraryHeader').style.display = 'block';
    document.getElementById('myLibraryGrid').style.display = 'block';
};


function renderLibrary() {
    bookTable.innerHTML = ``;
    document.getElementById('myLibraryForm').style.display = 'none';
    document.getElementById('myLibraryHeader').style.display = 'block';
    document.getElementById('myLibraryGrid').style.display = 'block';
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
    myLibrary.forEach((book) => {
        if (book.read === true) {
            const myBook = `
            <div class="col-md-4">
            <div class="card mb-4 box-shadow">
            <div class="card-body">        
            <h5 class="card-title">${book.title}</h5>
            <div class="card-body">
            <p class="text-muted">${book.author}</p>
            <i class="bi bi-book"></i>
            <p class="text-muted">Pages: ${book.pages}</p>
            <div class="checkbox mb-3">
            <label><input checked type="checkbox" value="read" class="status" id="read"> Read</label>
            </div>   
            <button class="btn btn-sm btn-outline-secondary" class="delete">Delete</button>
            </div>
            </div>
            </div>
            `;
            bookTable.insertAdjacentHTML("afterbegin", myBook);
                    
        } else {
            const myBook = `
            <div class="col-md-4">
            <div class="card mb-4 box-shadow">
            <div class="card-body">        
            <h5 class="card-title">${book.title}</h5>
            <div class="card-body">
            <p class="text-muted">${book.author}</p>
            <i class="bi bi-book"></i>
            <p class="text-muted">Pages: ${book.pages}</p>
            <div class="checkbox mb-3">
            <label><input type="checkbox" value="read" class="status" id="read"> Read</label>
            </div>   
            <button class="btn btn-sm btn-outline-secondary" class="delete">Delete</button>
            </div>
            </div>
            </div>
            `;
            bookTable.insertAdjacentHTML("afterbegin", myBook);
        }; 
    });
};


bookLibrary.addEventListener('click', (e) => {
    e.preventDefault();
    myLibrary = JSON.parse(localStorage.getItem('myLibrary'))
    // Listen for read status change
    if (e.target.classList.contains('status')) {
        const statusTargetName = e.target.parentNode.parentNode.parentNode.parentNode.childNodes[1].innerText;
        const statusIndex = getBook(myLibrary, statusTargetName);
        console.log(myLibrary[statusIndex].read);
        if (myLibrary[statusIndex].read === true) {
            myLibrary[statusIndex].read = false;
        } else {
            myLibrary[statusIndex].read = true; 
        };
        restoreLocal();
        renderLibrary();
    };
    // Listen for Delete Button event
    if (e.target.innerText === 'Delete') {
        const deleteTargetName = e.target.parentNode.parentNode.childNodes[1].innerText;
        let deleteIndex = getBook(myLibrary, deleteTargetName);
        deleteBook(deleteIndex);
        restoreLocal();
        renderLibrary();

    };
});


// returns the matching index position in the array ...
function getBook(libraryArray, bookName) {
    for (book of libraryArray) {
        if (bookName === book.title) {
            return libraryArray.indexOf(book);
        };
    };
};

// delete a Book
function deleteBook(index) {
    myLibrary.splice(index, 1);
};

renderLibrary();
