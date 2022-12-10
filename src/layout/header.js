"use strict";

import { handleForm } from "../components/handleForm";

const header = (() => {
    const overlay = document.querySelector(".overlay");

    const createBookForm = (book) => {
        const template = `
            <fieldset>
                <button type="button" class="closeBtn"></button>
                <legend>Add New Book!</legend>
                <ul>
                    <li>
                        <label for="bookTitle">Title</label>
                        <input
                            type="text"
                            id="bookTitle"
                            name="title"
                            title="The title must be alphanumeric."
                            maxlength="100"
                            pattern="^[A-Za-z1-9]{1,100}$"
                            required
                        />
                    </li>
                    <li>
                        <label for="bookAuthor">Author</label>
                        <input
                            type="text"
                            id="bookAuthor"
                            name="author"
                            title="The author must be alphanumeric."
                            maxlength="20"
                            pattern="^[A-Za-z1-9]{1,20}$"
                            required
                        />
                    </li>
                    <li>
                        <label for="bookPages">Pages</label>
                        <input
                            type="number"
                            id="bookPages"
                            name="pages"
                            title="The author must be alphanumeric."
                            max="9999"
                            maxlength="4"
                            required
                        />
                    </li>
                    <li>
                        <p>Have you finished it?</p>
                        <div>
                            <label class="finish" for="finished">
                                Yes
                                <input
                                    type="radio"
                                    id="finished"
                                    name="isFinished"
                                    value="1"
                                    required
                                />
                            </label>
                            <label class="finish" for="unfinished">
                                Not yet
                                <input
                                    type="radio"
                                    id="unfinished"
                                    name="isFinished"
                                    value="0"
                                    required
                                    checked
                                />
                            </label>
                        </div>
                    </li>
                </ul>
                <button type="submit">Add Book</button>
            </fieldset>`;

        const form = document.createElement("form");
        form.innerHTML = template;
        form.setAttribute("novalidate", true);

        if (book) {
            form.dataset.bookId = book.id;
            form.elements.title.value = book.title;
            form.elements.author.value = book.author;
            form.elements.pages.value = book.pages;

            for (let field of form.elements.isFinished) {
                if (field.value === book.isFinished) {
                    field.checked = true;
                }
            }
        }

        overlay.append(form);

        const inputs = Array.from(
            form.querySelectorAll("input:not([type='radio'])")
        );

        for (let field of inputs) {
            field.addEventListener("focusout", handleForm.validField);
        }
        form.addEventListener("submit", function (e) {
            const result = handleForm.submitData.call(form, e);
            if (result) {
                closeBookForm();
            }
        });

        overlay.classList.add("show");
    };

    return {
        createBookForm,
    };
})();

export { header };


