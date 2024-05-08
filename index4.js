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

