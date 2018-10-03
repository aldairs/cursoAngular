// Un archivo simple de TypeScript

//creamos la promesa

let prom:any = new Promise(function (resolved:any, reject:any) {

  setTimeout(() => {
    console.log("Hola, me haz ejecutado");
    resolved();
  }, 1500)})


  prom.then(function () {

    console.log("ejecutame cuando salga bien");
  }, function () {
    console.error("ejecutame cuando tenga error");
  }
)
