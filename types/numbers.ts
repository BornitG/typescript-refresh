(() => {
   
    let avengers: number = 10;
    
    console.log({ avengers });

    const villians: number = 20;

    if( avengers < villians ){
        console.log('We are fucked');
    } else {
        console.log('Easy Peezy');
    }

    avengers = Number('55A');

    console.log({ avengers });
    

})()