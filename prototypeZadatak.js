// constructor Osoba
function Osoba() {
    (this.ime = "Ana"), (this.godine = 25); 
}

var osoba1 = new Osoba();
osoba1.brojCipela = 38;
osoba1.pozdrav = function() {
    return "Bok!";
};

console.log(
    "Osoba1 --> ime: " + osoba1.ime + 
    "; godine: " + osoba1.godine + 
    "; broj cipela: " + osoba1.brojCipela);

console.log(
    "Osoba1 --> ime: " + osoba1.ime + 
    "; godine: " + osoba1.godine);

Osoba.prototype.spol = "Žensko";

console.log(
    "Osoba1 --> ime: " + osoba1.ime + 
    "; godine: " + osoba1.godine + 
    "; spol: " + osoba1.spol +
    "; pozdrav: " + osoba1.pozdrav());

var osoba2 = new Osoba();
osoba2.ime = "Marko";
osoba2.godine = 35;
osoba2.spol = "Muško";
osoba2.brojCipela = 36;
osoba2.pozdrav = function() {
    return "Ćao!";
};

console.log(
    "Osoba2 --> ime: " + osoba2.ime + 
    "; godine: " + osoba2.godine + 
    "; spol: " + osoba2.spol + 
    "; broj cipela: " + osoba2.brojCipela +
    "; pozdrav: " + osoba2.pozdrav());