/*
1. Dodajte Dog funkciji varijablu "name" koja se 
postavlja pri kreiranju objekta i označava ime psa.
Defaultna vrijednost imena psa je "Rex".

2. Kreirajte objekt iz Dog funkcije.

3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
Pozovite ju iz novostvorenog objekta i ispišite rezultat.
*/

//1.
function Dog(name) {
    //this.dogName = name || "Rex"; --> skraćeno rješenje za if petlju
    if(!name) {
        this.dogName = "Rex";
    } else {
        this.dogName = name}
}

//2.
var dog = new Dog();
console.log("Ime psa po defaultu je " + dog.dogName); 


//3.
var dog1 = new Dog("Floki");

console.log("Ime psa je " + dog1.dogName);