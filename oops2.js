/*
1. Dodajte Dog funkciji varijablu "name" koja se 
postavlja pri kreiranju objekta i označava ime psa.
Defaultna vrijednost imena psa je "Rex".

2. Kreirajte objekt iz Dog funkcije.

3. Dodajte Dog funkciji metodu koja vraća postavljeno ime psa.
Pozovite ju iz novostvorenog objekta i ispišite rezultat.
*/

//1.
function print(intext){
    console.log(intext);
}

function Dog(name) {
    //this.dogName = name || "Rex"; --> skraćeno rješenje za if petlju
    if(!name) {
        this.dogName = "Rex";
    } else {
        this.dogName = name}
}

this.bojaPsa = "crna"; ///dodano svojstvo koje nije funkcija (sve se može)

//2.
var dog = new Dog();
print("Ime psa (default) je " + dog.dogName); 

var dog1 = new Dog("Floki");
print("Ime psa je " + dog1.dogName);

//3.
Dog.prototype.imePsa = function(){
    return this.dogName;
}
console.log("Ime psa(default) je " + dog.imePsa()); //console.log ili print, radi oboje zbog funkcije dodane na početak
console.log("Ime psa(određeno) je " + dog1.imePsa());

//4. Dodaj funkciju bark
Dog.prototype.bark = function(){
    return "woof woof";
}

print("Pas(default) se glasa " + dog.bark());
print("Pas(određeno) se glasa " + dog1.bark());

