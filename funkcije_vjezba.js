//1.
var x = "John Doe";

function vratiNesto (name) {
    var x = name;
    function f() {
        return x;
    }
    return f;
}

var y = vratiNesto("Jane Doe");
var z = vratiNesto()();

console.log(y); /// --> y je postao funkcija
console.log(z); /// --> z je undefined

z = vratiNesto("test")();
console.log(z); /// --> z je test

//2.
console.log("------------");

var name1 = "moje ime";

(function vratiNesto2 (name1) {
    var x = name1;
    function f() {
        console.log("invoked vratiNesto2(" + name1 + ")")
        return x;
    }
    return f;
})(name1);

