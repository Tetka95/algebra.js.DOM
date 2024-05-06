console.log('Unutarnja visina prozora je: ' + window.innerHeight);
console.log ('Unutarnja širina je: ' + window.innerWidth);

console.log('Domena je: ' + window.location.hostname);

//var winLocation = window.location;
console.log('Window location je: ' + window.location);

var x = window.confirm('Ovime prihvaćate našu politiku o kolačićima.');
console.log("response = " + x);
if (x == true) {
    console.log("korisnik odgovorio ok");
} else {
    console.log('korisnik odgovorio nok');
    window.location = "onama.html";
}


//window.location = 'www.google.com'; --> ne radi zbog sigurnosti
//window.location = "onama.html"; //--> ovo bi radilo jer se odnosi na stranicu unutar naše stranice

window.confirm