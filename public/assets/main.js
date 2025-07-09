// Fullscreen scroll

if (document.body.classList.contains("fullscreen")) {
  const sectionHTML = document.querySelectorAll("section");
  const content = document.querySelector(".main__content");
  let spin_value = 0;
  navigation = '';
  // document.body.insertAdjacentElement(`beforeEnd`,`<div class="navigation"></div>`);
  for(let i=0;i<sectionHTML.length;i++){
    navigation += `<div class="bullets ${i==0?'active':''}"></div>`
  }
  document.querySelector('.navigation').innerHTML = navigation

  const bullets = document.querySelectorAll('.bullets')

bullets.forEach((bullet,index)=>{
  bullet.addEventListener('click',(e)=>{
    console.log(bullet)
    document.querySelector('.bullets.active').classList.remove('active')
    bullet.classList.add('active')
    spin_value = index
    scroll_value(spin_value)
    
    // Efecto de ripple al hacer click
    createRippleEffect(e, bullet)
    
    // Efecto de confeti
    createConfetti(e.clientX, e.clientY)
  })
  
  // Efectos de mouse down y mouse up
  bullet.addEventListener('mousedown', (e) => {
    bullet.style.transform = 'scale(0.9)'
    bullet.style.transition = 'all 0.1s ease'
  })
  
  bullet.addEventListener('mouseup', (e) => {
    bullet.style.transform = ''
    bullet.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  })
  
  bullet.addEventListener('mouseleave', (e) => {
    bullet.style.transform = ''
    bullet.style.transition = 'all 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
  })
})

// Función para crear efecto ripple
function createRippleEffect(event, element) {
  const ripple = document.createElement('span')
  const rect = element.getBoundingClientRect()
  const size = Math.max(rect.width, rect.height)
  const x = event.clientX - rect.left - size / 2
  const y = event.clientY - rect.top - size / 2
  
  ripple.style.width = ripple.style.height = size + 'px'
  ripple.style.left = x + 'px'
  ripple.style.top = y + 'px'
  ripple.classList.add('ripple')
  
  element.appendChild(ripple)
  
  setTimeout(() => {
    ripple.remove()
  }, 600)
}

  // Control de scroll con throttling para evitar múltiples eventos
  let isScrolling = false;
  
  window.addEventListener("wheel", e => {
    if (isScrolling) return; // Evitar múltiples scrolls simultáneos
    
    isScrolling = true;
    
    if (e.deltaY > 0) {
      if (spin_value < sectionHTML.length - 1) spin_value += 1;
    } else {
      if (spin_value > 0) spin_value -= 1;
    }
    scroll_value(spin_value);
    
    // Esperar a que termine la transición antes de permitir otro scroll
    setTimeout(() => {
      isScrolling = false;
    }, 1500); // Coincide con la duración de la transición CSS
  });
  const scroll_value = count => {
    content.setAttribute("style", `transform:translateY(-${count * 100}vh);`);
    document.querySelector('.bullets.active').classList.remove('active')
    bullets[count].classList.add('active')
  };
}
// Animates
const animateCSS = document.querySelectorAll(".animate");

const config = {
  rootMargin: "50px 20px 75px 30px",
  threshold: [0, 0.25, 0.75, 1]
};
let observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.intersectionRatio > 0) {
      entry.target.classList.add("fadeIn");
      console.log("in the view", entry.target);
    } else {
      entry.target.classList.remove("fadeIn");
      console.log("out of view", entry.target);
    }
  });
}, config);

animateCSS.forEach(el => {
  observer.observe(el);
});

const $video = document.querySelector('#video')
  
    const options = {
      // root: document.querySelector('body'),
      rootMargin: '0px 0px 0px 0px',
      threshold: .5,
    }
    function callback(entries, observer) {
      console.log('se llamó al callback')
      if (entries[0].isIntersecting) {
        $video.play()
      } else {
        $video.pause()
      }
    }
    const observerVideo = new IntersectionObserver(callback, options)
    observerVideo.observe($video)

// Crear partículas flotantes de corazones
function createFloatingHearts() {
  const heartsContainer = document.getElementById('floatingHearts');
  const hearts = ['💕', '💖', '💗', '💓', '💝', '💘', '💞', '💟'];
  
  for (let i = 0; i < 15; i++) {
    const heart = document.createElement('div');
    heart.className = 'heart-particle';
    heart.textContent = hearts[Math.floor(Math.random() * hearts.length)];
    heart.style.left = Math.random() * 100 + '%';
    heart.style.top = Math.random() * 100 + '%';
    heart.style.animationDelay = Math.random() * 6 + 's';
    heart.style.animationDuration = (Math.random() * 3 + 4) + 's';
    
    heartsContainer.appendChild(heart);
  }
}

