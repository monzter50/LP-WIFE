# 💕 Nuestros Momentos Especiales - Jira&Mono

Una colección digital de todos los momentos especiales de tu vida con tu esposa. Cada momento es una presentación única que cuenta una parte de tu historia de amor.

## 🎯 Estructura del Proyecto

```
LP-WIFE/
├── public/
│   ├── index.html              # Página principal (índice de momentos)
│   ├── assets/
│   │   ├── style.css           # Estilos principales
│   │   └── main.js             # Funcionalidad JavaScript
│   ├── momentos/               # Carpeta con presentaciones específicas
│   │   ├── primer-ano.html     # Presentación del primer año
│   │   ├── nuestra-boda.html   # Presentación de la boda
│   │   ├── primer-viaje.html   # Presentación del primer viaje
│   │   ├── nuestro-hogar.html  # Presentación de su casa
│   │   ├── nuestros-logros.html # Presentación de logros
│   │   └── momentos-futuros.html # Presentación del futuro
│   └── video/                  # Videos personales
└── README.md                   # Este archivo
```

## 📸 Cómo Reemplazar las Imágenes

## 📸 Cómo Reemplazar las Imágenes

### Ubicaciones de las Imágenes en el Código:

1. **Imagen de Portada** (Línea 25 en `index.html`)
   - **Ubicación**: `src="https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=1200&h=800&fit=crop"`
   - **Reemplazar con**: Tu foto de fondo romántica
   - **Recomendación**: Una imagen de ustedes juntos o un paisaje romántico

2. **Imagen 1 - "¡Ya un año!"** (Línea 45 en `index.html`)
   - **Ubicación**: `src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop"`
   - **Reemplazar con**: Foto de ustedes juntos
   - **Recomendación**: Una foto que represente su primer año juntos

3. **Imagen 2 - "La Promesa"** (Línea 65 en `index.html`)
   - **Ubicación**: `src="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=600&fit=crop"`
   - **Reemplazar con**: Foto de su promesa/matrimonio
   - **Recomendación**: Foto del día de su boda o cuando se comprometieron

4. **Imagen 3 - "La Fuerza"** (Línea 85 en `index.html`)
   - **Ubicación**: `src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=600&fit=crop"`
   - **Reemplazar con**: Foto que represente su fuerza
   - **Recomendación**: Foto de ella en un momento de superación o logro

5. **Imagen 4 - "La Honestidad"** (Línea 105 en `index.html`)
   - **Ubicación**: `src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=600&fit=crop"`
   - **Reemplazar con**: Foto que represente honestidad/confianza
   - **Recomendación**: Foto de ustedes mirándose a los ojos o en un momento íntimo

6. **Imagen 5 - "Tu sonrisa"** (Línea 125 en `index.html`)
   - **Ubicación**: `src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=800&h=600&fit=crop"`
   - **Reemplazar con**: Foto de ella sonriendo
   - **Recomendación**: Su mejor sonrisa, una foto que te haga feliz

### 🎥 Configuración del Video

**Ubicación del Video** (Línea 145 en `index.html`):
```html
<video id="video" class="img-fluid animate flex-items" controls preload="metadata">
  <source src="./video/videoplayback.mp4" type="video/mp4">
  <source src="./video/videoplayback.webm" type="video/webm">
  Your browser does not support HTML5 video.
</video>
```

**Para reemplazar el video:**
1. Coloca tu video en la carpeta `public/video/`
2. Cambia `videoplayback.mp4` por el nombre de tu archivo
3. Si tienes diferentes formatos, agrega las líneas correspondientes

## 🎵 Control de Audio

- **Botón de Audio**: Aparece en la esquina superior izquierda
- **Funcionalidad**: Activa/desactiva el sonido del video
- **Automático**: El video se reproduce automáticamente cuando está visible (si el audio está activado)

## 🎨 Características del Diseño

- **Diseño Responsivo**: Se adapta a todos los dispositivos
- **Efectos Visuales**: Partículas flotantes, confeti, transiciones suaves
- **Paleta Romántica**: Colores rosas y púrpuras
- **Tipografía Elegante**: Playfair Display para títulos, Poppins para texto
- **Animaciones**: Efectos de hover, transiciones fluidas

## 🚀 Cómo Usar

### **Página Principal (Índice)**
1. **Abrir**: `public/index.html` - Esta es tu página principal
2. **Navegar**: Usa la rueda del mouse o los bullets para ver todos los momentos
3. **Explorar**: Cada momento tiene su propia tarjeta con información y botón

### **Presentaciones Específicas**
1. **Crear Nuevas**: Copia `public/momentos/primer-ano.html` como plantilla
2. **Personalizar**: Modifica el contenido, imágenes y videos
3. **Enlazar**: Actualiza los enlaces en `index.html` y `main.js`

### **Reemplazar Contenido**
1. **Imágenes**: Cambia las URLs en cada archivo HTML
2. **Videos**: Coloca tus videos en `public/video/` y actualiza las referencias
3. **Textos**: Modifica los textos según cada momento específico
4. **Probar**: Abre `public/index.html` en tu navegador

## 💡 Consejos para las Imágenes

- **Formato**: JPG o PNG
- **Tamaño**: Mínimo 800x600 píxeles
- **Calidad**: Alta resolución para mejor visualización
- **Proporción**: Idealmente 4:3 o 16:9
- **Peso**: Optimiza las imágenes para carga rápida

## 🎯 Funciones Especiales

- **Página Principal**: Índice de todos los momentos especiales
- **Tarjetas de Momentos**: Cada momento tiene su propia tarjeta con información
- **Botones de Acción**: "Ver Este Momento" para abrir presentaciones específicas
- **Navegación**: Usa la rueda del mouse o los bullets de la derecha
- **Efectos**: Cada interacción tiene efectos visuales y de confeti
- **Botón de Regreso**: En cada presentación específica para volver al índice
- **Ctrl+I**: Muestra las instrucciones de imágenes (solo en desarrollo)

## 📱 Compatibilidad

- ✅ Chrome, Firefox, Safari, Edge
- ✅ Desktop, Tablet, Mobile
- ✅ Navegadores modernos con soporte para CSS Grid y Flexbox

---

**¡Que disfrutes creando esta presentación especial para tu esposa! 💕**
