//Crea una función que reciba un número entero y devuelva una cadena de texto que represente el número en notación romana.

/*M=1000
D=500
C=100
L=50
X=10
V=5
I=1*/

let number = 0;


function convertirRomano (n){
    let r="";
    if (n>0 && n<4000){
        while (n >= 1000){
            n -= 1000;
            r+="M";
        }
        if (n >= 900){
            n -= 900;
            r+="CM";
        }
        if (n >= 500 ){
            n -= 500;
            r+="D";
        }
        if (n >= 400 ){
            n -= 400;
            r+="CD";
        }
        while (n >= 100){
            n -= 100;
            r+="C";
        }
        if (n >= 90){
            n -= 90;
            r+="XC";
        }
        if (n >= 50 ){
            n -= 50;
            r+="L";
        }
        if (n >= 40 ){
            n -= 40;
            r+="XL";
        }
        while (n >= 10){
            n -= 10;
            r+="X";
        }
        if (n >= 9){
            n -= 9;
            r+="IX";
        }
        if (n >= 5 ){
            n -= 5;
            r+="V";
        }
        if (n >= 4 ){
            n -= 4;
            r+="IV";
        }
        while (n >= 1){
            n -= 1;
            r+="I";
        }
    } else{
        console.log("Error: Ingreso un valor fuera del rango entre 0 a 4000");
    }

    //console.log(r);
    return r;
}

//convertirRomano(3999);
//let numberRomano = convertirRomano(3999);
/*for(let i=1; i<4000; i++){
    console.log(convertirRomano(i))
}*/



//console.log(convertirRomano(9,""));
/*for(let i=1; i++; i<5000){
    convertirRomano(i);
}*/


