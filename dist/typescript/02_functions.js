// Funkce typescript - základní
function add(a, b) {
    return a + b;
}
add(10, 20); // Dovoluje vložit pouze číselné hodnoty
// Funkce typescript - volitelné
function greet(name, age) {
    if (age) {
        return `Hello, my name is ${name} and I am ${age} years old.`;
    }
    else {
        return `Hello, my name is ${name}.`;
    }
}
greet("Kamil", 29); // Využití povinného i volitelného parametru
greet("Peter"); // Využití pouze povinného parametru
// Funkce typescript - výchozí parametry
function meet(name, greeting = "Dobrý den") {
    return `${greeting}, těší mě, já jsem ${name}.`;
}
meet("Eliška"); // "Dobrý den, těší mě, já jsem Eliška."
meet("Martin", "Ahoj"); // "Ahoj, těší mě, já jsem Martin."
// Funkce typescript - Funkční typy
let multiply;
multiply = (x, y) => {
    return x * y;
};
multiply(10, 20);
//# sourceMappingURL=02_functions.js.map