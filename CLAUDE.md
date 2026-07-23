# ACP — Estudio Jurídico Contable | Proyecto Web

## Descripción del cliente
ACP Estudio Jurídico Contable es un estudio profesional ubicado en CABA, Buenos Aires, Argentina. Combina dos especialidades: asesoramiento jurídico y contable. El sitio debe transmitir confianza, seriedad y profesionalismo. No es un sitio de tecnología ni de startups — el tono es de estudio profesional establecido, clásico y moderno a la vez.

- **Email:** estudiocalderaroalvarez@gmail.com
- **Teléfono:** 11-5760-7128
- **Dirección:** CABA, Buenos Aires, Argentina
- **Web actual (referencia):** https://estudioacp.wixsite.com/acpestudio

---

## Identidad visual

### Paleta de colores
```
--color-black:       #211915;   /* Negro principal — textos, fondos oscuros */
--color-red:         #BF0411;   /* Rojo principal — CTAs, acentos, highlights */
--color-red-dark:    #620F14;   /* Rojo oscuro — degradé, hover states */
--color-white:       #FFFFFF;   /* Blanco — fondo general */
--color-light-gray:  #F5F5F3;   /* Gris claro — fondos de secciones alternas */
--color-mid-gray:    #E8E6E3;   /* Gris medio — separadores, bordes */
--color-text:        #2C2C2C;   /* Texto cuerpo */
--color-text-muted:  #6B6B6B;   /* Texto secundario */
```

### Tipografía
- **Principal (títulos/headings):** "The Castle Elizah" — serif elegante.
  - Alternativa Google Fonts si no está disponible: `Playfair Display` (serif, similar peso visual)
  - Usar para: H1, H2, nombres de profesionales, títulos de sección
- **Secundaria (subtítulos/UI):** "Century Gothic Bold" — sans-serif geométrica
  - Alternativa Google Fonts: `Josefin Sans` o `Nunito` (bold)
  - Usar para: H3, labels, botones, navegación, cuerpo en negrita
- **Cuerpo de texto:** `Inter` o `DM Sans` — legible, neutro, moderno

### Jerarquía tipográfica sugerida
```css
h1: "The Castle Elizah" / Playfair Display — 56–72px, negro
h2: "The Castle Elizah" / Playfair Display — 36–48px
h3: Century Gothic Bold / Josefin Sans — 20–24px, uppercase con letter-spacing
body: Inter / DM Sans — 16–18px, color-text
label/small: Century Gothic / Josefin Sans — 12–14px, uppercase, muted
```

