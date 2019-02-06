"use strict";
// Un archivo simple de TypeScript
//creamos la promesa
let prom = new Promise(function (resolved, rejec) {
    setTimeout(() => {
        console.log("Hola, me haz ejecutado");
        rejec();
    }, 1500);
});
prom.then(function () {
    console.log("ejecutame cuando salga bien");
}, function () {
    console.error("ejecutame cuando tenga error");
});
