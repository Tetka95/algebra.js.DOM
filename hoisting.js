//hoisting --> najbolje definirati/izdvojiti sve varijable na početku kako bi one radile
var x = 2;
var y = 3;

var z = x + y;

console.log("z = " + z);

function zbroji(){
    let n = 3;
    n = 2;
    //console.log("1. n = " + n);
    //var n = 3;
    //console.log("2. n = " + n);
    let m = 4;
    console.log(n+m);
}

zbroji();