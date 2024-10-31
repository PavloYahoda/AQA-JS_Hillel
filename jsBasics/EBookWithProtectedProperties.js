import { BookWithProtectedProperties } from './BookWithProtectedProperties.js';

export class EBookWithProtectedProperties extends BookWithProtectedProperties {
    constructor(title, author, year, format) {
        super(title, author, year);
        this.format = format;
    }

    set format(value) {
        if (value !== "pdf" && value !== "epub" && value !== "txt") {
            console.log("Only pdf/epub/txt formats are available");
            return;
        }
        this._format = value;
    }

    get format() {
        return this._format;
    }

    static createEBook(bookInstance, formatOfFile) {
        return new EBookWithProtectedProperties(
            bookInstance.title, 
            bookInstance.author, 
            bookInstance.year, 
            formatOfFile
        );
    }    
}