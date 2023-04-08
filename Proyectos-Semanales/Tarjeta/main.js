var cleave = new Cleave('#cardNumber', {
    creditCard: true
})

var cleave = new Cleave('#cardDate', {
    date: true,
    datePattern: ['m', 'y']
})

function frontGirar(){
    document.getElementById("front").classList.toggle("container-front-girar");
}

function backGirar(){
    document.getElementById("back").classList.toggle("container-back-girar");
}

document.getElementById("click").onclick = function(){
    frontGirar();
    backGirar();
}

var cvv = document.getElementById('cardCvv');
cvv.addEventListener('keypress', (e) => {
    if (!soloNumeros(event)){
        e.preventDefault();
    }
    
    function soloNumeros(e){
        var key = e.charCode;
        return key >= 48 && key <= 57;
    }
    
    
    /*let codigokey = event.keyCode;
    let valorkey = String.fromCharCode(codigokey);
    let valor = parseInt(valorkey);

    if(valor){
        cvv.value += valor;
    }*/
})
