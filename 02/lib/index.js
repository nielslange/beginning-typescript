"use strict";
const greeting = "Hello, Laracasts!";
const year = 2021;
const addTwoNumbers = (a, b) => a + b;
const getUserById = (id) => ({
    id,
    name: "Niels Lange",
});
const getBookById = (id) => ({
    id,
    name: "Niels Lange",
});
const user = getUserById("user-1");
const book = getBookById("book-1");
const saveUser = (user) => console.log("saving user", {
    prop1: user.id,
    prop2: user.name,
});
const saveBook = (book) => {
    var _a;
    return console.log("saving user", {
        prop1: book.id,
        prop2: book.name,
        prop3: (_a = book.releaseDate) === null || _a === void 0 ? void 0 : _a.toISOString(),
    });
};
saveUser(user);
saveBook(user);
//# sourceMappingURL=index.js.map