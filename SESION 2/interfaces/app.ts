// Un archivo simple de TypeScript

interface Xmen{
  nombre:String,
  poder:String
}

let fun = (xmen :Xmen) => {

  console.log(xmen.poder);
}

function enviarAmision( xmen : Xmen) {
  console.log("se envio a: " + xmen.nombre);

  

  fun(xmen);
}

function recojer(xmen: Xmen) {
  console.log("se recogio a: " + xmen.nombre);
}

let wolverine: Xmen  = {

  nombre: 'wolverine',
  poder: 'regeneracion'
}


enviarAmision(wolverine);
