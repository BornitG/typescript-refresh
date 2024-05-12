(() => {
   
    type Hero = {
        name: string;
        age? : number;
        powers: number[];
        getName?: () => string;
    }

    let myCustomVariable: ( string | number | Hero ) = 'Bornit';
    console.log(myCustomVariable);

    myCustomVariable = 20
    console.log(myCustomVariable);

    myCustomVariable = {
        name: 'Bruce',
        age: 43,
        powers: [6]
    }
    console.log(typeof myCustomVariable);
    console.log(myCustomVariable);
    

})()