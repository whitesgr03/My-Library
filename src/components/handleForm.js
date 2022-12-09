"use strict";

import { handleBook } from "../components/handleBook";

const handleForm = (() => {
    const validField = function (e) {
        const inputState = this.validity; // Constraint validation
        const type = this.type;
        this.setCustomValidity("");

        if (this.classList.length === 1) {
            this.classList.remove(this.classList[0]);
        }

        if (this.value.length === 0 || inputState.valueMissing) {
            return;
        }

        if (e.type === "focusout") {
            this.removeEventListener("focusout", handleForm.validField);
            this.addEventListener("input", validField);
        }

        const patterns = {
            text: "^[A-Za-z0-9]{1,15}$",
            number: "^[0-9]{1,3}$",
        };

        const regex = new RegExp(patterns[this.type], "g");
        const valid = regex.test(this.value);

        if (!valid || !inputState.valid) {
            switch (type) {
                case "text":
                    this.setCustomValidity(
                        "The value must be alphanumeric of 20 characters."
                    );
                    break;
                case "number":
                    this.setCustomValidity("The number must be less than 999");
                    break;
            }
            this.reportValidity();
            this.classList.add("error");
            return;
        }

        this.classList.add("success");
    };

    const submitData = function (e) {
        e.preventDefault();
        const formData = new FormData(this);
        const formProps = Object.fromEntries(formData);

        for (let key in formProps) {
            let field = this.elements[key];

            if (field.length) {
                field = Array.from(field).find((i) => i.checked);
            }

            if (!field.value) {
                field.removeEventListener("focusout", handleForm.validField);
                field.addEventListener("input", validField);
                field.setCustomValidity("The field must be correct value");
                field.reportValidity();
                field.classList.add("error");
                return;
            }

            if (field.classList.contains("error")) {
                validField.call(field, e);
                return;
            }
        }

        handleBook.createBook(formProps);
    };

    const closeForm = function (e) {
        const closeBtn = this.querySelector(".closeBtn");

        if (e.target === this || e.target === closeBtn) {
            this.firstElementChild.remove();
            this.classList.remove("show");
            this.removeEventListener("pointerdown", handleForm.closeForm);
        }
    };

    return {
        validField,
        submitData,
        closeForm,
    };
})();

export { handleForm };
