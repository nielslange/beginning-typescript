// Strings
const greeting: string = "Hello, Laracasts!";

// Numbers
const year: number = 2021;

// Functions
const addTwoNumbers = (a: number, b: number): number => a + b;

interface User {
  id: string;
  name: string;
}

interface Book {
  id: string;
  name: string;
  releaseDate?: Date;
}

const getUserById = (id: string): User => ({
  id,
  name: "Niels Lange",
});
const getBookById = (id: string): Book => ({
  id,
  name: "Niels Lange",
});

const user: User = getUserById("user-1");
const book: Book = getBookById("book-1");

const saveUser = (user: User) =>
  console.log("saving user", {
    prop1: user.id,
    prop2: user.name,
  });
const saveBook = (book: Book) =>
  console.log("saving user", {
    prop1: book.id,
    prop2: book.name,
    prop3: book.releaseDate?.toISOString(),
  });

saveUser(user);
saveBook(user);
