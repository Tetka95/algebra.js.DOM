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

dDescr.parentNode.insertBefore(divInfo, dDescr.nextSibling);