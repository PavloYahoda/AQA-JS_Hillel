// Створіть об'єкт car1 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// year: число, представляє рік випуску автомобіля.
// Створіть об'єкт car2 з такими властивостями:
// brand: рядок, представляє марку автомобіля.
// model: рядок, представляє модель автомобіля.
// owner: число, представляє рік випуску автомобіля.
// Створіть об'єкт car3. Використайте оператор spread щоб додати всі властивості що є в car1 та car2 до об’єкту car3.
// Виведіть об'єкт car3 в консоль.


class Car {
    constructor(brand, model, thirdParam) {
        this.brand = brand;
        this.model = model;

        if (typeof thirdParam === 'number') {
            this.year = thirdParam;
        } else if (typeof thirdParam === 'string') {
            this.owner = thirdParam;
        }
    }
}
let car1 = new Car ("BMW", "i8", 2023);
let car2 = new Car ("Honda", "Accord", "Black Jack");
let car3 = {...car1, ...car2};

console.log(car1);
console.log(car2);
console.log(car3);

