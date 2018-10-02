
let nombre = "No Hulk";

let Hulk = {
  nombre: "Hulk",
  smash(){
    setTimeout( () =>  
    console.log(this.nombre +
        " Smash!"), 1500);
    
  }
}

Hulk.smash();
