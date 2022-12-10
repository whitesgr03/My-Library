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