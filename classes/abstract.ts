(() => {
   
    abstract class Mutant {
        constructor(
            public name: string,
            public realName: string,
        ) {}
    }

    class Xmen extends Mutant {

        saveWorld() {
            return 'World Saved!'
        }

    }
    class Villain extends Mutant {

        conquerWorld() {
            return 'World Conquered'
        }

    }


    const wolverine = new Xmen('Wolverine', 'Logan');
    const magneto = new Villain('Magneto', 'Magnus');

    // console.log(wolverine.saveWorld());
    // console.log(magneto.conquerWorld());
    const printName = ( character: Mutant ) => {
        // console.log( character.realName );
    }

    printName(wolverine);
    printName(magneto);


})()