var ul = document.querySelector("ul");
//ul.style.listStyle = "decimal"; --> jedno od rješenja

var i = 1;
for (let elem of ul.children) {
    elem.style.listStyle = "decimal";
    //elem.textContent = i + ". " + elem.textContent; --> ako je listStyle "none" dodamo i ovaj dio koda
    i++;
} 

var divInfo = document.querySelector(".info");
divInfo.classList.add("sakrij");

//ISPIŠI U KONZOLI LIJEVU MARGINU STRANICE
var body = document.querySelector("body");
var bodyWindow = window.getComputedStyle(body, null);
var marginBody = bodyWindow.getPropertyValue("margin-left");

console.log("margin body: " + marginBody);