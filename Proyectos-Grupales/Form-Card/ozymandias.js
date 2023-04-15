const logos = document.querySelectorAll('.logos > div');

logos.forEach(logo => {
    logo.addEventListener('click', () => {
        logos.forEach(logo => logo.classList.remove('activated'))
        logo.classList.add('activated');
    })
})