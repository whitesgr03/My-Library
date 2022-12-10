"use strict";

import { header } from "./header";
import { handleBook } from "../components/handleBook";

const container = (() => {
    const library = document.querySelector(".library");

    library.addEventListener("pointerdown", activeItemBtn);

    const createItem = (book) => {
        const template = `
            <input class="completeBtn" type="checkbox" />
                <div>
                    <p class="title"></p>
                    <div class="info">
                        <p>Author: <span class="author"></span></p>
                        <span>—</span>
                        <p><span class="pages">400</span> pages</p>
                    </div>
                </div>
                <div class="btnWrap">
                    <button class="editBtn">Edit</button>
                    <button class="deleteBtn">Delete</button>
                </div>
                <span class="stamp">Finished</span>
            </li>`;

        const li = document.createElement("li");
        li.className = "bookItem";
        li.innerHTML = template;
        li.id = book.id;

        if (+book.isFinished) {
            li.classList.add("finished");
        }

        li.querySelector(".title").textContent = book.title;
        li.querySelector(".author").textContent = book.author;
        li.querySelector(".pages").textContent = book.pages;

        library.append(li);
    };

    const updateItem = (book) => {
        const item = document.querySelector(`.bookItem[id='${book.id}']`);

        if (+book.isFinished) {
            item.classList.add("finished");
        } else {
            item.classList.remove("finished");
        }

        item.querySelector(".title").textContent = book.title;
        item.querySelector(".author").textContent = book.author;
        item.querySelector(".pages").textContent = book.pages;
    };

    const deleteItem = (id) => {
        const item = document.querySelector(`.bookItem[id='${id}']`);
        item.remove();
    }

    function activeItemBtn(e) {
        if (e.target.closest(".editBtn")) {
            const books = handleBook.getBooks();

            const book = books.find(
                (item) => item.id === +e.target.closest(".bookItem").id
            );

            if (!book) return;

            header.createBookForm(book);
        }
        if (e.target.closest(".deleteBtn")) {
            const books = handleBook.getBooks();

            const book = books.find(
                (item) => item.id === +e.target.closest(".bookItem").id
            );

            if (!book) return;

            handleBook.deleteBook(book);
        }
        if (e.target.closest(".completeBtn")) {
            const books = handleBook.getBooks();

            const book = books.find(
                (item) => item.id === +e.target.closest(".bookItem").id
            );

            if (!book) return;

            if (+book.isFinished) {
                book.isFinished = '0'
            } else {
                book.isFinished = "1";
            }

            handleBook.updateBook(book, book.id);
        }
    }

    return {
        createItem,
        updateItem,
        deleteItem,
    };
})();

export { container };
