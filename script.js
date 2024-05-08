var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode('neki tekst u h1'));

var dDescr = document.querySelector(".description");
dDescr.parentNode.prepend(h1);

var h2 = document.createElement("h2");
h2.appendChild(document.createTextNode('neki tekst u h2'))

dDescr.parentNode.append(h2);

var divInfo = document.createElement("div");
divInfo.classList.add("info");

dDescr.parentNode.insertBefore(divInfo, dDescr.nextSibling);