var h1 = document.createElement("h1");
h1.appendChild(document.createTextNode("Karlovac"));

var bodyElem = document.querySelector("body");
bodyElem.prepend(h1);

var rijeke = ["Mrežnica", "Kupa", "Korana", "Dobra", "Karlovačko"];

var dDescription = document.querySelector(".description");

dDescription.innerHTML = "Grad na <h3>5 rijeka</h3>"

var divInfo = document.createElement("div");
divInfo.classList.add("info");
divInfo.innerText = "Peta rijeka je piva.";

var footElement = document.querySelector("#footer");
footElement.parentNode.insertBefore(divInfo, footElement);