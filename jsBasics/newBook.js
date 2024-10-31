export class BookWithProtectedProperties {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    set title(value) {
        if (typeof(value) !== "string") {
            console.log("Title property should be string");
            return;
        }
        this._title = value;
    }
    set author(value) {
        if (typeof(value) !== "string") {
            console.log("Author property should be string");
            return;
        }
        this._author = value;
    }
    set year(value) {
        if (typeof(value) !== "number") {
            console.log("Year property should be number");
            return;
        }
        if (value <= 0 || value >= 2025) {
            console.log("Year property should be greater than 0 and less than 2025");
            return;
        }
        this._year = value;
    }

    get title() {
        return this._title;
    }
    get author() {
        return this._author;
    }
    get year() {
        return this._year;
    }

    static getOldestBook(...args) {
        let oldestBook = "There is no book!";
        let temp = 2025;
        for (let arg of args ){
            if (arg.year <= temp){
                oldestBook = arg.title;
                temp = arg.year;
            }
        }
        return oldestBook;
    }
}
