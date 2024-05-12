(() => {
   
    const hero: string = 'Flash';

    function returnName():string {
        return hero;
    }

    const activeBatSignal = ():string => {
        return 'Bat signal Activated!';
    }

    console.log(typeof activeBatSignal);
    
    const heroName = returnName();


})()