// Inicializar partículas cuando se carga la página
document.addEventListener('DOMContentLoaded', () => {
  createFloatingHearts();
  
  // Configurar el video inicialmente
  if (video) {
    // Asegurar que el video esté muteado al inicio
    video.muted = true;
    video.volume = 1.0;
    
    // Agregar indicador visual de que el audio está desactivado
    const videoContainer = video.parentElement;
    if (videoContainer) {
      videoContainer.style.position = 'relative';
    }
    
    console.log('Video configurado - Audio inicialmente desactivado');
  }
});

// Efecto de confeti al hacer click en los bullets
function createConfetti(x, y) {
  const colors = ['#ff6b9d', '#c44569', '#f8b5d3', '#ffd93d', '#6bcf7f'];
  const confettiCount = 30;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    confetti.style.position = 'fixed';
    confetti.style.left = x + 'px';
    confetti.style.top = y + 'px';
    confetti.style.width = '8px';
    confetti.style.height = '8px';
    confetti.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    confetti.style.borderRadius = '50%';
    confetti.style.pointerEvents = 'none';
    confetti.style.zIndex = '9999';
    confetti.style.transform = 'translate(-50%, -50%)';
    
    const angle = Math.random() * Math.PI * 2;
    const velocity = Math.random() * 10 + 5;
    const vx = Math.cos(angle) * velocity;
    const vy = Math.sin(angle) * velocity;
    
    document.body.appendChild(confetti);
    
    let posX = x;
    let posY = y;
    let opacity = 1;
    
    function animateConfetti() {
      posX += vx;
      posY += vy;
      opacity -= 0.02;
      
      confetti.style.left = posX + 'px';
      confetti.style.top = posY + 'px';
      confetti.style.opacity = opacity;
      
      if (opacity > 0) {
        requestAnimationFrame(animateConfetti);
      } else {
        confetti.remove();
      }
    }
    
    requestAnimationFrame(animateConfetti);
  }
}

// Control de Audio para el Video
let isAudioEnabled = false;
const audioBtn = document.getElementById('audioToggle');
const video = document.getElementById('video');

// Función para manejar el control de audio
function toggleAudio() {
  if (isAudioEnabled) {
    // Desactivar audio
    video.muted = true;
    audioBtn.classList.remove('audio-on');
    audioBtn.classList.add('audio-off');
    audioBtn.querySelector('.audio-icon').textContent = '🔇';
    audioBtn.querySelector('.audio-text').textContent = 'Activar Sonido';
    isAudioEnabled = false;
    console.log('Audio desactivado');
  } else {
    // Activar audio
    video.muted = false;
    audioBtn.classList.remove('audio-off');
    audioBtn.classList.add('audio-on');
    audioBtn.querySelector('.audio-icon').textContent = '🔊';
    audioBtn.querySelector('.audio-text').textContent = 'Desactivar Sonido';
    isAudioEnabled = true;
    console.log('Audio activado');
    
    // Intentar reproducir el video si está visible
    if (video.offsetParent !== null) {
      video.play().catch(e => {
        console.log('Error al reproducir automáticamente:', e);
        // Mostrar mensaje al usuario
        showVideoMessage('Haz click en el video para reproducir');
      });
    }
  }
}

// Event listener para el botón de audio
if (audioBtn) {
  audioBtn.addEventListener('click', toggleAudio);
}

// Función para mostrar mensajes sobre el video
function showVideoMessage(message) {
  const videoInfo = document.querySelector('.video-info');
  if (videoInfo) {
    videoInfo.querySelector('p').textContent = message;
    videoInfo.style.display = 'block';
    setTimeout(() => {
      videoInfo.style.display = 'none';
    }, 3000);
  }
}

// Event listeners para el video
if (video) {
  // Cuando el video se carga
  video.addEventListener('loadedmetadata', () => {
    console.log('Video cargado, duración:', video.duration);
  });
  
  // Cuando el video comienza a reproducir
  video.addEventListener('play', () => {
    console.log('Video reproduciendo');
    if (isAudioEnabled) {
      video.muted = false;
    }
  });
  
  // Cuando hay un error
  video.addEventListener('error', (e) => {
    console.log('Error en el video:', e);
    showVideoMessage('Error al cargar el video');
  });
  
  // Cuando el usuario interactúa con el video
  video.addEventListener('click', () => {
    if (isAudioEnabled && video.paused) {
      video.play().catch(e => console.log('Error al reproducir:', e));
    }
  });
}

// Observar cuando el video entra en vista
const videoObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      console.log('Video visible');
      if (isAudioEnabled) {
        video.play().catch(e => {
          console.log('No se pudo reproducir automáticamente:', e);
          showVideoMessage('Haz click en el video para reproducir');
        });
      }
    } else {
      console.log('Video no visible');
      video.pause();
    }
  });
}, { threshold: 0.5 });

if (video) {
  videoObserver.observe(video);
}

