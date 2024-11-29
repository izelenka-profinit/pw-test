// Generika - základní použití v třídách
function identity(arg) {
    return arg;
}
let output1 = identity("Hello world");
let output2 = identity(123);
// Generika - použití v třídách a rozhraních
class Box {
    contents;
    constructor(value) {
        this.contents = value;
    }
}
let stringBox = new Box("Hello world");
let numberBox = new Box(123);
let stringNumberPair = {
    first: "Hello world",
    second: 123
};
// Generika - složitější scénář
class List {
    items = [];
    add(item) {
        this.items.push(item);
    }
    getItems() {
        return this.items;
    }
}
let numberList = new List();
numberList.add(1);
numberList.add(2);
let stringList = new List();
stringList.add("jablko");
stringList.add("banán");
console.log(numberList.getItems()); // [1, 2]
console.log(stringList.getItems()); // ["jablko", "banán"]
function greetings(name = "World") {
    console.log(`Hello, ${name}`);
}
greetings(); // Výstup: Hello, World
//# sourceMappingURL=04_generics.js.map