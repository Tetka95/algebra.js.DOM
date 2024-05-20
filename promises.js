/*
1. Napišite Promise koji čeka funkciju getX,
i na resolved reagira sa console.log-om vrijednosti vraćene
vrijednosti, a na reject reagira sa console.log-om stringa "Oh, no!"

2. Ako već niste, prepišite sve funkcije u arrow funkcije.
*/

/*function getX() {
    return Math.random() >= 0.5;
}*/

const getX = () => Math.random() >= 0.5;

let ispisi = new Promise(function (resolve, reject) {
    console.log("pozvan promise object");
    let x = getX();
    if (x == true) {
        return resolve;
    }
    return reject;
})
.then(console.log("neka vrijednost"))
.catch(console.log("Oh, no!"));