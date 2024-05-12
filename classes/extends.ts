(() => {
   
    class Avenger {
        constructor(
            public name: string,
            public realName: string,
        ) {
            // console.log('Constructor Avenger Called');
        }

        protected getFullName() {
            return `${ this.name } ${ this.realName }`
        }
        
    }

    class Xmen extends Avenger {

        constructor(
            name: string,
            realName: string,
            public isMutant: boolean
        ) {
            super( name, realName )
            // console.log('Constructor Xmen called');            
        }

        get fullName() {
            return `${ this.name } - ${ this.realName }`
        }

        set fullName( name: string ) {

            if ( name.length < 3 ) {
                throw new Error( 'The name must have more than 3 letters ' );
                
            }

            this.name = name;
        }

        getFullNameFromXmen() {
            // console.log( super.getFullName() );
        }

    }

    const wolverine = new Xmen('Wolverine', 'Logan', true);

    
    // wolverine.fullName = 'Bornit';

    // console.log( wolverine.fullName );
    // wolverine.getFullNameFromXmen();

    
    

})()