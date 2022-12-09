"use strict";

import "./css/index.css";
import { header } from "./layout/header";
import { handleBook } from "./components/handleBook";

const createLibrary = () => {

    let books = handleBook.getBooks() || [];

    // caches Dom
    const addBookBtn = document.querySelector(".addBtn");
    const init = () => {
        // event
        addBookBtn.addEventListener("pointerdown", showAddBookForm);
    };

    function showAddBookForm() {
        header.createBookForm();
        const overlay = document.querySelector(".overlay");
        overlay.classList.add("show");
    }

    return {
        init,
    };
};

export { createLibrary };