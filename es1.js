/*
1. Postavite "use strict" direktivu na početak programa u scripts.js.
Ispravite greške koje se javljaju.

2. Dodajte poslje "user" u "users" pomoću spread operatora.
Spremite rezultat u novu varijablu i ispisite rezultat.

3. Koju vrijednost vraćaju console.log izjave? 
Probajte zamijeniti let sa var.

*/

"use strict";

//1.
var a = 78; //dodan var ispred a
var b = 34; //izbačena 0 iz 034
//delete a; --> delete ključna riječ, ne znači ništa, neće raditi ništa
//delete window.b; --> isto kao gore
var myObject = { property1: 1, porperty2: 2, property1: 1 };

//2.
const users = [
    { name: "Fabio", surname: "Biondi" },
    { name: "Mario", surname: "Rossi" },
];
const user = { name: "Lorenzo", surname: "Verdi" };

var allUsers = [...users, user];
console.log(`Drugi user ime = ${allUsers[2].name} i prezime = ${allUsers[2].surname}`);

//3. 
for (var i = 0; i < 10; i++) { //let zamijenjen var-om
    setTimeout(function () {
        console.log("The number is " + i);
    }, 1000);
    console.log(i);
}
///let ispisuje sve, var će ispisat samo zadnje (ali navesti da je vrijednost deset puta "ispisana", dobijemo zadnju vrijednost)