"use strict";

import './css/index.css'

const myLibrary = localStorage.getItem(library) || [];

// caches Dom
const addBookBtn = document.querySelector(".addBtn");
const library = document.querySelector(".library");

// event
library.addEventListener("click", activeButton);
addBookBtn.addEventListener("click", showField);

// formBgWrap.addEventListener("click", showField);
// closeButton.addEventListener("click", showField);
// form.addEventListener("submit", addBookToLibrary);



// class Book {
//     constructor({ title, author, pages, isRead }) {
//         this.book = {
//             title,
//             author,
//             pages,
//             isRead,
//         };
//         if (myLibrary.length > 0) {
//             this.book.id = myLibrary.at(-1).id + 1;
//         } else {
//             this.book.id = 1;
//         }
//     }
//     data() {
//         return this.book;
//     }
//     changeStatus() {
//         this.isRead = !this.isRead;
//     }
//     delete() {
//         const parent = document.querySelector(`.book[data-id="${this.book.id}"]`);
//         parent.remove();

//         const index = myLibrary.findIndex((item) => item.id === this.book.id);
//         myLibrary.splice(index, 1);
//         // reload
//     }
// }

// function showField(e) {
//     if (e.target === this) {
//         formBgWrap.classList.toggle("active");
//     }
// }

function activeButton(e) {
    if (e.target.className === "removeBook") {
        // 取得 id 後, 到儲存庫驗證是否有此筆資料
        // 甚至可以做一些 hash 的驗證
        // 確認有才執行刪除

        // 所以此處應該是驗證
        // book.delete 就是刪除

        const id = e.target.dataset.id;
        const book = myLibrary.find((item) => item.id === +id);

        if (!book || !id) return;

        book.delete();
        return;
    }

    if (e.target.classList.contains("isRead")) {
        changeReadStatus(e.target, e.target.nextSibling.dataset.id);
        return;
    }
}

function changeReadStatus(el, id) {
    const status = el.classList.contains("finished");

    if (status) {
        el.textContent = "Not read";
    } else {
        el.textContent = "Read";
    }

    el.classList.toggle("finished");

    const book = myLibrary.find((item) => item.id === +id);
    book.changeStatus();
}

// function deleteBookToLibrary(id) {
//     const parent = document.querySelector(`.book[data-id="${id}"]`)
//     parent.remove();

//     const index = myLibrary.findIndex(item => item.id === +id)
//     myLibrary.splice(index, 1)
// }

// function addBookToLibrary(e) {
//     e.preventDefault();

//     const data = [...new FormData(this)];
//     const book = {};

//     for (let [key, value] of data) {
//         book[key] = value;
//     }

//     let newBook = new Book(book);

//     console.log(newBook);

//     // createTemplate(newBook);
//     // this.reset();
//     // myLibrary.push(newBook);
// }

// function createTemplate(book) {
//     const props = [];

//     for (let key in book) {
//         props.push(key);
//     }
//     // first div
//     const parent = createElement("div", ["book"], null, book.id);

//     let child = null;
//     let div = createElement("div");
//     child = createElement("h2", [props[0]], book.title);
//     div.appendChild(child);

//     child = createElement("h3", [props[1]], book.author);
//     div.appendChild(child);

//     child = createElement("p", [props[2]], `Print length: ${book.pages} pages`);
//     div.appendChild(child);

//     parent.appendChild(div);

//     // second div
//     div = createElement("div");

//     child = createElement(
//         "button",
//         book.isRead ? [props[3], "finished"] : [props[3]],
//         book.isRead ? "Read" : "Not read"
//     );
//     div.appendChild(child);

//     child = createElement("button", ["removeBook"], "Remove", book.id);
//     div.appendChild(child);

//     parent.appendChild(div);

//     library.appendChild(parent);
// }

// function createElement(element, className, text, id) {
//     let el = document.createElement(element);
//     if (className) {
//         el.classList.add(...className);
//     }
//     if (text) {
//         el.textContent = text;
//     }
//     if (id) {
//         el.dataset.id = id;
//     }
//     return el;
// }

// 新增要做的是 Xss
// 更新要做的是驗證和 Xss
// 刪除要做的是驗證
// 讀取直接取即可
