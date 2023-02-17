function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:/* array.includes('Marzo')&& array.includes('Noviembre')*/
    //var array =['Enero','Febrero','Marzo','Junio','Agosto','Septiemnre','Octubre','Noviembre','Abril','Mayo','Julio','Diciembre']
   var mesesEncontrados=[];

   if (array.includes('Enero','Marzo','Noviembre')){
    mesesEncontrados.push('Enero','Marzo','Noviembre')
    console.log(mesesEncontrados)
   }else
   console.log('No se encuentran todos los meses')
    
   /*
    for (let i = 0; i < array.length; i++) {
        if (array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
            console.log(mesesEncontrados.push('Enero'&&'Marzo'&&'Noviembre'))
        } else if (array.length >3){
            console.log('No se encontraron los meses perdidos')
        }
    }*/
    
 }mesesDelAño('Junio','Agosto','Septiembre','Octubre','Abril','Noviembre','Mayo','Marzo','Julio','Febrero','Diciembre')


 function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    var array =[99,100,1001,102,200]
    for (let i = 0; i < array.length; i++) {
       var mayorCien = mayorCien >100
       mayorACien.push([i])
       console.log(mayorACien)
       
    }
 }(100, 4, 56, 78, 200, 120, 7, 160, 148, 22)

 function promedioResultadosTest(resultadosTest) {
    // El parámetro "resultadosTest" es un arreglo de números.
    // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
    // Tu código:
    var resultadosTest = [97, 100, 80, 55, 72, 94]
    var suma = 0;
    for (let i = 0; i < resultadosTest.length; i++) {
        suma += resultadosTest[i] / resultadosTest.length;
        
    }
    console.log(suma)
    

 }promedioResultadosTest(97, 100, 80, 55, 72, 94)

 function longestString() {
    let longest = "";
    for (let i = 0; i < arguments.length; i++) {
      if (arguments[i].length > longest.length) {
        longest = arguments[i];
      }
    }
    console.log(longest);
  }longestString('hola','adios')

  function multiplicarArgumentos() {
    // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
    // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
    // [PISTA]: "arguments" es un arreglo.
    // Tu código:
    
    
    var arg = Array.from(arguments)
    var multiplica=1;
    if(arg.length > 1){
        for (let i = 0; i < arg.length; i++) {
          multiplica *= arg[i]
            
        }
        console.log(multiplica)
    }else if (arg.length === 1){
        console.log(multiplica)
    }else if(arg.length === 0){
        console.log (0)
    }
}     
 multiplicarArgumentos(1)


 function func1() {
    console.log(arguments[0]);
    // Expected output: 1
 }
func1(2)





 function mesesDelAño(array) {
    // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
    // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
    // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
    // Tu código:
    var mesesEncontrados=[]
    if (array.includes('Enero','Marzo','Noviembre')){
       mesesEncontrados.push('Marzo','Noviembre','Enero')
       console.log(mesesEncontrados)
      }
      if(mesesEncontrados <3){
        console.log("No se encontraron los meses pedidos")
      }
 }mesesDelAño('Junio','Agosto','Septiembre','Octubre','Abril','Noviembre','Mayo','Marzo','Julio','Febrero','Diciembre')


 function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   if(num >= 9){
    console.log(true)
   }else{
    console.log(false)
   }
  
}empiezaConNueve(8)

function diaDeLaSemana(numeroDeDia) {
    // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
    // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
    // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
    // Tu código:
    if (numeroDeDia >=2 && numeroDeDia <=6){
        console.log('Es dia laboral')
    }else if (numeroDeDia == 7 || numeroDeDia == 1 ) {
        console.log('Es fin de semana')
    }
 }diaDeLaSemana(7)
/*
 function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    //var array = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]
    var arrNuevo=[];
    for (var i = 0; i < array.length; i++) {
       var mayorCien = array[i] > 100;
        if(mayorCien === true){ 
        arrNuevo.push(array[i]);
        
         }   
    }
    console.log(arrNuevo)
 }mayorACien (100, 4, 56, 78, 200, 120, 7, 160, 148, 22)
*/
  function mayorACien(array) {
    // La función recibe un arreglo con enteros entre 0 y 200.
    // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
    // Tu código:
    //var array = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]
   //var array = [100, 4, 56, 78, 200, 120, 7, 160, 148, 22]
   var arrNuevo=[];
   for (var i = 0; i < array.length; i++) {
        if(array[i] > 100){
       arrNuevo.push(array[i])}
       }  
    return(arrNuevo)

    
 }mayorACien (100, 4, 56, 78, 200, 120, 7, 160, 148, 22)


 
function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    var arregloNuevo =[];
    var suma = num;
    for (let i = 0; i < 10; i++) {
         suma = suma + 2;
        if(suma === i)break;
        else{
        arregloNuevo.push(suma);
        }
    }

    if ( i < 10) {
       console.log('Se interrumpió la ejecución')
    }else {
       console.log(arregloNuevo)
    }
 } breakStatement(50)

/*
 function breakStatement(numero) {
    //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
    //Guardar cada nuevo valor en un array.
    //Devolver el array
    //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y
    //devolver: "Se interrumpió la ejecución"
    //Pista: usá el statement 'break'
    // Tu código:
    var array = [];
    var suma = numero;
    for (var i = 0; i < 10; i++) {
      suma = suma + 2;
      if (suma === i) break;
      else {
        array.push(suma);
      }
    }
    if (i < 10) {
      console.log ("Se interrumpió la ejecución");
    } else {
      console.log (array);
    }
  }breakStatement(50)*/

  function breakStatement(num) {
    // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
    // Guardar cada nuevo valor en un arreglo y retornarlo.
    // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
    // la ejecución y retornar el string: "Se interrumpió la ejecución".
    // [PISTA]: utiliza el statement 'break'.
    // Tu código:
    var arregloNuevo =[];
    var suma = num;
    for (var i = 0; i < 10; i++) {
        suma = suma + 2;
        if (suma === i)break;
         else {
        arregloNuevo.push(suma)    
        }
    }
    if( i < 10){
        console.log('Se interrumpió la ejecución')
    }
    console.log(arregloNuevo)
 } breakStatement(50)

