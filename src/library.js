"use strict";

import "./css/index.css";
import { header } from "./layout/header";
import { container } from "./layout/container";
import { handleBook } from "./components/handleBook";

const createLibrary = () => {
    // caches Dom
    const addBookBtn = document.querySelector(".addBtn");

    // event
    addBookBtn.addEventListener("pointerdown", () => {
        header.createBookForm();
    });

    const init = () => {
        const books = handleBook.getBooks();

        for (let item of books) {
            container.createItem(item);
        }
    };

    return {
        init,
    };
};

export { createLibrary };
