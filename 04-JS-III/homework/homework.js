// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un array
  // Tu código:
    return array[0];
}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
var tamanoArray = array.length;//Tamaño del arreglo
return array[tamanoArray-1];

}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  var tamanoArray = array.length;
return tamanoArray;
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var arrayMasUno=[];//Arreglo vacio
  var tamanoArray = array.length;
  for(let i = 0; i < tamanoArray; i++) {
    arrayMasUno[i] = array[i] + 1;
  }
  return arrayMasUno;
}


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
  array.push(elemento) //añade uno o más elementos al final de un array y devuelve la nueva longitud del array
  return array;

}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento)//agrega uno o más elementos al inicio del array, y devuelve la nueva longitud del array.
  return array;
}


function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
  return palabras.join(' ');// une todos los elementos de una matriz (o un objeto similar a una matriz) en una cadena y devuelve esta cadena
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:
  var tamanoArray = array.length;
  for(let i = 0; i < tamanoArray; i++) {
    if(array[i] === elemento) {
      return true;
    }
  }
  return false;
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
  var sumar = 0;
  var tamanoArray = numeros.length;
  for(let i = 0; i < tamanoArray; i++) {
    sumar = sumar + numeros[i];
  }
  return sumar;
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  var sumar = 0;
  var tamanoArray = resultadosTest.length;
  for(let i = 0; i < tamanoArray; i++) {
    sumar = sumar + resultadosTest[i];
  }
  return sumar/tamanoArray;

}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  var mayor = numeros[0];
  var tamanoArray = numeros.length;
  for(let i = 1; i < tamanoArray; i++) {
    if(numeros[i] > mayor) { 
      mayor = numeros[i];
    }
  }
  return mayor;
}


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  if(arguments.length < 1) return 0;//contiene el número de argumentos pasados a una función
  var total = 1;
  for(var i = 0; i < arguments.length; i++) {
    total = total * arguments[i];
  }
  return total;

}


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let contar = 0;
  var tamanoArray = arreglo.length;
  for (let i = 0; i < tamanoArray ; i++) {
    if(arreglo[i] > 19){
      contar++
    }
  }
  return contar;
}


function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí  
  if(numeroDeDia >= 2 && numeroDeDia <= 5 ){
    return "Es dia Laboral"
  }
  return "Es fin de semana" 
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString()//Devuelve una cadena que representa al objeto
  if(num.charAt(0) === "9")//devuelve en un nuevo String el carácter UTF-16 de una cadena
  {
    return true
  }
  return false
  
}


function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  var tamanoArray = arreglo.length;
  for (let i =0 ; i < tamanoArray - 1; i++) //Recorrer el arreglo
  {
    if(arreglo[i] !== arreglo[i+1]) //Comparacion de elementos
    {
      return false
    }
  }
  return true
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  var arregloNuevo=[];//Arreglo vacio
  for(let i= 0; i<array.length; i++) {
    if(array[i] === "Enero" || array[i] === "Marzo" || array[i] === "Noviembre") {
      arregloNuevo.push(array[i]);//añade uno o más elementos al final de un array y devuelve la nueva longitud del array
    }
  }
  var tamanoArrayNuevo = arregloNuevo.length;
  if(tamanoArrayNuevo < 3) {
    return "No se encontraron los meses pedidos";
  }
  else {
      return arregloNuevo;
  }
}


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  var arregloNuevo=[];//Arreglo vacio
  var tamanoArray = array.length;
  for(let i= 0; i < tamanoArray; i++) {
    if(array[i] > 100) {
      arregloNuevo.push(array[i]);
    }
  }
  return arregloNuevo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  var arregloNuevo=[];//Arreglo vacio
  var sumar = numero;
  for(var i= 0; i<10; i++) {
    sumar = sumar + 2;
    if(sumar === i) break;
    else {
      arregloNuevo.push(sumar);
    }
  }
  if(i < 10) {
    return 'Se interrumpió la ejecución';
  }
  else {
      return arregloNuevo;
  }
}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  var arregloNuevo=[];//Arreglo vacio
  var sumar = numero;
  for(let i= 0; i<10; i++) {
    if(i === 5) continue;
    else {
      sumar = sumar + 2;
      arregloNuevo.push(sumar);
    }
  }
  return arregloNuevo;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
