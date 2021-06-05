let variable = 'test';

function testFonction() {
    variable = 'test2';
    console.log(variable);
}

console.log("---------- Déclaration simple");
console.log(variable);
testFonction();
console.log("- Fonctions");
console.log(variable);

console.log("---------- contions true");

if (true) {
    var variableVar = "var";
}

console.log(variableVar + " mais le let ne marche pas");


console.log("---------- var condtions");

var test = 'test';

if (test === 'test') {
    console.log(test);
    var test = 42;

    console.log(test);
}
console.log(test);


console.log("---------- let conditions ");

let test2= 'test';

if (test2 === 'test') {
    let test2 = 42;

    console.log(test2);
}

console.log(test2);

console.log("---------- tableau ");

let array = [
    'test',
    42,
    99.99,
    [0]
];

console.log(array);
console.log(array[1]);
console.log(array[0]);


console.log("---------- verfier une valeur : String, tableau");




