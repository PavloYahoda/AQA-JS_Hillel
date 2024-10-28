// Створіть масив об'єктів users де обєкти мають довільні властивості (наприклад, name, email, age, тощо).
// Використовуючи цикл for...of, переберіть всі елементи масиву та виведіть їхні значення в консоль.
// Зробіть деструктуризацію в циклі

let users = [
    {name: "Jack Black", email: "jack.black@mail.co", age: 39},
    {name: "John Gaspar", email: "john.gaspar@mail.co", age: 53},
    {
        name: "Hankey Bannister", 
        email: "hankey.bannister@mail.co", 
        age: 28, 
        overridedToString: (users) =>  {
            for (let user of users){
                const {name, email, age} = user;
                console.log(name);
                console.log(email);
                console.log(age);
                console.log("***********");
            }
        }
    }
];

// for (let user of users){
//     for (let key in user){
//         console.log(key + ': ' + user[key]);
//     }
// };

// //or
// console.log("*************************************");
// for (let user of users){
//     const {name, email, age} = user;
//     console.log(name);
//     console.log(email);
//     console.log(age);
// }

for (let user of users) {
    if (typeof user.overridedToString === 'function') {
        user.overridedToString(users);
        break;
    }
}
