import { Book } from './Book.js';
import { EBook } from './EBook.js';
import { BookWithProtectedProperties } from './BookWithProtectedProperties.js';
import { EBookWithProtectedProperties } from './EBookWithProtectedProperties.js';

//Subtask 1:

console.log("*************");
console.log("Subtask 1:");

let atlas = new Book("Atlas Shrugged", "Ann Ryan", 1957);
let go1984 = new Book("Nineteen Eighty-Four", "George Orwell", 1949);

atlas.printInfo();
go1984.printInfo();

//Subtask 2:

console.log("*************");
console.log("Subtask 2:");
let deep = new EBook("Labyrinth of reflections", "Serhii Luk'yanenko", 1997, "pdf");

deep.printInfo();

//Subtask 3:

console.log("*************");
console.log("Subtask 3. Validation of setters:");

let protDeep = new EBookWithProtectedProperties("Labyrinth of reflections", "Serhii Luk'yanenko", 1997, "pdf");
protDeep.title = 1984;
protDeep.author = 1984;
protDeep.year = 0;
protDeep.year = 2025;
protDeep.format = "abc";

console.log("*************");
console.log("Subtask 3:");

protDeep.title = "Kolobok";
protDeep.author = "people";
protDeep.format = "txt";
console.log(`Title: ${protDeep.title}, author: ${protDeep.author}, format: ${protDeep.format}`);

//Subtask 4:

console.log("*************");
console.log("Subtask 4. Static:");

let oldestBook = BookWithProtectedProperties.getOldestBook(atlas, go1984, deep, protDeep);
console.log(oldestBook);

//Subtask 5:

console.log("*************");
console.log("Subtask 5. Static:");
let deepAsBook = new BookWithProtectedProperties("Labyrinth of reflections", "Serhii Luk'yanenko", 1997);
let deepAsEBook = EBookWithProtectedProperties.createEBook(deepAsBook, "epub");
console.log(deepAsEBook);