"use strict";
(function () {
    var addNumbers = function (a, b) { return a + b; };
    var greet = function (name) { return "Hello ".concat(name); };
    var saveTheWorld = function () { return "The world is saved"; };
    var myFunction;
    //* myFunction = 10;
    //* console.log(myFunction);
    // myFunction = addNumbers
    // console.log(myFunction( 1, 2 ));
    //? myFunction = greet
    //? console.log(myFunction( 'Omega' ));
    myFunction = saveTheWorld;
    console.log(myFunction());
})();
