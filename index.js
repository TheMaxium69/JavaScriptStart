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
    test2 = 42;

    console.log(test2);
}

console.log(test2);

console.log("---------- tableau ");

let array = [
    'test',
    42,
    99.99,
    [0],
    "salut je suis un homme qui est sympas vraiment sympa"
];
//tableau "long"
let tableau = new Array(
  1, 8, "salt"
);

console.log(array);
console.log(array.length);
console.log(array[1]);
console.log(array[0]);
console.log(array[4]);


console.log("---------- verfier une valeur : String, tableau");

console.log(array.indexOf(42));

let variabletxt = array[4];
console.log(variabletxt.indexOf('je'));

console.log("---------- Les objects");

let student = {
    firstName: "Maxime",
    lastName: "Cookie",
    number: 69,
    greetings: function () {
        return `Bonjour ${this.firstName} ${this.lastName}`;
    }
};
console.log(student.greetings());

let student2 = new Object();
student2.firstName = "Lucas"
student2.greetings = function () {
    return `Bonjour student2 ${this.firstName}`;
};

console.log(student2.greetings());

console.log(student["lastName"]);

student.txt = "Hello world";

console.log(student.txt);

console.log("------------------- Function")

let somme = sum(2, 8);
function sum(number1, number2) {
    let result = number1 + number2;

    return result;
}
console.log(somme);


function sumStupide(number1, number2 = 2) {
    let result = number1 + number2;

    return result;
}
console.log(sumStupide(42, 10));


console.log('------------------- prompt and switch')
/*
let answer = prompt("Êtes-vous là ? Répondre 'oui', 'yes' ou 'да'.");

switch (answer) {
    case 'oui':
        alert("Vous êtes ici !");
        break;
    case 'yes':
        alert("You are here!");
        break;
    case 'да':
        alert("Вы здесь!");
        break;
    default:
        alert("Dommage, un gâteau vous attendais...");
        break;
}*/
console.log('fin');

console.log("--------------- boucles");

let tab = [
    'test',
    69,
    'dylanleviking',
    18
];

console.log("--------------- while");


let i = 0;

while (i < tab.length) {
    console.log(`L'index ${i} de tab vaut ${tab[i]}`);
    i++
}

console.log("--------------- for");

for (let i = 0; i <tab.length; i++){
    console.log(`L'index ${i} de tab vaut ${tab[i]}`);
}
console.log("--------------- for of");

for (let value of tab){
    console.log(`L'index ${i} de tab vaut ${value}`);
}

console.log("--------------- forEach");

tab.forEach(function (value) {
    console.log(`L'index ${i} de tab vaut ${value}`);
    i++;
})

console.log("--------------- forEach");

for (const pro in tab){
    //console.log(`L'index ${pro} de tab vaut ${tab[pro]}`);

    console.log("L'index "+ pro +" de tab vaut " + tab[pro]);
}

console.log("--------------- exo 1 = calculatrice");
/*
let form = prompt("Montant HT de votre produit ?");

if (!isNaN(form)) {
    formTTC = form * 1.2;
    alert("Voter produit coute en ttc " + formTTC + " €")
} else {
    alert('Not a Number!');
}*/


console.log("--------------- exo 2.2 = affichez les nombres paire");

let form2 = prompt("Mettre un nombre de 10 a 100")

if (form2 < 100 && form2 > 10){

    let result = form2 % 2;

    if (result == 0){
        alert("ton nombre paire")
    }else{
        alert("ton nombre est impaire")
    }

}else{
    alert("frero ton chiffre est aps comme demander dans la consigne alors respect la gros")
}













