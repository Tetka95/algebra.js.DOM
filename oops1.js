/*
1. Pratite kod u scripts.js.

2. Nađite protitip objekta "character". 
Naputak: koristite metode metode globalnog Object objekta.

3. Dodajte prototipu objekta "character" funkciju 
koja vraća jedan slučajno odabran citat iz niza "quotes".
*/

//1.
var character = {
    name: "Eleven",
    show: "Stranger Things",
    portrayedBy: "Millie Bobby Brown",
};

const quotes = [
    "I'm going to my friends, I'm going home.",
    "Pure fuel! PURE FUEL! WOO!",
    "See? Zoomer.",
    "Bitchin.",
];

//2.
var proto1 = Object.getPrototypeOf(character);
///console.log(proto1); --> baca funkciju
var proto2 = Object.getPrototypeOf(proto1);
///console.log(proto2); --> baca null

//3.
proto1.dodaj = function () {
    let x = Math.random() * quotes.length;
    let floor = Math.floor(x);
    console.log("random = " + x);
    console.log("floor = " + floor);
    return quotes [floor]; //pojašnjenje one-linera ispod
    return quotes[Math.floor(Math.random() * quotes.length)];
}
console.log(proto1.dodaj());
