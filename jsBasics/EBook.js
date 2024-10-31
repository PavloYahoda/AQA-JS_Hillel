import { Book } from './Book.js';

export class EBook extends Book{
    constructor(title, author, year, format){
        super(title, author, year);
        this.format = format;
    }
    printInfo(){
        console.log(`Title: ${this.title}, author: ${this.author}, year of publication: ${this.year}, format: ${this.format}`);
    }
}

