"use strict";

import { handleForm } from "../components/handleForm";

const header = (() => {
    const overlay = document.querySelector(".overlay");

    const createBookForm = () => {
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
                            maxlength="20"
                            pattern="^[A-Za-z1-9]{1,20}$"
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
                            maxlength="15"
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
                            max="999"
                            maxlength="3"
                            required
                        />
                    </li>
                    <li>
                        <p>Have you read it?</p>
                        <div>
                            <label class="read" for="read">
                                Yes
                                <input
                                    type="radio"
                                    id="read"
                                    name="isRead"
                                    value="1"
                                    required
                                />
                            </label>
                            <label class="read" for="unread">
                                Not yet
                                <input
                                    type="radio"
                                    id="unread"
                                    name="isRead"
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

        overlay.append(form);

        const inputs = Array.from(form.querySelectorAll("input:not([type='radio'])"));

        for (let field of inputs) {
            field.addEventListener("focusout", handleForm.validField);
        }
        form.addEventListener("submit", handleForm.submitData);
        overlay.addEventListener("pointerdown", handleForm.closeForm);
    };

    return {
        createBookForm,
    };
})();

export { header };


