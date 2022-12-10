"use strict";

const handleBook = (() => {
    const getBooks = () => {
        const books = localStorage.getItem("books");

        if (!books) return [];

        return JSON.parse(books);
    };

    const createBook = (data) => {
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

            container.createItem(book);
        } catch (error) {
            console.log(error);
        }
    };

    const updateBook = (data, id) => {
        try {
            const book = data;
            const books = getBooks();
            const index = books.findIndex((item) => item.id === id);

            books[index].title = book.title;
            books[index].author = book.author;
            books[index].pages = book.pages;
            books[index].isFinished = book.isFinished;

            localStorage.setItem("books", JSON.stringify(books));

            container.updateItem(books[index]);
        } catch (error) {
            console.log(error);
        }
    };

    const deleteBook = (book) => {
        try {
            const books = getBooks();
            const index = books.findIndex((item) => item.id === book.id);

            books.splice(index, 1);

            localStorage.setItem("books", JSON.stringify(books));

            container.deleteItem(book.id)

        } catch (error) {
            console.log(error);
        }
    };

    return {
        createBook,
        updateBook,
        deleteBook,
        getBooks,
    };
})();

export { handleBook };
