/*var listaDeCompras= [];
listaDeCompras[3] ='tomate'
listaDeCompras[1]='lechuga'

//console.log(listaDeCompras)
//listaDeCompras[1]
var elementoDelArray=listaDeCompras[1]
console.log(elementoDelArray)

console.log(listaDeCompras.length)
*/
/*--------------Metodos Varios-----------
var colores=['Amarillo','Azul']
colores.push('rojo')
colores.unshift('verde')
colores.pop();
colores.shift();
console.log(colores)*/
/*
--------metodo includes----------------
var pintores= ['Picasso', 'Velzaco','Dali','Van Gogh'];
var incluyeDali= pintores.includes('Monet')
console.log(incluyeDali)
*/
/*
var numero =[10,6,8,9]
---------metodo every-------------
var cumpleCondicion = numero.every(num=>{
    return num > 5;


})
console.log(cumpleCondicion)*/

/*
---------------------metodo split join-------------
var palabra = 'Henri'
var palabraSepadara = palabra.split('')
palabraSepadara.pop()
palabraSepadara.push('y')
console.log(palabraSepadara)
var palaArreglada = palabraSepadara.join('')
console.log(palaArreglada)*/
//.------------Metodo For each--------------
//var numeros = [1,2,3,4,5]
//numeros.forEach(num => console.log(num))
/*numeros.forEach((num) =>{
    if (num === 3) 
    console.log(num)
})*/
//------metodo Map---------------
//var masUno = numeros.map((num)=> {return num+1})
//    console.log(masUno)
/* -------Bucle for-------------
var arr=[1,2,3,4,5]
for(var i=0;i < arr.length; i++ ){
    console.log(arr[i])
}*/
/*
function encontrarLaP(string){
    var letras = string.split('')

    for(let i=0; i < letras.length; i++){
        if (letras[i] === 'p') 
        console.log('Si contiene p')
    }
}
encontrarLaP('Henry')
encontrarLaP('Javascript')
*/
/* --------Bucle While----------
var arr = [];
while (arr.length < 5) {
    arr.push('BOOM')
}
console.log(arr)*/

//---Bucle infinito---------

var arr=[]
var n =1;
while (n < 3) {
    arr.push(Math.random)
}

/*
function agregarNumeros(arrayOfNums) {
    // El parámetro "arrayOfNums" debe ser un arreglo de números.
    // Suma todos los elementos y retorna el resultado.
    // Tu código:
    var arrayOfNums = [1,2,3,]
    var suma =0;
        for (let i = 0; i < arrayOfNums.length; i++) {
       var suma = suma +arrayOfNums[i]
       return(suma)
    }
 }*/




 function numeroMasGrande(arrayOfNums) {
    // El parámetro "arrayOfNums" es un arreglo de números.
    // Retornar el número más grande.
    // Tu código:
  var arrayOfNums = [1,2,3,8,6];
  console.log(Math.max(...arrayOfNums))

  
 }
 function cuentoElementos(array) {
    // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
    // Tu código:
    var array =[1,2,3,18,18,3,8,18]
     numeroMayor = array.filter(num => num >= 18)
        console.log(numeroMayor.length)
     
 }

 function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:

    var numeroDeDia= [1,2,3,4,5,6,7]
    
    }

 function todosIguales(array) {
    // Si todos los elementos del arreglo son iguales, retornar true.
    // Caso contrario retornar false.
    // Tu código:
   var array = [1,1,1,1,1,1]
    if(array = array.every(num => num===array[0])){
        console.log(true)
    }else{
        console.log(false)
    }


}
var arrayOfNums = [2,2,2]
var suma = 0;

for (var i = 0; i < arrayOfNums.length; i++) {
   suma += arrayOfNums[i];
}
console.log(suma)

function tablaDelSeis() {
    // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
    // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
    // Tu código:
   
    var resultado=[]
    for (let i = 1; i < 11; i++) {
        var multiplica = i * 6;
        resultado.push(multiplica)
     }
     console.log(resultado)
}

function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    //var array =['Enero','Febrero','Marzo','Junio','Agosto','Septiemnre','Octubre','Noviembre','Abril','Mayo','Julio','Diciembre']
   
    var meses = array.split('')
    var mesesEncontrados = []
    for (let i = 0; i < meses.length; i++) {
        if(meses[i] === 'Enero'){
            mesesEncontrados.push('Enero')
            console.log('Encontro el mes')
            
        }
       console.log(mesesEncontrados)
    }

 }mesesDelAño['Enero']

 function encontrarLaP(string){
    var letras = string.split('')

    for(let i=0; i < letras.length; i++){
        if (letras[i] === 'p') 
        console.log('Si contiene p')
    }
}
encontrarLaP('Henry')
encontrarLaP('Javascript')