/* Único script del sitio: abre y cierra el menú en el celular.
   No guarda datos, no usa cookies ni se conecta a internet. */
document.documentElement.classList.add('js');

document.addEventListener('DOMContentLoaded', function () {
  // Si el enlace apunta a un acordeón (por ejemplo anexo.html#legal), lo abre.
  function abrirAcordeon() {
    var id = decodeURIComponent(location.hash.slice(1));
    var el = id && document.getElementById(id);
    if (el && el.tagName === 'DETAILS') { el.open = true; el.scrollIntoView(); }
  }
  abrirAcordeon();
  window.addEventListener('hashchange', abrirAcordeon);

  var boton = document.querySelector('.boton-menu');
  var menu = document.getElementById('menu');
  if (!boton || !menu) return;

  function fijar(abierto) {
    boton.setAttribute('aria-expanded', abierto ? 'true' : 'false');
    boton.textContent = abierto ? 'Cerrar' : 'Menú';
    menu.classList.toggle('abierto', abierto);
  }

  boton.addEventListener('click', function () {
    fijar(boton.getAttribute('aria-expanded') !== 'true');
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && boton.getAttribute('aria-expanded') === 'true') {
      fijar(false);
      boton.focus();
    }
  });
});
