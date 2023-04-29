/*Crea una función que reciba un arreglo de números y un número como parámetros, 
y retorne un nuevo arreglo con todos los números del arreglo original que son mayores que el número dado.*/

var array = [2, 7, 3, 19, 13, 11, 9, 5, 4, 1];
var number = 4;

function filtrarNumerosMayores(arr, num) {
    return arr.filter((e) => {
      return e > num;
    });
}


var newArray = filtrarNumerosMayores(array, number);
console.log(newArray);
  