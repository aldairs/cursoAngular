// Un archivo simple de TypeScript
//creamos la promesa
var prom = new Promise(function (resolved, reject) {
    setTimeout(function () {
        console.log("Hola, me haz ejecutado");
        resolved();
    }, 1500);
});
prom.then(function () {
    console.log("ejecutame cuando salga bien");
}, function () {
    console.error("ejecutame cuando tenga error");
});
