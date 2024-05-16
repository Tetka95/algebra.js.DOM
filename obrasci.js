/*
1. Napišite modul za brojanje koraka.
Modul će brinuti o povećanju brojanja koraka,
a izvana će se moći pristupiti dvijema metodama modula:
walk() i getTotalSteps().

2. Exportajte modul iz datoteke.
*/

var brojanjeKoraka = (function() {
    var koraci = 0;
    function increaseSteps() {
        koraci++;
    }

    return {
        walk: function (){
            increaseSteps();
        },
        getTotalSteps: function () {
            return koraci;
        },
        run: function () {
            koraci += 5;
        },
    };
})();

module.exports = brojanjeKoraka;