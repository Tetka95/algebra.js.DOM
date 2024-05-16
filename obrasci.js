/*
1. Napišite modul za brojanje koraka.
Modul će brinuti o povećanju brojanja koraka,
a izvana će se moći pristupiti dvijema metodama modula:
walk() i getTotalSteps().

2. Exportajte modul iz datoteke.
*/

var brojanjeKoraka = (function() {
    //TO DO: dio koda za povećavanje broja koraka
    return {
        walk: function (){
            return 1;
        },
        getTotalSteps: function () {
            return 2;
        }
    };
})();

module.exports = brojanjeKoraka;