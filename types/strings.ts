(() => {
   
    const batman: string = 'Batman';
    const greenLantern: string = "Green Lantern";
    const blackVulcan: string = `Hero: Black Vulcan`;

    const abc = 123

    console.log(` I'm ${ batman } `);
    console.log( batman.toUpperCase() );

    console.log( batman[10]?.toUpperCase() || 'Not available');
    

})()