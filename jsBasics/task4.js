// Створіть об'єкт person з такими властивостями:
// firstName: рядок, представляє ім'я особи.
// lastName: рядок, представляє прізвище особи.
// age: число, представляє вік особи.
// Додайте до об'єкта person властивість email, яка буде містити електронну пошту особи.
// Видаліть властивість age з об'єкта person.
// Виведіть оновлений об'єкт person в консоль.

let person = {
    firstName: "Jack",
    lastName: "Black",
    age: 39
};

console.log("Before: ", person);

person.email = "jack.black@mail.co";
delete person.age;

console.log("After: ", person);