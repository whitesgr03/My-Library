"use strict";

const handleBook = (() => {
    const getBooks = () => {
        const books = localStorage.getItem("books");

        if (!books) return [];

        return JSON.parse(books);
    };

    const createBook = function (data) {
        try {
            const book = data;
            const books = getBooks();

            if (books.length > 0) {
                book.id = books.at(-1).id + 1;
            } else {
                book.id = 1;
            }

            books.push(book);

            localStorage.setItem("books", JSON.stringify(books));
        } catch (error) {
            console.log(error);
        }
    };

    return {
        createBook,
        getBooks,
    };
})();

export { handleBook };
