// Uso de Let y Const
var nombre = "Ricardo Tapia";
var edad = 23;
var PERSONAJE = {
    nombre: nombre,
    edad: edad
};
function mifuncion() {
    var nombre = "pedro";
    var edad = 26;
    console.log("mi nombre es: " + this.nombre);
    console.log("mi edad es: " + this.edad);
}
mifuncion();
var batman = {
    nombre: "Bruno Díaz",
    artesMarciales: ["Karate", "Aikido", "Wing Chun", "Jiu-Jitsu"]
};
console.log("my name is: " + batman.nombre);
console.log("my super power are: ");
batman.artesMarciales.forEach(function (element) {
    console.log(element);
});
// Convertir esta funcion a una funcion de flecha
// function resultadoDoble( a, b ){
//   return (a + b) * 2
// }
var nume = function (a, b) { return (a + b) * 2; };
console.log(nume(1, 2));
// Función con parametros obligatorios, opcionales y por defecto
// donde NOMBRE = obligatorio
//       PODER  = opcional
//       ARMA   = por defecto = "arco"
function getAvenger(nombre, poder, arma) {
    if (arma === void 0) { arma = "arco"; }
    var mensaje;
    if (poder) {
        mensaje = nombre + " tiene el poder de: " + poder + " y un arma: " + arma;
    }
    else {
        mensaje = nombre + " tiene un " + poder;
    }
}
;
// // Cree una clase que permita manejar la siguiente estructura
// // La clase se debe de llamar rectangulo,
// // debe de tener dos propiedades:
// //   * base
// //   * altura
// // También un método que calcule el área  =  base * altura,
// // ese método debe de retornar un numero.
var rectangulo = /** @class */ (function () {
    function rectangulo() {
    }
    rectangulo.prototype.calcularArea = function () {
        return this.base * this.altura;
    };
    return rectangulo;
}());
