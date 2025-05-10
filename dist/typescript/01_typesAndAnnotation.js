let ageNum = 21;
let firstName = "John";
let isStudent = true;
console.log(`${firstName}, ${ageNum}, ${isStudent}`);
// Typová inference
let greeting = "Hello"; // Typ je automaticky odvozen jako string
let ageNumber = 34; // Typ je automaticky odvozen jako number
let isDriving = true; // Typ je automaticky odvozen jako boolean, atd.
// Základní typy - number
let xAxis = 42;
let piNumber = 3.14;
// Základní typy - string
let carBrand = "Mercedes";
let cityName = "Prague";
// Základní typy - boolean
let isPlane = false;
let isCar = true;
// Základní typy - array
let numbersArray = [1, 2, 3];
let stringsArray = ["apple", "banana", "cherry"];
// Základní typy - object
let keyAndNumberObject = { seatNumber: 10 };
let keyAndStringObject = { houseType: 'flat' };
// Základní typy - tuple
let personDetails = ["Alice", 30,];
let carDetails = ["Peugeot", 2021, true];
// Základní typy - enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 0] = "Admin";
    Role[Role["User"] = 1] = "User";
    Role[Role["Guest"] = 2] = "Guest";
})(Role || (Role = {}));
;
let userRole = Role.Admin;
// Základní typy - any
let data;
data = "random string";
data = 42;
data = true;
data = null;
data = undefined;
data = [];
data = {};
// Základní typy - unknown (alternativa k any)
let greetingValue = "Hello";
greetingValue = 42; // Takto nepoužívat!
// Základní typy - void
function logMessage() {
    console.log();
}
; // Funkce bez návratové hodnoty
// Základní typy - null
function returnNullValue() {
    return null;
}
; // Funkce s návratovou hodnotou null
// Základní typy - undefined
function returnUndefinedValue() {
    return undefined;
}
; // Funkce s návratovou hodnotou undefined
// Union Types - kombinování typů
let id; // Může být číslo nebo řetězec
id = "12345";
id = 12345;
let userNumber; // Může být číslo nebo null
userNumber = 12345;
userNumber = null;
let carBradns; // Může být pole stringů nebo undefined
carBradns = ['Mercedes', 'Peugeot', 'Mazda'];
carBradns = undefined;
let planeTypes; // Může být object čísel nebo stringů
planeTypes = { Boeing: 747, Airbus: 'A320' };
// Tuples
let person = ["John", 25];
let isForKids = ['Sharp object', false];
// Kombinace Tuples s Union
let planeBrand = ['Boeing', [747, "787 Dreamliner"]];
// Enum
// Ve výchozím nastavení jsou číselné hodnoty přiřazeny automaticky (počínaje 0), ale můžeme je také explicitně definovat.
var Direction;
(function (Direction) {
    Direction[Direction["North"] = 0] = "North";
    Direction[Direction["East"] = 1] = "East";
    Direction[Direction["South"] = 2] = "South";
    Direction[Direction["West"] = 3] = "West"; // 3
})(Direction || (Direction = {}));
let currentDirection = Direction.North;
console.log(currentDirection); // Výstup: 0
// Nebo s definovanými hodnotami
var DirectionDegrees;
(function (DirectionDegrees) {
    DirectionDegrees["NorthDegrees"] = "N000";
    DirectionDegrees["EastDegrees"] = "E090";
    DirectionDegrees["SouthDegrees"] = "S180";
    DirectionDegrees["WestDegrees"] = "W270";
})(DirectionDegrees || (DirectionDegrees = {}));
let currentDirectionDegrees = DirectionDegrees.SouthDegrees;
console.log(currentDirectionDegrees); // Výstup: "S180"
let userId = 123;
let orderId = "ORD001";
let user = {
    name: "Alice",
    age: 30
};
//# sourceMappingURL=01_typesAndAnnotation.js.map