// Función para mostrar instrucciones de imágenes (solo en desarrollo)
function showImageInstructions() {
  const instructions = document.querySelector('.image-instructions');
  if (instructions) {
    instructions.style.display = 'block';
    instructions.style.position = 'fixed';
    instructions.style.top = '50%';
    instructions.style.left = '50%';
    instructions.style.transform = 'translate(-50%, -50%)';
    instructions.style.background = 'rgba(255, 255, 255, 0.95)';
    instructions.style.padding = '2rem';
    instructions.style.borderRadius = '20px';
    instructions.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
    instructions.style.zIndex = '10000';
    instructions.style.maxWidth = '500px';
  }
}

// Mostrar instrucciones con Ctrl+I (solo en desarrollo)
document.addEventListener('keydown', (e) => {
  if (e.ctrlKey && e.key === 'i') {
    showImageInstructions();
  }
});

// Función para abrir momentos específicos
function openMoment(momentId) {
  const moments = {
    'primer-ano': {
      title: '¡Nuestro Primer Año Juntos!',
      url: './momentos/primer-ano.html',
      description: 'Una presentación especial para celebrar nuestro primer año de amor'
    },
    'nuestra-boda': {
      title: 'El Día de Nuestra Boda',
      url: './momentos/nuestra-boda.html',
      description: 'Recuerdos del día más importante de nuestras vidas'
    },
    'primer-viaje': {
      title: 'Nuestro Primer Viaje Juntos',
      url: './momentos/primer-viaje.html',
      description: 'Aventuras y descubrimientos en nuestro primer viaje'
    },
    'nuestro-hogar': {
      title: 'Nuestro Hogar',
      url: './momentos/nuestro-hogar.html',
      description: 'Construyendo nuestro nido de amor'
    },
    'nuestros-logros': {
      title: 'Nuestros Logros Juntos',
      url: './momentos/nuestros-logros.html',
      description: 'Superando desafíos como equipo'
    },
    'momentos-futuros': {
      title: 'Momentos por Crear',
      url: './momentos/momentos-futuros.html',
      description: 'Nuestro futuro juntos'
    }
  };

  const moment = moments[momentId];
  
  if (moment) {
    // Crear efecto de transición antes de abrir
    createTransitionEffect(() => {
      // Por ahora, mostrar un mensaje (puedes cambiar esto por la URL real)
      showMomentPreview(moment);
    });
  }
}

// Función para crear efecto de transición
function createTransitionEffect(callback) {
  const overlay = document.createElement('div');
  overlay.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--gradient-primary);
    z-index: 10000;
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.5s ease;
  `;
  
  overlay.innerHTML = `
    <div style="text-align: center; color: white;">
      <div style="font-size: 3rem; margin-bottom: 1rem;">💕</div>
      <div style="font-size: 1.5rem; font-weight: 600;">Cargando momento especial...</div>
    </div>
  `;
  
  document.body.appendChild(overlay);
  
  setTimeout(() => {
    overlay.style.opacity = '1';
  }, 10);
  
  setTimeout(() => {
    overlay.style.opacity = '0';
    setTimeout(() => {
      document.body.removeChild(overlay);
      callback();
    }, 500);
  }, 1500);
}

// Función para mostrar preview del momento (temporal)
function showMomentPreview(moment) {
  const modal = document.createElement('div');
  modal.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10001;
    display: flex;
    align-items: center;
    justify-content: center;
    backdrop-filter: blur(10px);
  `;
  
  modal.innerHTML = `
    <div style="
      background: white;
      padding: 3rem;
      border-radius: 20px;
      max-width: 500px;
      text-align: center;
      box-shadow: 0 20px 40px rgba(0,0,0,0.3);
      position: relative;
    ">
      <button onclick="this.parentElement.parentElement.remove()" style="
        position: absolute;
        top: 1rem;
        right: 1rem;
        background: none;
        border: none;
        font-size: 1.5rem;
        cursor: pointer;
        color: #666;
      ">×</button>
      
      <div style="font-size: 3rem; margin-bottom: 1rem;">💕</div>
      <h2 style="color: var(--secondary-color); margin-bottom: 1rem;">${moment.title}</h2>
      <p style="color: #666; margin-bottom: 2rem;">${moment.description}</p>
      
      <div style="
        background: var(--gradient-primary);
        color: white;
        padding: 1rem 2rem;
        border-radius: 25px;
        display: inline-block;
        margin: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
      " onclick="window.open('${moment.url}', '_blank')">
        🚀 Abrir Presentación Completa
      </div>
      
      <div style="
        background: rgba(255, 107, 157, 0.1);
        color: var(--secondary-color);
        padding: 1rem 2rem;
        border-radius: 25px;
        display: inline-block;
        margin: 0.5rem;
        cursor: pointer;
        transition: all 0.3s ease;
      " onclick="this.parentElement.parentElement.remove()">
        💕 Seguir Explorando
      </div>
    </div>
  `;
  
  document.body.appendChild(modal);
  
  // Efecto de confeti al abrir el modal
  createConfetti(window.innerWidth / 2, window.innerHeight / 2);
}