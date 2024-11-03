async function getTodo() {
    try{
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/1")
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(`Status code: ${response.status}`);
        }
    }catch(error){
        console.error(error)
    }
}

async function getUser() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
        if (response.status === 200) {
            return await response.json();
        } else {
            throw new Error(`Status code: ${response.status}`);
        }
    }catch(error){
        console.error(error)
    }
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