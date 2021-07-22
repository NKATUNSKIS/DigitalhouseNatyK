function dividir (numero1, numero2){
    if (numero1 === 0 || numero2 === 0){
        return "No se puede dividir por 0"
    } else {
        return numero1 / numero2
    }
       
}


console.log(dividir(4,0))