"use strict";
(function () {
    var avengers = 10;
    console.log({ avengers: avengers });
    var villians = 20;
    if (avengers < villians) {
        console.log('We are fucked');
    }
    else {
        console.log('Easy Peezy');
    }
    avengers = Number('55A');
    console.log({ avengers: avengers });
})();
