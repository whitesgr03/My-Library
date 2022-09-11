'use strict'

const formBgWrap = document.querySelector('.wrap')
const addBookButton = document.querySelector('.addBookButton')
const closeButton = document.querySelector('.closeButton')

formBgWrap.addEventListener('click', showField)
addBookButton.addEventListener('click', showField)
closeButton.addEventListener('click', showField)
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

function showField() {
    const wrap = document.querySelector('.wrap');
    wrap.classList.add('active')
}

