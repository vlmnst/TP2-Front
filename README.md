# Grupo 2D - TP2 Frontend React

**Repositorio:** https://github.com/vlmnst/TP2-Front

**Deploy en Vercel:** pendiente de actualizar con la URL final

---

## Descripción del proyecto

Este proyecto es la versión migrada del TP1 hacia una aplicación moderna con React y Vite. La interfaz mantiene una estética de dashboard con una `Sidebar` fija, navegación interna y páginas individuales para cada integrante del equipo.

La app incluye:
- rutas con React Router
- perfiles dinámicos por integrante
- galería de imágenes con Lightbox y soporte de teclado (`Esc`, flechas)
- consumo de API pública del Museo MET con filtros, paginación y estados de carga/error
- componentes reutilizables para progreso técnico, carrusel de proyectos y botones sociales

---

## Integrantes

| Nombre completo   | GitHub                                             |
| ----------------- | -------------------------------------------------- |
| Cristian Nicoletti| [@NicoCris](https://github.com/NicoCris)           |
| Valeria Mansueto  | [@vlmnst](https://github.com/vlmnst)               |
| Antonella Masini  | [@Antocba](https://github.com/Antocba)             |
| Guillermo Novillo | [@guinovi](https://github.com/guinovi)             |
| Facundo Bascur    | [@FacundoBascur](https://github.com/FacundoBascur) |

---

## Tecnologías utilizadas

- React 19
- Vite
- React Router DOM 7
- React Icons
- CSS moderno con variables, grid, flexbox y transiciones
- Fetch API para consumo asíncrono

---

## Características implementadas

- **Arquitectura basada en componentes**: layout, sidebar, secciones y páginas reutilizables.
- **Enrutamiento interno**: rutas para Inicio, Bitácora, Galería, MET y perfiles individuales.
- **Sidebar fija** con logo del equipo, menú jerárquico y listado de integrantes.
- **Página Home** con presentación del equipo y tarjetas de acceso rápido a cada perfil.
- **Perfiles individuales** con datos personales, bio, skills, proyectos y stack técnico.
- **Sección de barras de progreso** animadas para skills técnicos.
- **Carrusel interactivo** en proyectos con controles manuales y posición actual.
- **Botones sociales** con efectos hover personalizados.
- **Galería de imágenes** tipo grid.
- **Lightbox** con zoom, navegación interna y cierre con tecla `Esc`.
- **API pública del MET** con búsqueda, filtros por año, paginación y modal de detalle.
- **Estados de carga y error** en el consumo de la API.
- **Bitácora de desarrollo** con entradas de proceso, decisiones y cambios.

---

## Estructura de archivos

```text
/
├── README.md
├── package.json
├── index.html
├── reqs-tp2.md
├── requisitos.md
├── tareas.md
├── public/
│   └── img/
│       └── readme-capturas/
└── src/
    ├── App.jsx
    ├── main.jsx
    ├── router/
    │   └── index.jsx
    ├── components/
    │   ├── Lightbox.jsx
    │   ├── MemberCard.jsx
    │   ├── MessagePanel.jsx
    │   ├── MetArtworkModal.jsx
    │   ├── Pagination.jsx
    │   ├── ProfileAside.jsx
    │   ├── ProgressBar.jsx
    │   ├── SectionExtra.jsx
    │   ├── SectionFavorites.jsx
    │   ├── SectionFlip.jsx
    │   ├── SectionFocus.jsx
    │   ├── SectionIntro.jsx
    │   ├── SectionList.jsx
    │   ├── SectionProgress.jsx
    │   ├── SectionProjects.jsx
    │   ├── SectionRenderer.jsx
    │   ├── SocialButtons.jsx
    │   ├── TechStack.jsx
    │   └── layout/
    │       ├── Layout.jsx
    │       └── Sidebar.jsx
    ├── data/
    │   ├── team.js
    │   ├── techIcons.js
    │   └── techStack.json
    ├── pages/
    │   ├── BitacoraPage.jsx
    │   ├── GalleryPage.jsx
    │   ├── HomePage.jsx
    │   ├── MemberPage.jsx
    │   ├── MetPage.jsx
    │   └── NotFoundPage.jsx
    └── styles/
        └── global.css
```

---

## Archivos clave

- `src/components/layout/Layout.jsx` - estructura principal del dashboard.
- `src/components/layout/Sidebar.jsx` - menú lateral con logo, navegación y submenús de integrantes.
- `src/pages/HomePage.jsx` - portada con la grilla de integrantes.
- `src/pages/MemberPage.jsx` - perfil individual dinámico por ID.
- `src/pages/GalleryPage.jsx` - galería de imágenes con Lightbox.
- `src/pages/MetPage.jsx` - explorador del MET con búsqueda, filtros y paginación.
- `src/pages/BitacoraPage.jsx` - bitácora de desarrollo.
- `src/data/team.js` - datos del equipo, secciones de perfil y configuración de navegación.

---

## Correr localmente

```bash
npm install
npm run dev
```

Para generar la versión de producción:

```bash
npm run build
```

---

## Migración a React

Este TP2 es la migración del TP1 hacia una estructura más modular y mantenible. Se respetó la identidad visual original mientras se aprovechó React para:

- separar lógica en componentes reutilizables,
- centralizar datos en `src/data/team.js`,
- resolver la navegación con React Router,
- manejar estados y efectos con `useState` y `useEffect`,
- mejorar la experiencia del Lightbox y los filtros de búsqueda.

---

## Uso de IA

- `GitHub Copilot` / `Claude Sonnet` se usó para acelerar refactorizaciones de componentes, revisar código y mejorar redacción en la documentación.
- `ChatGPT` se consultó para entender detalles de CSS 3D, animaciones y patrones de componentes accesibles.

---

## Notas

- El deploy en Vercel está pendiente de actualizar con la URL final.
- Si quieres mejorar este README, agrega capturas actuales del dashboard React y el enlace de despliegue en la sección de `Deploy`.
