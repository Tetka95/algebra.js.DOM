// constructor Osoba
function Osoba () {
    (this.ime = "Ana"), (this.godine = 25); 
}

var osoba1 = new Osoba ();
osoba1.brojCipela = 38;
console.log("Osoba1 --> ime: " + osoba1.ime + "; godine: " + osoba1.godine
+ "; broj cipela: " + osoba1.brojCipela);

console.log("Osoba1 --> ime: " + osoba1.ime + "; godine: " + osoba1.godine);

Osoba.prototype.spol = "Žensko";

console.log("Osoba1 --> ime: " + osoba1.ime + "; godine: " + osoba1.godine + "; spol: " + osoba1.spol);
