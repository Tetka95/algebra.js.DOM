const bark = () => "wuf wuf";

const barkx = function bark2 () {
    return "wuf wuf";
};

//oba primjera označavaju isto

console.log(bark);
console.log(barkx);

let myArray = ["ime1", "ime2", "ime3"];
forEach (myArray, element => {
    console.log(this);
    return element;
});
