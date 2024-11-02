// В цьому завданні вам потрібно використовувати then() та catch() для обробки результатів виконання промісу
// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/todos/1>
// Функція повинна повертати як результат Promise що повертає об’єкт todo

// Напишіть функцію яке буде робити запит до серверу за цим ендпоінтом
// <https://jsonplaceholder.typicode.com/users/1>
// Функція повинна повертати як результат Promise що повертає об’єкт user

// Викорситайте методи Promise.all та Promise.race передавши їм як аргумент масив з викликами функцій з п.п. 1-2. Присвойте значення отримані від цих виразів до змінних


function getTodo() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/todos/1")
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(`Status code: ${response.status}`);
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

function getUser() {
    return new Promise((resolve, reject) => {
        fetch("https://jsonplaceholder.typicode.com/users/1")
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(`Status code: ${response.status}`);
                }
            })
            .then(data => resolve(data))
            .catch(error => reject(error));
    });
}

const allResults = Promise.all([getTodo(), getUser()])
    .then(results => {
        console.log("Promise.all results:", results);
        return results; 
    })
    .catch(console.error);

const raceResult = Promise.race([getTodo(), getUser()])
    .then(result => {
        console.log("Promise.race result:", result);
        return result; 
    })
    .catch(console.error);