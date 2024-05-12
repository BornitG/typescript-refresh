(() => {
  // Crear interfaces
  interface Auto {
    encender: boolean;
    velocidadMaxima: number;
    acelerar():void;  
  }
  
  // Cree una interfaz para validar el auto (el valor enviado por parametro)
  const conducirBatimovil = ( auto: Auto ):void => {
    auto.encender = true;
    auto.velocidadMaxima = 100;
    auto.acelerar();
  }
  
  const batimovil: Auto = {
    encender:false,
    velocidadMaxima:0,
    acelerar(){
      console.log("...... gogogo!!!");
    }
  }
  
  // Cree una interfaz con que permita utilzar el siguiente objeto
  // utilizando propiedades opcionales

  interface Guason {
    reir?: boolean;
    comer?: boolean;
    llorar?: boolean;
  }
  
  const guason: Guason = {
    reir: true,
    comer:true,
    llorar:false
  }
  
  const reir = ( guason: Guason ):void => {
    if( guason.reir ){
      console.log("JAJAJAJA");
    }
  }
  
  
  // Cree una interfaz para la siguiente funcion
  interface GothamFn {
    ( ciudadanos: string[] ): number;
  }
  
  const ciudadGotica: GothamFn = ( ciudadanos:string[] ):number => {
    return ciudadanos.length;
  }
  
  // Cree una interfaz que obligue crear una clase
  // con las siguientes propiedades y metodos
  
    interface PersonInterface {
      name: string;
      age: number;
      sex: string;
      civilStatus: string;
      printBio(): void;
    }
  /*
    propiedades:
      - nombre
      - edad
      - sexo
      - estadoCivil
      - imprimirBio(): void // en consola una breve descripcion.
  */
  class Persona implements PersonInterface {
    public name: string;
    public age: number;
    public sex: string;
    public civilStatus: string;

    printBio(): void {
      console.log(`${ this.name } have ${ this.age} and is a ${ this.sex }`);
    }
  }
})()