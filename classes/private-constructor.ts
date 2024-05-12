(() => {
   
    class Apocalypse {

        static instance: Apocalypse;

        private constructor( public name: string ) {}

        static callApocalypse(): Apocalypse {
            if ( !Apocalypse.instance ) {
                Apocalypse.instance = new Apocalypse( 'I\'m Apocalipse... the one' );
            }

            return Apocalypse.instance;
        }

        changeName( newName: string ):void {
            this.name = newName;
        }

    }

    const apocalypse1 = Apocalypse.callApocalypse();
    const apocalypse2 = Apocalypse.callApocalypse();
    const apocalypse3 = Apocalypse.callApocalypse();

    apocalypse1.changeName('Xavier');

    // const apocalypse1 = new Apocalypse( 'I\'m Apocalipse... the one' );
    // const apocalypse2 = new Apocalypse( 'I\'m Apocalipse2... the one' );
    // const apocalypse3 = new Apocalypse( 'I\'m Apocalipse3... the one' );
    // console.log( apocalypse1, apocalypse2, apocalypse3 );
    


})()