// Un archivo simple de TypeScript
var fun = function (xmen) {
    console.log(xmen.poder);
};
function enviarAmision(xmen) {
    console.log("se envio a: " + xmen.nombre);
    fun(xmen);
}
function recojer(xmen) {
    console.log("se recogio a: " + xmen.nombre);
}
var wolverine = {
    nombre: 'wolverine',
    poder: 'regeneracion'
};
enviarAmision(wolverine);
