document.addEventListener('DOMContentLoaded', () => {
  const toggleButton = document.getElementById('menu-toggle');
  const menuList = document.getElementById('menu-list');

  toggleButton.addEventListener('click', () => {
    const isHidden = menuList.hasAttribute('hidden');
    if (isHidden) {
      menuList.removeAttribute('hidden');
      toggleButton.setAttribute('aria-expanded', 'true');
    } else {
      menuList.setAttribute('hidden', '');
      toggleButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Datos simulados de relatos
  const relatos = [
    {
      categoria: "Dramaturgia",
      imagen: "img/Mito_Claudia.webp",
      alt: "Ilustración de un niño en un bosque oscuro",
      titulo: "El Mito de Claudia",
      sinopsis: "Claudia enfrenta batallas domésticas en un mundo donde las garrafas explotan como repollos, los virus entran por WhatsApp y las bicicletas fijas son una trampa. ¿Y si el encierro siempre fue parte del plan?",
      autor: "Claudia Fernandez, Catalina Artecona y Joaquín Doldán",
      ilustrador: "Nombre",
      audio: "audios/cuento1.mp3",
      fecha: "15/07/2025",
      enlace: "/cuentos/el_mito_de_claudia.html",
      videoLS: "https://www.youtube.com/embed/6SzEKPkNQwY" 
  },
    {
      categoria: "Cuento",
      imagen: "img/el_pozo.png",
      alt: "Ilustración de hojas flotando en el viento",
      titulo: "Título del cuento",
      sinopsis: "Sinopsis del cuento.",
      autor: "Nombre",
      ilustrador: "Nombre",
      audio: "audios/poema1.mp3",
      fecha: "10/07/2025",
      enlace: "#poema1"
    },
    {
      categoria: "Poesía",
      imagen: "img/poesia.jpg",
      alt: "Faro entre la niebla",
      titulo: "Título del poema",
      sinopsis: "Sinopsis del poema.",
      autor: "Nombre",
      ilustrador: "Nombre",
      audio: "audios/poema2.mp3",
      fecha: "18/07/2025",
      enlace: "#poema2"
    },
  ];

  const lista = document.getElementById('literatura-lista');

  relatos.forEach((relato, idx) => {
    const li = document.createElement('li');
    li.className = 'card';
    // El icono solo es interactivo si hay videoLS
    const iconoLS = relato.videoLS ?
      `<span class="card-sign" title="Lengua de Señas" aria-label="Lengua de Señas" role="button" tabindex="0" data-video="${relato.videoLS}" aria-haspopup="dialog">
        <span class="material-symbols-rounded">sign_language</span>
      </span>`
      :
      `<span class="card-sign" title="Lengua de Señas" aria-label="Lengua de Señas" style="opacity:0.3;cursor:not-allowed;">
        <span class="material-symbols-rounded">sign_language</span>
      </span>`;
    li.innerHTML = `
      <article>
        ${iconoLS}
        <a href="${relato.enlace}">
          <img src="${relato.imagen}" alt="${relato.alt}" class="card-img" />
        </a>
        <div class="card-content">
          <span class="categoria">${relato.categoria}</span>
          <h3 class="titulo">${relato.titulo}</h3>
          <p class="sinopsis">${relato.sinopsis}</p>
          <p class="autor"><strong>Autor:</strong> ${relato.autor}</p>
          <p class="ilustrador"><strong>Ilustrador:</strong> ${relato.ilustrador}</p>
          <audio controls>
            <source src="${relato.audio}" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
          <p class="fecha">Publicado: ${relato.fecha}</p>
        </div>
      </article>
    `;
    lista.appendChild(li);
  });

  // Modal funcionalidad
  const modal = document.getElementById('modal-ls');
  const iframe = document.getElementById('iframe-ls');
  const closeBtn = document.getElementById('close-modal-ls');

  document.querySelectorAll('.card-sign[role="button"]').forEach(icon => {
    icon.addEventListener('click', function(e) {
      const videoUrl = this.getAttribute('data-video');
      if (videoUrl) {
        iframe.src = videoUrl + '?autoplay=1';
        modal.removeAttribute('hidden');
        closeBtn.focus();
      }
    });
    icon.addEventListener('keydown', function(e) {
      if ((e.key === 'Enter' || e.key === ' ') && this.getAttribute('data-video')) {
        iframe.src = this.getAttribute('data-video') + '?autoplay=1';
        modal.removeAttribute('hidden');
        closeBtn.focus();
      }
    });
  });

  function closeModalLS() {
    modal.setAttribute('hidden', '');
    iframe.src = '';
  }
  closeBtn.addEventListener('click', closeModalLS);
  modal.addEventListener('click', function(e) {
    if (e.target === modal) closeModalLS();
  });
  document.addEventListener('keydown', function(e) {
    if (!modal.hasAttribute('hidden') && (e.key === 'Escape' || e.key === 'Esc')) {
      closeModalLS();
    }
  });
});
