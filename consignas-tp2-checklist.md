# Consignas TP 02 — Checklist de tareas

Documento creado a partir de `Consigna TP 02.pdf`.

> Estado verificado contra el código actual del proyecto React/Vite.  
> Referencia rápida: `[x]` implementado / `[ ]` pendiente o incompleto.

## Entrega

- [x] TP2 en repositorio independiente del TP1.
- [ ] Publicar en la pestaña **Entrega TP2** el link al repositorio.
- [ ] Publicar en la pestaña **Entrega TP2** el link a la web desplegada en Vercel.
- [ ] Confirmar deploy final en Vercel.

### Planillas indicadas en la consigna

- Comisión LUNES: https://docs.google.com/spreadsheets/d/19MkDTlzFpyaHIS9pCcaL5mHWc4qf-1ZCs9R8dRhG9ME/edit?gid=2050921425#gid=2050921425
- Comisión VIERNES: https://docs.google.com/spreadsheets/d/15TChmGk7IAwzMSK9JsNjeq4321_ydrgzlRcSdSsEYRc/edit?gid=1100167792#gid=1100167792

## Objetivo general

- [x] Desarrollar una página web utilizando React.
- [x] Migrar la estructura del TP1 desde HTML/CSS/JS hacia arquitectura de componentes.
- [x] Incluir una portada con presentación del equipo.
- [x] Incluir listado de estudiantes.
- [x] Crear una página individual para cada estudiante.
- [x] Gestionar navegación mediante React Router.
- [x] Aplicar buenas prácticas de organización.
- [x] Aplicar diseño adaptable.
- [x] Gestionar el código en GitHub.
- [ ] Desplegar en Vercel con URL final publicada.
- [x] Implementar mejoras de interfaz.
- [x] Implementar búsqueda.
- [x] Implementar componentes interactivos avanzados.

## 1. Navegación estilo Dashboard — Sidebar fija

- [x] Crear una navegación regida por una Sidebar lateral fija.
- [x] Darle estética de Dashboard.
- [x] Garantizar acceso a todas las secciones principales desde la Sidebar.
- [x] Integrar el logo del grupo.
- [x] Crear un menú de navegación jerarquizado.
- [x] Implementar la navegación con React Router.
- [x] Usar la Sidebar como eje estructural de la UX de la SPA.

## 2. Panel central de presentación — Dashboard Home

- [x] Crear el nodo principal/Home de la aplicación.
- [x] Presentar una grilla dinámica de tarjetas.
- [x] Crear tarjetas de acceso rápido para cada integrante.
- [x] Mostrar nombre completo en cada tarjeta.
- [x] Mostrar avatar/imagen en cada tarjeta.
- [x] Implementar animaciones de entrada.
- [x] Implementar transiciones suaves de carga.

## 3. Sección individual por integrante — Perfil profesional

- [x] Crear una vista detallada para cada estudiante.
- [x] Implementar cada perfil como `User Profile` dentro del sistema.
- [x] Agregar barras de progreso de habilidades.
- [x] Animar visualmente las barras de progreso.
- [x] Reflejar el stack técnico en las barras.
- [x] Implementar carrusel de proyectos.
- [x] Agregar controles manuales al carrusel.
- [x] Incluir al menos 3 trabajos/proyectos por perfil.
- [x] Crear sección de Tech Stack.
- [x] Incluir mínimo 5 iconos representativos.
- [x] Agregar efectos visuales a la iconografía.
- [x] Agregar botones de redes sociales.
- [x] Agregar efectos hover avanzados en redes sociales.

## 4. Explorador de datos locales — JSON

- [x] Crear un archivo JSON local con 20 objetos.
- [x] Renderizar dinámicamente el JSON en React.
- [x] Implementar buscador por texto.
- [x] Implementar filtrado en tiempo real.
- [x] Actualizar la vista dinámicamente según búsqueda/filtros.

## 5. Módulo de integración de API externa

- [x] Consumir una API pública de forma asíncrona.
- [x] Manejar estado de carga.
- [x] Manejar estado de error.
- [x] Implementar paginación.
- [x] Agregar botón/acción de página anterior.
- [x] Agregar botón/acción de página siguiente.
- [x] Mostrar indicador de posición actual.

## 6. Galería de imágenes interactiva

- [x] Crear visualizador de imágenes tipo Grid.
- [x] Integrar Lightbox.
- [ ] Implementar zoom funcional dentro del Lightbox.
- [x] Implementar navegación interna del Lightbox.
- [x] Permitir cierre del Lightbox con tecla `ESC`.


## 7. Bitácora de proyecto

- [x] Crear sección/página de Bitácora.
- [ ] Documentar roles de los integrantes.
- [ ] Documentar flujo de trabajo GitFlow/Trello.
- [x] Incluir justificación de migración desde HTML/JS a React.
- [x] Explicar la evolución desde estructura estática hacia arquitectura React.

## 8. Árbol de renderizado — Arquitectura de componentes

- [x] Incluir representación gráfica o esquemática del árbol de renderizado.
- [x] Identificar claramente el componente raíz `App`.
- [x] Identificar componentes superiores como `Layout` y `Sidebar`.
- [x] Detallar componentes hijos: cards, buttons, modals, páginas y secciones.
- [x] Mostrar jerarquía completa de la aplicación.

## README.md obligatorio

- [ ] Incluir título del proyecto y link al deploy.
  - Parcial: el título existe, pero el deploy figura pendiente.
- [x] Incluir descripción breve del objetivo y funcionalidades básicas.
- [x] Listar integrantes con nombre, apellido y GitHub.
- [x] Listar tecnologías utilizadas.
- [ ] Documentar estructura de archivos completa y actualizada.
  - Parcial: existe estructura, pero está desactualizada/incompleta respecto del código actual.
- [ ] Incluir guía de estilos.
- [ ] Detallar paleta de colores con valores hexadecimales.
- [ ] Detallar tipografías con enlaces.
- [x] Indicar librería de iconografía usada.
- [ ] Explicar funciones dinámicas implementadas con capturas.
- [ ] Explicar componentes clave con capturas.
- [ ] Incluir enlace final al proyecto desplegado en Vercel.
- [ ] Documentar evolución del proyecto con mejoras y cambios realizados.
- [ ] Agregar capturas que muestren el progreso.

## Uso de IA obligatorio

- [x] Listar herramientas/modelos de IA usados.
- [ ] Explicar qué textos fueron generados o asistidos con IA.
- [ ] Explicar en qué problemas de lógica ayudó la IA.
- [ ] Explicar en qué problemas de debugging ayudó la IA.
- [ ] Especificar modelo usado para avatares o logos.
- [ ] Especificar criterio de prompt usado para recursos gráficos.
- [ ] Dejar claro que la IA fue asistente y que la autoría del proyecto se mantiene en el equipo.

## Pendientes reales de alto riesgo

- [ ] Completar README antes de entregar.
- [ ] Publicar deploy final en Vercel.
- [ ] Pegar links de repo y deploy en la planilla de la comisión.
- [ ] Agregar zoom real al Lightbox o ajustar la documentación si no lo van a implementar.
- [ ] Documentar roles + GitFlow/Trello en Bitácora.
- [x] Agregar árbol de renderizado.
- [ ] Completar sección de Uso de IA con detalles concretos.
