'use strict'
const myLibrary = [];

const formBgWrap = document.querySelector('.wrap')
const addBookButton = document.querySelector('.addBookButton')
const closeButton = document.querySelector('.closeButton')
const library =  document.querySelector('.library')
const form = document.querySelector('form')


formBgWrap.addEventListener('click', showField)
addBookButton.addEventListener('click', showField)
closeButton.addEventListener('click', showField)
library.addEventListener('click', activeButton)

form.addEventListener('submit', addBookToLibrary)

class Book{
    constructor({ title, author, pages, isRead}) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.isRead = isRead;

        if (myLibrary.length > 0) {
            this.id = myLibrary.at(-1).id + 1;
        } else {
            this.id = 1;
        }
    }
    info() {
        return `The Hobbit by ${this.author} ${this.title}, ${this.pages} pages, ${this.read}`
    }
    changeStatus() {
        this.isRead = !this.isRead
    }
} 

function showField(e) {
    if (e.target === this) {
        formBgWrap.classList.toggle('active')
    }
}

function createElement(element, className, text, id) {
    let el = document.createElement(element);
    if (className) {
        el.classList.add(...className);
    }
    if (text) {
        el.textContent = text;
    }
    if (id) {
        el.dataset.id = id;
    }
    return el
}

function createTemplate(book) {
    const wrap = document.querySelector('.library');
    const props = [];

    for (let key in book) {
        props.push(key)
    }
    // first div
    const parent = createElement('div', ['book'], null, book.id)

    let child = null;
    let div = createElement('div')
    child = createElement('h2', [props[0]], book.title)
    div.appendChild(child)

    child = createElement('h3', [props[1]], book.author)
    div.appendChild(child)

    child = createElement('p', [props[2]], `Print length: ${book.pages} pages`)
    div.appendChild(child)

    parent.appendChild(div)

    // second div
    div = createElement('div')

    child = createElement(
        'button', 
        book.isRead ? [props[3], 'finished'] : [props[3]],
        book.isRead ? 'Read' : 'Not read',
    )
    div.appendChild(child)

    child = createElement('button', ['removeBook'], 'Remove', book.id)
    div.appendChild(child)

    parent.appendChild(div)

    wrap.appendChild(parent)
}

function addBookToLibrary(e) { 
    e.preventDefault();

    const data = [...new FormData(this)]
    const book = {}

    for (let [name, value] of data) {
        book[name] = value
    }

    const newBook = new Book(book)

    createTemplate(newBook);
    this.reset();
    myLibrary.push(newBook);
}

function activeButton(e) {
    if (e.target.className === 'removeBook') {
        deleteBookToLibrary(e.target.dataset.id);
        return
    }
    
    if (e.target.classList.contains('isRead')) {
        changeReadStatus(e.target, e.target.nextSibling.dataset.id);
        return
    }
}

function changeReadStatus(el, id) {
    const status = el.classList.contains('finished')

    if (status) {
        el.textContent = 'Not read'
    } else {
        el.textContent = 'Read'
    }

    el.classList.toggle('finished');

    const book = myLibrary.find(item => item.id === +id)
    book.changeStatus();
}

function deleteBookToLibrary(id) {
    const parent = document.querySelector(`.book[data-id="${id}"]`)
    parent.remove();

    const index = myLibrary.findIndex(item => item.id === +id)
    myLibrary.splice(index, 1)
}
