(() => {
   
    interface Client {
        name: string;
        age?: number;
        address: Address
        // address: {
        //     id: number;
        //     zip: string;
        //     city: string;
        // }
        getFullAddress( id: string ):string;
    }

    interface Address {
        id: number;
        zip: string;
        city: string;
    }

    const client: Client = {
        name: 'Bornit',
        age: 25,
        address: {
            id: 125,
            zip: 'KY2 SUD',
            city: 'Ottawa',
        },
        getFullAddress( id: string ) {
            return this.address.city
        },
    }
    
    const client2: Client = {
        name: 'Melissa',
        age: 30,
        address: {
            city: 'Toront',
            id: 420,
            zip: 'K2S UDA'
        },
        getFullAddress( id: string ) {
            return this.address.city
        },
    }


})()