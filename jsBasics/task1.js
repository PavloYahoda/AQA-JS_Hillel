import { Book } from './Book.js';
import { EBook } from './EBook.js';
import { BookWithProtectedProperties } from './newBook.js';
import { EBookWithProtectedProperties } from './newEBook.js';

//Subtask 1:

console.log("*************");
console.log("No protected properties:");

let atlas = new Book("Atlas Shrugged", "Ann Ryan", 1957);
let go1984 = new Book("Nineteen Eighty-Four", "George Orwell", 1949);

atlas.printInfo();
go1984.printInfo();

//Subtask 2:
let deep = new EBook("Labyrinth of reflections", "Serhii Luk'yanenko", 1997, "pdf");

deep.printInfo();

//Subtask 3:

console.log("*************");
console.log("Protected properties. Validation of setters:");

let protDeep = new EBookWithProtectedProperties("Labyrinth of reflections", "Serhii Luk'yanenko", 1997, "pdf");
protDeep.title = 1984;
protDeep.author = 1984;
protDeep.year = 0;
protDeep.year = 2025;
protDeep.format = "abc";

console.log("*************");
console.log("Protected properties:");

protDeep.title = "Kolobok";
protDeep.author = "people";
protDeep.format = "txt";
console.log(`Title: ${protDeep.title}, author: ${protDeep.author}, format: ${protDeep.format}`);

//Subtask 4:

console.log("*************");
console.log("static:");

let oldestBook = BookWithProtectedProperties.getOldestBook(atlas, go1984, deep, protDeep);
console.log(oldestBook);

//Subtask 5:

let deepAsBook = new BookWithProtectedProperties("Labyrinth of reflections", "Serhii Luk'yanenko", 1997);
let deepAsEBook = EBookWithProtectedProperties.createEBook(deepAsBook, "epub");
console.log(deepAsEBook);