// Crea una función que reciba un arreglo de objetos con dos propiedades: nombre y edad. 
//La función debe retornar un nuevo arreglo con los nombres de las personas que tienen una edad impar.

var people  =  [{name: 'pepe', ages: 18},
                {name: 'jorge', ages: 35},
                {name: 'eduardo', ages: 12},
                {name: 'ernesto', ages: 58},
                {name: 'pancrasio', ages: 8},
                {name: 'pancracio con c', ages: 19},
                {name: 'miguel', ages: 27},
                {name: 'laura', ages: 36},
                {name: 'El perro', ages: 21},
                {name: 'francisco', ages: 89}];

//Función con 2 parámetros (un parámetro con el Objeto original y el otro con el nuevo Objeto).

var peopleImpar = [];

function objEdadImpar(objOrig, objImpar){
    let n = 0;
    for (let i=0; i<objOrig.length; i++){
        if (objOrig[i].ages % 2 == 1){
            objImpar[n]= objOrig[i];
            n++
        }
    }
    
    console.log(peopleImpar);
    return
}

objEdadImpar(people, peopleImpar);

//Función con 1 parámetro con el Objeto original.

/*function objEdadImpar(objOrig){
    var objImpar = [];
    let n = 0;
    for (let i=0; i<objOrig.length; i++){
        if (objOrig[i].ages % 2 == 1){
            objImpar[n]= objOrig[i];
            n++
        }
    }
    
    return objImpar;
}

var peopleImpar = objEdadImpar(people);
console.log(peopleImpar);*/