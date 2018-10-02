// Un archivo simple de TypeScript
var nombre = "Aldair";
var numero = 123456789;
var booleano = true;
var hoy = new Date();
hoy = new Date("2018-9-1");
console.log(nombre);
console.log(hoy);
//Manejar las variables con un tipo de Dato
//nombre = 123;
/**Esto es para que se pueda
 * tomar cualquier tipo de objeto
*/
var cualquiera;
cualquiera = nombre;
cualquiera = numero;
cualquiera = booleano;
var Spiderman = {
    nombre: "peter",
    edad: 23
};
console.log(Spiderman.nombre);
Spiderman.nombre = "nuevo peter";
console.log(Spiderman.nombre);
