# 🌸 Ana Albiol - Web Oficial (Demo)

[![Astro](https://img.shields.io/badge/Astro-BC52EE?style=for-the-badge&logo=astro&logoColor=white)](https://astro.build/)
[![Svelte](https://img.shields.io/badge/Svelte-FF3E00?style=for-the-badge&logo=svelte&logoColor=white)](https://svelte.dev/)
[![Bun](https://img.shields.io/badge/Bun-000000?style=for-the-badge&logo=bun&logoColor=white)](https://bun.sh/)
[![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)](https://www.docker.com/)

Este repositorio contiene la demostración tecnológica de la web oficial de **Ana Albiol**. Un proyecto diseñado para la excelencia visual, el rendimiento extremo y una experiencia de usuario emocional.

---

## ✨ Características Principales

- 🚀 **Performance Extremo**: Construido sobre **Astro**, logrando tiempos de carga mínimos y un SEO optimizado desde la base.
- 🎨 **UI Emocional**: Componentes interactivos desarrollados con **Svelte 5** y animaciones fluidas con **Motion**.
- 📱 **Diseño Responsive**: Adaptado meticulosamente para todos los dispositivos, con especial énfasis en la legibilidad móvil.
- 🍪 **Cumplimiento Legal**: Banner de cookies GDPR integrado y páginas legales actualizadas.
- 🐋 **Infraestructura Moderna**: Contenerización completa con Docker, lista para ser desplegada en VPS mediante Dokploy.

## 🛠️ Stack Tecnológico

- **Framework**: [Astro](https://astro.build/) (SSG/SSR)
- **Componentes**: [Svelte](https://svelte.dev/)
- **Animaciones**: [Motion for Svelte](https://motion.dev/)
- **Gestor de Paquetes & Runtime**: [Bun](https://bun.sh/)
- **Despliegue**: Docker & Nginx (Multi-stage build)

## 🚀 Instalación y Desarrollo

### Requisitos Previos

- [Bun](https://bun.sh/) (Recomendado) o Node.js v18+

### Pasos para el Desarrollo Local

1. **Clonar el repositorio**:

   ```bash
   git clone https://github.com/tu-usuario/ana-albiol-demo.git
   cd ana-albiol-demo
   ```

2. **Instalar dependencias**:

   ```bash
   bun install
   ```

3. **Iniciar el servidor de desarrollo**:
   ```bash
   bun run dev
   ```
   La aplicación estará disponible en `http://localhost:4321`.

## 📦 Producción y Despliegue

### Docker (Recomendado)

El proyecto está configurado para ejecutarse en un entorno productivo usando Docker.

```bash
docker-compose up --build -d
```

### Build Manual

Si prefieres construir los archivos estáticos manualmente:

```bash
bun run build
```

Los archivos se generarán en la carpeta `dist/`.

---

## 📐 Estándares de Código

Para mantener la calidad y consistencia, seguimos estas reglas:

- **Código**: Toda la lógica (variables, funciones, clases) y comentarios están en **Inglés**.
- **Documentación**: Toda la documentación (README, CHANGELOG, etc.) está en **Español**.
- **Estilo**: Seguimos principios **DRY** (Don't Repeat Yourself) y **KISS** (Keep It Simple, Stupid).

---

## 📄 Licencia

Este proyecto es una demo privada. Todos los derechos sobre el contenido y la marca pertenecen a **Ana Albiol**.

---

Desarrollado con ❤️ para Ana Albiol.
