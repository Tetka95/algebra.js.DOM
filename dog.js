class Dog {
    constructor(){
        console.log("x");
    }
    imePsa = "Rex";
    vrsta = "Seoski pas";
    godine = 1;

}

class GoldenRetriever extends Dog {
    constructor(godine, vrsta) {
        super(godine); ///nije spomenuto u predavanju, ali dobro za znat
        this.godine = godine;
        this.vrsta = vrsta;
    }
}

const dog1 = new Dog();
const dog2 = new GoldenRetriever(10, "Zlatni retriver");

console.log("Dog1 name = " + dog1.imePsa);
console.log("Dog1 godine = " + dog1.godine);
console.log("Dog1 vrsta = " + dog1.vrsta);

console.log("----------");

console.log("Dog2 name = " + dog2.imePsa);
console.log("Dog2 godine = " + dog2.godine);
console.log("Dog2 vrsta = " + dog2.vrsta);
