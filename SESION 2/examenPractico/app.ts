
// Uso de Let y Const
let nombre: String = "Ricardo Tapia";
let edad: number = 23;

const PERSONAJE: { nombre: String, edad: number } = {
  nombre: nombre,
  edad: edad
};

function mifuncion() {

  let nombre: String = "pedro";
  let edad: number = 26;

  console.log("mi nombre es: " + this.nombre);
  console.log("mi edad es: " + this.edad);

}

mifuncion();



// Cree una interfaz que sirva para validar el siguiente objeto

//solucion 
interface SuperHerue {
  nombre: String,
  artesMarciales: String[]
}


var batman: SuperHerue = {
  nombre: "Bruno Díaz",
  artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
}
console.log("my name is: " + batman.nombre);
console.log("my super power are: ");
batman.artesMarciales.forEach(element => {
  console.log(element);
});


// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }

let nume = (a: number, b: number) => (a + b) * 2;

console.log(nume(1, 2));


// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre: String, poder?: String, arma: String = "arco") {
  var mensaje;
  if (poder) {
    mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
  } else {
    mensaje = nombre + " tiene un " + poder
  }
};

// // Cree una clase que permita manejar la siguiente estructura
// // La clase se debe de llamar rectangulo,
// // debe de tener dos propiedades:
// //   * base
// //   * altura
// // También un método que calcule el área  =  base * altura,
// // ese método debe de retornar un numero.
class rectangulo {

  base: number;
  altura: number;

  calcularArea():number{
    return this.base * this.altura;
  }
}
