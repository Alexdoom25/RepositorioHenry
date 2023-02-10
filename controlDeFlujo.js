function viajar(destino){
    if (destino=== 'Brasil') {
        console.log('Gire a la izquierda')
        
    } else if (destino === 'Argentina') {
        console.log('Gire a la Derecha')
    }else{
        console.log('Nos perdimos')
    }
}
viajar('México')

function puedeManejar(edad){
    if(edad>=18){
        console.log(true)
    }else{
        console.log(false)
    }
}
puedeManejar(15)