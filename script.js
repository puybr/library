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
        read: true
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

const submit = document.querySelector("button");
submit.addEventListener('click', addBookToLibrary);

function addBookToLibrary(e) {
    console.log('Add Book');
    const newBook = new Book('The Hobbit', 'J.R.R. Tolkien', 182, true);
    myLibrary.push(newBook);
    renderLibrary();
}

function renderLibrary() {
    myLibrary.forEach((book) => {
        const content = document.createElement('div');
        content.innerHTML = `
        <tr>
        <td>${book.title}</td>
        <td>${book.author}</td>
        <td>${book.pages}</td>
        <td>${book.read}</td>
        </tr>
        `;
        content.classList.add('content');
        container.appendChild(content);

    })
};

renderLibrary();