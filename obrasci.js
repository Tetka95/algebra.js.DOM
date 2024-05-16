/*
1. Napišite modul za brojanje koraka.
Modul će brinuti o povećanju brojanja koraka,
a izvana će se moći pristupiti dvijema metodama modula:
walk() i getTotalSteps().

2. Exportajte modul iz datoteke.
*/

var brojanjeKoraka = (function() {
    //TO DO: dio koda za povećavanje broja koraka
    var koraci = 0;
    return {
        walk: function (){
            koraci++;
        },
        getTotalSteps: function () {
            return koraci;
        }
    };
})();

module.exports = brojanjeKoraka;