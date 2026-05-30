# Tareas pendientes — TP2

A continuación se listan las tareas claras y accionables correspondientes a los ítems todavía sin completar en `reqs-tp2.md`, agrupadas por sección.

## Arquitectura y Navegación

- [ ] Diseñar `Sidebar` y `Layout` — Definir estructura, comportamiento fijo y área de contenido principal.
- [ ] Implementar componente `Sidebar.jsx` — Crear componente React reutilizable e integrarlo en `layout/Layout.jsx`.
- [ ] Añadir logo del equipo y menú jerárquico — Incluir asset del logo, items de navegación y submenús.
- [ ] Hacer `Sidebar` responsive y fija — Comportamiento en mobile (colapsable) y persistente en escritorio.

## Vistas y Componentes Principales

- [ ] Agregar animaciones de entrada y transiciones suaves — Definir patrón (CSS/Framer Motion), aplicarlas a tarjetas y vistas.
- [ ] Implementar `ProgressBar` animada — Componente reutilizable para mostrar el stack técnico en `MemberPage.jsx`.
- [ ] Crear `Carousel` de proyectos con controles manuales — Componente accesible con al menos 3 proyectos y botones prev/next.
- [ ] Desarrollar `TechStack` con >=5 iconos y efectos visuales — Diseñar íconos, layout y microinteracciones (hover/entrada).
- [ ] Añadir `SocialButtons` con efectos hover avanzados — Botones para redes con cambios de color, escala o sombra.

## Lógica de Datos e Integración

- [ ] Crear `data/sample.json` con 20 objetos — Definir esquema (id, nombre, role, avatar, proyectos, tags, images).
- [ ] Implementar componente `JsonExplorer` — Cargar y renderizar el JSON local dinámicamente en una vista paginada.
- [ ] Añadir filtrado y buscador en tiempo real — Input debounced que filtra por nombre, stack o tags y actualiza la vista.
- [ ] Integrar API pública asíncrona — Elegir una API pública (ej. GitHub Users / JSONPlaceholder) y consumirla con fetch/axios.
- [ ] Gestionar estados `loading` y `error` — Hook o patrón reutilizable para mostrar spinners y mensajes de error.
- [ ] Implementar paginación (Anterior / Siguiente) — Componente que muestra la posición actual y permite navegar páginas.
- [ ] Crear `GalleryGrid` visualizador de imágenes — Grid responsive que usa las imágenes de los objetos o de la API.
- [ ] Implementar `Lightbox` con zoom, navegación y cierre con `ESC` — Overlay con soporte para teclas y controles.

---

Si querés, empiezo implementando una de estas tareas (por ejemplo, crear `Sidebar.jsx` o el `JsonExplorer`). ¿Cuál preferís que haga primero?