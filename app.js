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
      categoria: "Cuento",
      imagen: "img/cuento1.png",
      alt: "Ilustración de un niño en un bosque oscuro",
      titulo: "El bosque susurra",
      sinopsis: "Un niño se adentra en un bosque misterioso donde los árboles parecen hablar y los secretos se esconden entre las sombras. ¿Logrará encontrar el camino de regreso?",
      autor: "María López",
      ilustrador: "Juan Pérez",
      audio: "audios/cuento1.mp3",
      fecha: "15/07/2025",
      enlace: "#cuento1"
    },
    {
      categoria: "Poesía",
      imagen: "img/el_pozo.png",
      alt: "Ilustración de hojas flotando en el viento",
      titulo: "Hojas al viento",
      sinopsis: "Versos que exploran la libertad y el paso del tiempo, comparando la vida con hojas que bailan y se dejan llevar por la brisa.",
      autor: "Carlos Ruiz",
      ilustrador: "Ana Torres",
      audio: "audios/poema1.mp3",
      fecha: "10/07/2025",
      enlace: "#poema1"
    },
    {
      categoria: "Cuento",
      imagen: "img/cuento2.jpg",
      alt: "Faro entre la niebla",
      titulo: "El faro en la niebla",
      sinopsis: "Cada noche, el faro guiaba a los barcos perdidos entre la bruma. Pero una noche, la luz titiló y un misterioso visitante llegó a la costa, cambiando la vida del farero para siempre.",
      autor: "Sofía Méndez",
      ilustrador: "Pedro Salas",
      audio: "audios/cuento2.mp3",
      fecha: "18/07/2025",
      enlace: "#cuento2"
    },
    {
      categoria: "Poesía",
      imagen: "img/poema2.jpg",
      alt: "Río fluyendo entre árboles",
      titulo: "Caminos de agua",
      sinopsis: "Ríos que cruzan la tierra, llevando historias y sueños. Susurros de peces y hojas, viajando hacia el mar infinito.",
      autor: "Lucía Torres",
      ilustrador: "Miguel Ríos",
      audio: "audios/poema2.mp3",
      fecha: "19/07/2025",
      enlace: "#poema2"
    },
    {
      categoria: "Microcuento",
      imagen: "img/microcuento1.jpg",
      alt: "Reloj detenido en el tiempo",
      titulo: "El instante eterno",
      sinopsis: "El reloj se detuvo justo antes del beso. El tiempo, celoso, no quiso que ese instante terminara jamás.",
      autor: "Gabriel Soto",
      ilustrador: "Elena Vidal",
      audio: "audios/microcuento1.mp3",
      fecha: "20/07/2025",
      enlace: "#microcuento1"
    },
    {
      categoria: "Poesía Visual",
      imagen: "img/poesia_visual.jpg",
      alt: "Haz de luz atravesando una ventana",
      titulo: "Luz",
      sinopsis: "Un haz atraviesa la ventana, dibujando en el suelo palabras que sólo el polvo puede leer.",
      autor: "Valeria Núñez",
      ilustrador: "Tomás Blanco",
      audio: "audios/poesia_visual.mp3",
      fecha: "21/07/2025",
      enlace: "#poesia_visual"
    }
  ];

  const lista = document.getElementById('literatura-lista');

  relatos.forEach(relato => {
    const li = document.createElement('li');
    li.className = 'card';
    li.innerHTML = `
      <article>
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
});
