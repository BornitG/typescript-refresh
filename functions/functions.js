"use strict";
(function () {
    var hero = 'Flash';
    function returnName() {
        return hero;
    }
    var activeBatSignal = function () {
        return 'Bat signal Activated!';
    };
    console.log(typeof activeBatSignal);
    var heroName = returnName();
})();
