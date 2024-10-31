export class Book{
    constructor(title, author, year){
        this.title = title;
        this.author = author;
        this.year = year;
    }
    printInfo(){
        console.log(`Title: ${this.title}, author: ${this.author}, year of publication: ${this.year}`);
    }
}



