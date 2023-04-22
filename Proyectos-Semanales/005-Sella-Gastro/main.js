document.querySelector('#one').addEventListener('click', ()=>{
    document.querySelector('.img').classList.remove('img2')
    document.querySelector('.img').classList.remove('img3')
    document.querySelector('.img').classList.remove('img4')
    document.querySelector('.img').classList.remove('img5')
    document.querySelector('.img').classList.remove('img6')
    document.querySelector('.img').classList.add('img1')
    document.querySelector('body').classList.remove('fondo2')
    document.querySelector('body').classList.remove('fondo3')
    document.querySelector('body').classList.remove('fondo4')
    document.querySelector('body').classList.remove('fondo5')
    document.querySelector('body').classList.remove('fondo6')
    document.querySelector('body').classList.add('fondo1')
    

})

document.querySelector('#two').addEventListener('click', ()=>{
    document.querySelector('.img').classList.remove('img1')
    document.querySelector('.img').classList.remove('img3')
    document.querySelector('.img').classList.remove('img4')
    document.querySelector('.img').classList.remove('img5')
    document.querySelector('.img').classList.remove('img6')
    document.querySelector('.img').classList.add('img2')
    document.querySelector('body').classList.remove('fondo1')
    document.querySelector('body').classList.remove('fondo3')
    document.querySelector('body').classList.remove('fondo4')
    document.querySelector('body').classList.remove('fondo5')
    document.querySelector('body').classList.remove('fondo6')
    document.querySelector('body').classList.add('fondo2')
})

document.querySelector('#three').addEventListener('click', ()=>{
    document.querySelector('.img').classList.remove('img2')
    document.querySelector('.img').classList.remove('img1')
    document.querySelector('.img').classList.remove('img4')
    document.querySelector('.img').classList.remove('img5')
    document.querySelector('.img').classList.remove('img6')
    document.querySelector('.img').classList.add('img3')
    document.querySelector('body').classList.remove('fondo2')
    document.querySelector('body').classList.remove('fondo1')
    document.querySelector('body').classList.remove('fondo4')
    document.querySelector('body').classList.remove('fondo5')
    document.querySelector('body').classList.remove('fondo6')
    document.querySelector('body').classList.add('fondo3')
})

document.querySelector('#four').addEventListener('click', ()=>{
    document.querySelector('.img').classList.remove('img2')
    document.querySelector('.img').classList.remove('img3')
    document.querySelector('.img').classList.remove('img1')
    document.querySelector('.img').classList.remove('img5')
    document.querySelector('.img').classList.remove('img6')
    document.querySelector('.img').classList.add('img4')
    document.querySelector('body').classList.remove('fondo2')
    document.querySelector('body').classList.remove('fondo3')
    document.querySelector('body').classList.remove('fondo1')
    document.querySelector('body').classList.remove('fondo5')
    document.querySelector('body').classList.remove('fondo6')
    document.querySelector('body').classList.add('fondo4')
})

document.querySelector('#five').addEventListener('click', ()=>{
    document.querySelector('.img').classList.remove('img2')
    document.querySelector('.img').classList.remove('img3')
    document.querySelector('.img').classList.remove('img4')
    document.querySelector('.img').classList.remove('img1')
    document.querySelector('.img').classList.remove('img6')
    document.querySelector('.img').classList.add('img5')
    document.querySelector('body').classList.remove('fondo2')
    document.querySelector('body').classList.remove('fondo3')
    document.querySelector('body').classList.remove('fondo4')
    document.querySelector('body').classList.remove('fondo1')
    document.querySelector('body').classList.remove('fondo6')
    document.querySelector('body').classList.add('fondo5')
})

document.querySelector('#six').addEventListener('click', ()=>{
    document.querySelector('.img').classList.remove('img2')
    document.querySelector('.img').classList.remove('img3')
    document.querySelector('.img').classList.remove('img4')
    document.querySelector('.img').classList.remove('img5')
    document.querySelector('.img').classList.remove('img1')
    document.querySelector('.img').classList.add('img6')
    document.querySelector('body').classList.remove('fondo2')
    document.querySelector('body').classList.remove('fondo3')
    document.querySelector('body').classList.remove('fondo4')
    document.querySelector('body').classList.remove('fondo5')
    document.querySelector('body').classList.remove('fondo1')
    document.querySelector('body').classList.add('fondo6')
})

document.querySelector('.desc').addEventListener('click', ()=>{
    document.querySelector('.desc').classList.add('desc')
    document.querySelector('.det').classList.remove('det2')
    document.querySelector('.desc').classList.remove('desc2')
    document.querySelector('.text-details').classList.remove('text-details2')
    document.querySelector('.text-description').classList.remove('text-description2')
})

document.querySelector('.det').addEventListener('click', ()=>{
    document.querySelector('.det').classList.add('det2')
    document.querySelector('.desc').classList.add('desc2')
    document.querySelector('.text-details').classList.add('text-details2')
    document.querySelector('.text-description').classList.add('text-description2')
})

/*document.querySelector('.tinte').addEventListener('click', ()=>{
    if(document.querySelector('#one').checked){
        document.querySelector('.img').classList.toggle('img1')
        console.log("Entro img1")
    }

    if(document.querySelector('#two').checked){
        document.querySelector('.img').classList.toggle('img2')
        console.log("Entro img2")
    }
    
    if(document.querySelector('#three').checked){
        document.querySelector('.img').classList.toggle('img3')
        console.log("Entro img3")
    }
    
    if(document.querySelector('#four').checked){
        document.querySelector('.img').classList.toggle('img4')
        console.log("Entro img4")
    }
    if(document.querySelector('#five').checked){
        document.querySelector('.img').classList.toggle('img5')
        console.log("Entro img5")
    }
    if(document.querySelector('#six').checked){
        document.querySelector('.img').classList.toggle('img6')
        console.log("Entro img6")
    }
})*/

