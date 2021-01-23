let myLibrary = [{
        name: "The Lord of the Rings",
        author: "Tolkien",
        pages: 182,
        read: false
    },
    {
        name: "Alice in Wonderland",
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
submit.addEventListener('click', (e) => {
    addBookToLibrary();

});

function addBookToLibrary() {
    console.log('hhhh')
}

function renderLibrary() {
    myLibrary.forEach((book) => {
        const content = document.createElement('div');
        content.innerHTML = `
        <tr>
        <td>${book.name}</td>
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