var nombre = "No Hulk";
var Hulk = {
    nombre: "Hulk",
    smash: function () {
        var _this = this;
        setTimeout(function ()
         { return
             console.log(_this.nombre
     + " Smash!"); }, 1500);
    }
};
Hulk.smash();