### Estilo visual general
- Fondo blanco / gris muy claro — tema CLARO para dar confianza y seriedad profesional
- Acentos rojos en CTAs, líneas decorativas, highlights y hovers
- Negro profundo (#211915) para textos y fondos de secciones oscuras (hero, footer)
- Espaciado generoso — secciones con padding 80–120px
- Fotografías profesionales, en blanco y negro o con overlay oscuro cuando sea necesario
- Animaciones sutiles: fade-in on scroll, hover suaves — nada llamativo
- Líneas finas como separadores decorativos (inspirado en el manual de marca)

---

## Estructura del sitio

### Páginas
```
/              → Home (landing principal)
/juridica      → Área Jurídica (página completa)
/contable      → Área Contable (página completa)
```

Todas las páginas comparten el mismo sistema de diseño: tipografías, colores, header y footer.

---

## Secciones — Home (`/`)

### 1. HEADER / NAV
- Logo ACP (isologotipo principal) a la izquierda
- Links de navegación: Inicio / Nosotros / Áreas / Testimonios / Contacto
- Dos CTAs diferenciados: "Área Jurídica" | "Área Contable"
- Sticky, fondo blanco con borde sutil al scrollear
- Mobile: hamburger menu

### 2. HERO
- Objetivo: presentar el estudio y generar confianza inmediata
- Fondo oscuro (#211915) o fotografía profesional con overlay
- Headline grande en serif: nombre del estudio y propuesta de valor
- Subtítulo breve en sans-serif
- Dos CTAs: "Conocé el Área Jurídica" → /juridica | "Conocé el Área Contable" → /contable
- Elemento decorativo: línea roja o acento rojo sutil
- **SEO:** H1 con nombre del estudio + especialidad + ciudad

### 3. PROFESIONALES
- Objetivo: humanizar el estudio y dirigir tráfico a cada subpágina
- Dos cards grandes, una por profesional (lado a lado en desktop, stack en mobile)
- Cada card: foto profesional, nombre, rol (Abogada / Contadora), breve frase, CTA → /juridica o /contable
- Fondo blanco o gris muy claro
- Diseño elegante: sin bordes recargados, tipografía limpia

### 4. NOSOTROS
- Objetivo: construir confianza institucional
- Foto del estudio o de ambas profesionales juntas
- Texto breve sobre la historia y valores del estudio
- Badges / íconos de certificaciones, matrículas, años de experiencia
- Estilo: sección dividida en dos columnas (foto | texto) o layout asimétrico
- Fondo blanco o gris claro

### 5. TESTIMONIOS
- Objetivo: prueba social
- 3–5 testimonios de clientes reales (placeholder en demo)
- Diseño: cards o slider sutil
- Cada testimonio: nombre, empresa/rol (opcional), texto
- Puede incluir estrellas o sin ellas (a definir con el cliente)
- Fondo gris muy claro (#F5F5F3) para diferenciar

### 6. UBICACIÓN
- Título de sección + dirección completa
- Google Maps embed (iframe) 
- Información de contacto: dirección, teléfono, email, horarios de atención
- CTA: "Contactanos" → formulario o WhatsApp

### 7. FOOTER
- Logo ACP
- Links de navegación completos
- Datos del estudio: dirección, email, teléfono
- **Aviso legal obligatorio:** matrícula profesional, CPCE (si corresponde), jurisdicción
- Copyright año + nombre del estudio
- Texto: "Este sitio tiene fines informativos. El contenido no constituye asesoramiento jurídico ni contable."
- Fondo #211915 (negro), texto blanco, acentos rojos

---

## Secciones — Subpáginas internas (`/juridica` y `/contable`)

> Ambas páginas siguen la misma estructura. El contenido, imágenes y servicios cambian según el área.

### 1. HERO INTERNO (compacto)
- Más bajo que el hero del home (~50–60vh)
- Título del área + descripción breve
- CTA principal: "Consultá ahora" → baja al formulario o WhatsApp
- Fondo oscuro o imagen con overlay, acento rojo
- **SEO:** H1 específico del área + ciudad

### 2. SERVICIOS
- Grid de cards (3 o 4 columnas en desktop, 1–2 en mobile)
- Cada servicio: ícono simple + nombre + descripción breve (2–3 líneas)
- Los servicios son placeholder en la demo, se completan con el cliente
- Fondo blanco o gris muy claro

### 3. PRESENTACIÓN DEL PROFESIONAL
- Foto grande del profesional
- Nombre, título, matrícula
- Texto de presentación: formación, experiencia, enfoque
- Certificaciones o estudios destacados
- Diseño en dos columnas (foto | info) con elegancia

### 4. FORMULARIO DE CONTACTO
- Campos: Nombre completo / Email / Teléfono / Motivo de consulta (select) / Mensaje
- CTA del botón: "Enviar consulta"
- Alternativa WhatsApp con link directo a número
- Texto legal debajo del formulario: política de privacidad básica
- Manejo de envío: preferentemente con EmailJS o Formspree (sin backend)

---

## Stack técnico

```
HTML5 semántico
CSS3 — custom properties, flexbox, grid, animaciones con @keyframes / transitions
JavaScript vanilla — scroll animations (IntersectionObserver), menú mobile, slider
```

> Para la demo: todo en HTML/CSS/JS puro, un archivo por página.
> Para producción: puede migrar a React + Vite según necesidad.

### Dependencias externas permitidas
- Google Fonts (Playfair Display + Josefin Sans como alternativas)
- Google Maps Embed API (iframe, sin clave para demo)
- Font Awesome o Heroicons (íconos)
- AOS.js (scroll animations, opcional)

---

## SEO — Lineamientos

- H1 único y descriptivo en cada página
- Meta title: "ACP Estudio Jurídico Contable | CABA, Buenos Aires"
- Meta description: máx 160 caracteres, con especialidad y ubicación
- Schema.org markup: `LegalService` y `AccountingService` (JSON-LD)
- Alt text en todas las imágenes
- URLs limpias: `/`, `/juridica`, `/contable`
- Open Graph tags para redes sociales

---

## CTAs y conversión

- **CTA primario:** "Consultá ahora" / "Solicitar consulta" → formulario o WhatsApp
- **CTA secundario:** "Conocé nuestros servicios" → baja a sección servicios
- **CTA de área:** "Área Jurídica" / "Área Contable" → subpáginas
- Los botones rojos (#BF0411) son siempre CTAs primarios
- Los botones con borde son CTAs secundarios

---

## Tono y comunicación

- Serio, profesional y cercano
- Hablar de resultados y tranquilidad, no de procesos técnicos
- Evitar: "responsive", "frontend", "optimizado", "stack"
- Usar: "asesoramiento", "soluciones", "acompañamiento", "claridad", "protección", "orden"
- Idioma: español argentino

---

## Referencias de diseño

- https://www.estudio-ofarrell.com/
- https://www.marval.com/lang=es
- https://beccarvarela.com/
- https://ntma.com.ar/

---

## Estado del proyecto

- [ ] Demo / maqueta (layout + diseño, textos placeholder) → **PRIMERA ENTREGA**
- [ ] Contenido real (textos, fotos de profesionales)
- [ ] Integración formulario
- [ ] Google Maps embed
- [ ] SEO final
- [ ] Revisión legal / footer
- [ ] Deploy

---

## Notas para la demo

En la primera entrega (demo):
- Textos: usar placeholders realistas, no "Lorem ipsum" — textos que simulen el contenido final
- Imágenes: usar fotos de stock profesionales (unsplash, pexels) en blanco y negro o tonos oscuros
- Funcionalidad: el formulario puede no enviar, el mapa puede ser un placeholder visual
- El cliente debe poder ver layout, jerarquía visual, tipografías y paleta de colores
- Las animaciones de scroll deben estar activas para dar la experiencia real
