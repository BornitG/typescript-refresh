(() => {
   
    type Avengers = {
            nick: string;
            ironman: string;
            vision: string;
            activo: boolean;
            poder: number;
        }

    const avengers = {
        nick: 'Samuel L. Jackson',
        ironman: 'Robert Downey Jr.',
        vision: 'Paul Bettany',
        activo: true,
        poder: 1500
    }

    // const { poder, vision } = avengers
    // console.log( poder.toFixed(2), vision.toUpperCase() );

    const printAvenger = ( { ironman, ...rest }: Avengers ) => {

        console.log( ironman, rest );
        
    }

    // printAvenger( avengers )

    const avengersArr: [string, boolean, number] = [ 'Capt. America', true, 115 ];

    const [ capt , ironman, num ] = avengersArr;
    // console.log({ capt, ironman, num });
    

})()