(() => {
   
    type Avenger = {
        name: string,
        weapon: string,
    }
    
    const ironman: Avenger = {
        name: 'Ironman',
        weapon: 'Armor-Suit'
    }

    const captAmerica: Avenger = {
        name: 'Captain America',
        weapon: 'Shield'
    }
    const thor: Avenger = {
        name: 'Thor',
        weapon: 'Mjolnir'
    }

    const avengers: Avenger[] = [ ironman, thor, captAmerica ];

    for (const avenger of avengers) {
        console.log(avenger.name, avenger.weapon);
        
    }
 
})()