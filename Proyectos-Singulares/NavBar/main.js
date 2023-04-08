document.querySelector(".hamb").addEventListener('click', function(e) {
    document.getElementById('one').classList.toggle('oneClick')
    document.getElementById('two').classList.toggle('twoClick')
    document.getElementById('trhee').classList.toggle('trheeClick')
    document.querySelector('.menu').classList.toggle('menuClick')
})