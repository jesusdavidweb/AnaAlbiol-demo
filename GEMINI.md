# GEMINI.md - Contexto del Proyecto

Este archivo proporciona el contexto técnico y operativo para trabajar en el repositorio de **Ana Albiol - Web Oficial (Demo)**.

## 🌟 Resumen del Proyecto

Este proyecto es una demostración tecnológica de la web oficial de Ana Albiol, diseñada con un enfoque en el rendimiento extremo, SEO optimizado y una experiencia de usuario emocional y fluida.

- **Tipo de Proyecto:** Aplicación Web (SSG/SSR)
- **Framework Principal:** [Astro 6](https://astro.build/)
- **Componentes de UI:** [Svelte 5](https://svelte.dev/)
- **Arquitectura:** Salida estática (Static Output) desplegada mediante Nginx en Docker.

## 🛠️ Stack Tecnológico

- **Runtime & Package Manager:** [Bun](https://bun.sh/) (Mandatorio)
- **Estilos:** Vanilla CSS con Variables CSS (Custom Properties)
- **Animaciones:** [Motion for Svelte](https://motion.dev/)
- **Contenerización:** Docker & Docker Compose
- **Despliegue:** VPS Linux con Dokploy

## 🚀 Comandos Clave

### Desarrollo Local

```bash
bun install      # Instalar dependencias
bun run dev      # Iniciar servidor de desarrollo (http://localhost:4321)
```

### Producción y Build

```bash
bun run build    # Generar archivos estáticos en /dist
bun run preview  # Previsualizar el build localmente
```

### Docker

```bash
docker-compose up --build -d  # Levantar entorno productivo
```

## 📐 Convenciones de Desarrollo

### Idioma y Documentación

- **Código:** Toda la lógica (variables, funciones, clases) y comentarios deben estar en **Inglés**.
- **Documentación:** Archivos de documentación (README, CHANGELOG, guías) deben estar en **Español**.

### Estándares de Código

- **Simplicidad:** Priorizar soluciones limpias y optimizadas sobre arquitecturas complejas (KISS).
- **Modularidad:** Seguir principios DRY. Los componentes deben ser reutilizables y estar ubicados en `src/components/`.
- **Estilos:** Utilizar las variables definidas en `src/styles/global.css`. Preferir Vanilla CSS.
- **Frameworks:** No añadir librerías sin verificar su uso previo. El proyecto utiliza Svelte 5.

## 🎨 Identidad de Marca y Tono

Para mantener la coherencia con la visión de Ana Albiol, cualquier cambio en la UI/UX debe seguir estas pautas:

- **Colores:** Marsala (`#964F4C`) y Vainilla/Beige (`#F6F1EB`). Evitar colores estridentes.
- **Tono:** Marca personal, calma, profundidad y verdad. No debe parecer una web de "marketing de cursos".
- **Tipografía:** Protagonista, minimalista, con mucho "aire" (espaciado).
- **Mensaje Principal:** "Vivir antes de morir".
- **Emojis:** **NO** usar emojis en el contenido de la web.

### Estructura de Directorios

- `src/components/`: Componentes atómicos (Astro y Svelte).
- `src/layouts/`: Plantillas base de la aplicación.
- `src/pages/`: Rutas de la aplicación (sistema de enrutado basado en archivos de Astro).
- `src/styles/`: Estilos globales y configuraciones CSS.
- `public/`: Activos estáticos (imágenes, fuentes, etc.).

## 📋 Entregables Mandatorios (Contexto Global)

- Configuración Docker completa (`Dockerfile`, `docker-compose.yml`).
- Gestión de dependencias con Bun.
- Documentación en español.
- Preparado para despliegue en VPS (Dokploy).

---

_Este archivo es una guía dinámica y debe actualizarse si cambian las tecnologías o procesos del proyecto._
