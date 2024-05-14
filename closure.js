var x = "neka vrijednost";

function vratiNesto () {
    var x = "lokalna varijabla";
    function f(){return x};
    return f;
}

var y = vratiNesto()();

/// var Y = vratiNesto(); console.log(y); --> vratit će funkciju f ispisanu

console.log(y);