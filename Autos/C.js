const autos = require("./autos")
let concesionaria = {
   autos: autos,
   buscarAuto: function (patente){
     return this.autos.filter(autos=>autos.patente==patente)[0] || null
   },
   venderAuto: function (patente){
    this.buscarAuto(patente).vendido = true },
   autosParaLaVenta: function(){
      return this.autos.filter(autos => autos.vendido == false)
   },
   autosNuevos: function(){
      return this.autosParaLaVenta().filter(autos => autos.km < 100)
   },
   listaDeVentas: function (){
       return autos.filter(autos => autos.vendido == true).map(autos => this.autos.precio = autos.precio)},
    TotalDeVentas: function(){
        return this.listaDeVentas().reduce((acum, precio)=>
         acum + precio, 0
        )
     }
   } 

// console.log(concesionaria.venderAuto("APL123"))
  
// console.log(concesionaria.listaDeVentas())
console.log(concesionaria.TotalDeVentas())