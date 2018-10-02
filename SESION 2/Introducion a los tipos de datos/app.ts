// Un archivo simple de TypeScript
let nombre: String = "Aldair";
let numero: number = 123456789;
let booleano: boolean = true;

let hoy: Date = new Date();

hoy = new Date("2018-9-1");

console.log(nombre);
console.log(hoy);
//Manejar las variables con un tipo de Dato
//nombre = 123;

/**Esto es para que se pueda 
 * tomar cualquier tipo de objeto
*/
let cualquiera: any;

cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;

let Spiderman = {


  nombre: "peter",
  edad: 23


}

console.log(Spiderman.nombre);


Spiderman.nombre = "nuevo peter";

console.log(Spiderman.nombre);
