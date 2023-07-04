window.addEventListener('DOMContentLoaded', function() {
    // Función para calcular y mostrar las dimensiones de la pantalla
    function calcularDimensionesPantalla() {
      var ancho = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
      var alto = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
  
      var dimensionesElemento = document.getElementById('dimensiones');
      dimensionesElemento.textContent = 'Ancho: ' + ancho + 'px | Alto: ' + alto + 'px';
    }
  
    // Llamar a la función al cargar la página y en caso de cambio de tamaño de la ventana
    calcularDimensionesPantalla();
    window.addEventListener('resize', calcularDimensionesPantalla);
  });