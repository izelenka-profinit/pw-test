// Základní syntaktika tříd
class Person {
    name; // vlastnost name typu string
    age; // vlastnost age typu number
    // Konstruktor - k inicializaci vlastností při vytváření nové instance třídy
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Metoda greet, která vrací pozdrav
    meeting() {
        return `Ahoj, říkej mi ${this.name}`;
    }
}
// Základní syntaktika tříd - Vytvoření instance třídy
const person1 = new Person("Franta", 25);
console.log(person1.meeting()); // Výstup: Ahoj, říkej mi Franta
// Modifikátory
class Car {
    model;
    year;
    brand;
    constructor(model, year, brand) {
        this.model = model;
        this.year = year;
        this.brand = brand;
    }
    // Metoda, která může přistupovat k private a protected členům
    getCarInfo() {
        return `Model: ${this.model}, Year: ${this.year}, Brand: ${this.brand}`;
    }
}
// Modifikátory - Vytvoření instance třídy
const car1 = new Car("308sw", 2021, "Peugeot");
console.log(car1.getCarInfo()); // Výstup: Model: 308sw, Year: 2021 , Brand: Peugeot
// Dědičnost a polymorfismus
class Animal {
    whatDoesTheAnimalSay() {
        console.log("Nedefinovaný zvuk zvířete");
    }
}
class Dog extends Animal {
    // Přepisuje metodu speak
    whatDoesTheAnimalSay() {
        console.log("Pes štěká");
    }
}
class Cat extends Animal {
    // Přepisuje metodu speak
    whatDoesTheAnimalSay() {
        console.log("Kočka mňouká");
    }
}
// Dědičnost a polymorfismus - Vytvoření instance třídy
const dogSound = new Dog();
console.log(dogSound.whatDoesTheAnimalSay()); // Výstup: Pes štěká
const catSound = new Cat();
console.log(catSound.whatDoesTheAnimalSay()); // Výstup: Kočka mňouká
// Rozhraní - přiřazení na proměnnou objektu
const car = {
    type: "Car",
    capacity: 5,
    speed: 180
};
const electricCar = {
    type: "Electric Car",
    capacity: 4,
    speed: 150,
    fuelType: "Electric"
};
class TransportCategory {
    type;
    capacity;
    speed;
    fuelType;
    constructor(type, capacity, speed, fuelType) {
        this.type = type;
        this.capacity = capacity;
        this.speed = speed;
        this.fuelType = fuelType;
    }
    transportInfo() {
        return `This ${this.type} can carry ${this.capacity} people and has a top speed of ${this.speed} km/h. It runs on ${this.fuelType}.`;
    }
}
const myCar = new TransportCategory("Sedan", 5, 200, "Petrol");
console.log(myCar.transportInfo());
//# sourceMappingURL=03_classAndObjects.js.map