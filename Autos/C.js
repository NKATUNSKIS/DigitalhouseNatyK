const autos = require("./autos")
let concesionaria = {
   autos: autos,
   buscarAuto: function (patente){
return this.concesionaria.autos.filter(function(patente){
  this.concesionaria.autos.patente === patente
  }
)}
}