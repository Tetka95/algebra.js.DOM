var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode('neki tekst u h1'));

var dDescr = document.querySelector(".description");
dDescr.parentNode.prepend(h1);

/*
var bodyElem = document.querySelector("body");
console.log(bodyElem);
bodyElem.prepend(h1);
---> još jedan način kako riješiti zadatak
*/ 

/*
var h2 = document.createElement("h2");
h2.appendChild(document.createTextNode('neki tekst u h2'))

dDescr.parentNode.append(h2);
---> umetanje elementa ispod div-a description
*/

var divInfo = document.createElement("div");
divInfo.classList.add("info");

//dDescr.parentNode.insertBefore(divInfo, dDescr.nextSibling);

var footElement = document.querySelector("#footer");
dDescr.parentNode.insertBefore(divInfo, footElement);

var ul = document.querySelector("ul");
//var li = document.createElement("li");

//ul.appendChild(li); ---> nije novi objekt nego referenca objekta

console.log("UL ima LI elemenata: " + ul.childElementCount);

/*
for(let i = 0; i<ul.childElementCount; i++) {
    let child = ul.children[i];
    ul.removeChild(child);
}
---> nije rješenje, bug
*/

for (let i = 0; i < 3; i++) {
    let li = document.createElement("li");
    ul.appendChild(li);
}