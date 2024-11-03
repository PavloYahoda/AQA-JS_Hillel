//We don't need to create two classes because we can use URL as parameter

class Helper {

    static getData(url) {
        return fetch(url)
            .then(response => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error(`Status code: ${response.status}`);
                }
            });
    }
}

const urlForToDo = "https://jsonplaceholder.typicode.com/todos/1";
const urlForUser = "https://jsonplaceholder.typicode.com/users/1";

const allResults = Promise.all([Helper.getData(urlForToDo), Helper.getData(urlForUser)])
    .then(results => {
        console.log("Promise.all results:", results);
        return results; 
    })
    .catch(console.error);

const raceResult = Promise.race([Helper.getData(urlForToDo), Helper.getData(urlForUser)])
    .then(result => {
        console.log("Promise.race result:", result);
        return result; 
    })
    .catch(console.error);