const array = [1,10,14,2,4,5,43,34];

let copiedArrayWithSlice = array.slice().sort((a, b) => a - b);
let copiedArrayWithSpread = [...array].sort((a, b) => a - b);
let copiedArrayWithConcat = [].concat(array).sort((a, b) => a - b);
let copiedArrayWithArrayFrom = Array.from(array).sort((a, b) => a - b);

console.log(`
    Original:       ${array}
    with slice:     ${copiedArrayWithSlice} 
    with spread:    ${copiedArrayWithSpread}
    with concat:    ${copiedArrayWithConcat}
    with ArrayFrom: ${copiedArrayWithArrayFrom}
    `);