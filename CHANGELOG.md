# Historial de Cambios

## [1.2.0] - 2026-02-17
### Añadido
- **Créditos en Footer**: Inclusión de enlaces de autoría para Amorchi House y @jesusdavidweb.
- **Página de Sistema de Diseño**: Nueva ruta `/design-system` detallando la identidad visual, colores y tipografía de la marca.
- **Página de Gracias**: Creación de `/gracias` como destino tras el envío exitoso del formulario de contacto.

### Mejorado
- **Optimización de Imágenes**: Migración masiva de etiquetas `<img>` al componente nativo de Astro para mejor rendimiento y SEO.
- **Formulario de Contacto**: Añadida casilla de verificación GDPR obligatoria para cumplimiento legal y redirección a página de éxito.

## [1.1.0] - 2026-02-16
### Añadido
- **Páginas Legales Independientes**: Separación del contenido legal en rutas individuales (`/aviso-legal`, `/politica-de-privacidad`, `/cookies`) para mejorar el SEO y la accesibilidad.
- **Landing Alternativa**: Nueva página de inicio (`/index-2`) con diseño de Hero a pantalla completa y tipografía optimizada.

### Mejorado
- **Optimización de Activos**: Actualización de todas las portadas de libros a formato WebP, reduciendo el peso de la página sin perder calidad.
- **Limpieza Visual**: Eliminación de la superposición del logo sobre el Hero para una estética más minimalista y profesional.

### Eliminado
- **Redes Sociales**: Eliminación completa de iconos y enlaces a YouTube a petición del cliente.

### Corregido
- **Contraste en Hero**: Implementación de gradientes dinámicos en la base del Hero para asegurar la legibilidad del texto sobre cualquier imagen.

## [1.0.0] - 2026-02-13
### Añadido
- **Animación de Logo**: Preloader dinámico y sorprendente para la carga inicial.
- **Banner de Cookies**: Sistema de consentimiento GDPR con persistencia en `localStorage`.
- **Páginas Legales**: Aviso Legal, Política de Privacidad y Cookies detalladas.
- **Sección de Libros**: Integración de portadas y enlaces de Amazon para las obras de Ana Albiol.
- **Redes Sociales**: Enlaces optimizados para Instagram y YouTube.
- **Infraestructura**: Configuración de Docker y Dokploy para despliegue continuo.

### Mejorado
- **Contraste de UI**: Optimización de legibilidad en encabezados y subtítulos para dispositivos móviles.
- **Rendimiento**: Migración completa de HTML estático a Astro + Svelte para carga ultra-rápida.
- **Navegación**: Menú responsive con animaciones fluidas utilizando Motion.


### Corregido
- Conflicto de puertos en Dokploy al eliminar el mapeo directo del puerto 80 en el host.
- Soporte para `bun.lock` en el `Dockerfile` para asegurar builds deterministas.
- Errores de tipado en animaciones de Motion.
- Fallos de visualización en el header de páginas internas.
- Problemas de espaciado entre el logo y el menú de navegación.

