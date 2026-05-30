window.APP_DATA = {
    team: {
        name: 'Grupo 2D',
        tagline: 'Sitio grupal creado con HTML, CSS y JavaScript vanilla.',
        description: 'Presentamos al equipo, sus intereses y el proceso de desarrollo de nuestro trabajo práctico.'
    },
    nav: [
        { label: 'Inicio', href: 'index.html' },
        { label: 'Bitácora', href: 'bitacora.html' }
    ],
    homeMessages: [
        'Bienvenido al proyecto. Cada tarjeta conecta con una página individual del equipo.',
        'Nos interesa construir interfaces claras, ordenadas y fáciles de recorrer.',
        'Todo está construido con HTML, CSS y JavaScript vanilla.',
        'Explorá las páginas de integrantes y la bitácora para ver el avance del trabajo.'
    ],
    members: [
        {
            id: '1',
            name: 'Nico',
            location: 'Rio Hondo, Provincia de Santiago del Estero',
            age: 31,
            photo: 'img/foto_perfil_nico.jpg',
            photoClass: 'nico-photo',
            accent: '#2f7a5f',
            heroCopy: 'Rio Hondo, Santiago del Estero | 31 años',
            headline: 'Desarrollador en formacion con interes en interfaces claras y proyectos concretos.',
            cardMeta: 'HTML + React | MySQL | Frontend',
            quickFacts: [
                'Rio Hondo, Santiago del Estero',
                '31 años',
                'HTML, CSS, JavaScript, React y MySQL'
            ],
            skills: ['HTML semántico', 'CSS responsive', 'JavaScript básico', 'React', 'MySql', 'Trabajo en equipo'],
            movies: ['El señor de los anillos', 'Rocky IV', 'En busca de la felicidad'],
            albums: ['Green River', 'Californication', 'Magos, espadas y rosas'],
            extra: 'Le interesa aprender dia a dia, en distintos grupos de trabajo, creando proyectos concretos y mejorando la forma en que presenta información en la web.',
            sections: [
                {
                    type: 'intro',
                    title: 'Sobre Nico',
                    text: 'Le interesa aprender dia a dia en distintos grupos de trabajo, construir proyectos utiles y mejorar constantemente la forma en que presenta informacion en la web.'
                },
                {
                    type: 'list',
                    title: 'Habilidades',
                    items: ['HTML semantico', 'CSS responsive', 'JavaScript basico', 'React', 'MySQL', 'Trabajo en equipo']
                },
                {
                    type: 'list',
                    title: 'Peliculas favoritas',
                    items: ['El senor de los anillos', 'Rocky IV', 'En busca de la felicidad']
                },
                {
                    type: 'list',
                    title: 'Discos favoritos',
                    items: ['Green River', 'Californication', 'Magos, espadas y rosas']
                },
                {
                    type: 'extra',
                    text: 'Su perfil combina curiosidad tecnica con ganas de seguir creciendo en proyectos reales, especialmente donde pueda practicar frontend, ordenar contenido y mejorar la experiencia visual.'
                }
            ]
        },
        {
            id: '2',
            name: 'Valeria',
            location: 'Córdoba, Provincia de Córdoba',
            age: 30,
            photo: '../img/perfil_vale.png',
            photoClass: 'profile-photo-custom',
            accent: '#c4513b',
            heroCopy: 'Desarrolladora backend con experiencia en AWS serverless, bases de datos relacionales y no relacionales, enfocada en soluciones escalables e innovadoras.',
            headline: 'Programadora con enfoque en backend, apasionada por investigar y resolver problemas a través de procesos innovadores.',
            quickFacts: [
                'JavaScript · TypeScript · Node.js',
                'AWS: Lambda, API Gateway, OpenSearch, DynamoDB',
                'MySQL · Snowflake · Soluciones escalables'
            ],
            links: [
                { label: 'GitHub', href: 'https://github.com/vlmnst/TP_parabellum_devs' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/valeria-mansueto-dev/' }
            ],
            skills: ['JavaScript', 'TypeScript', 'Node.js', 'AWS', 'MySQL', 'Snowflake'],
            sections: [
                {
                    type: 'intro',
                    title: 'Sobre mí',
                    text: 'Soy Valeria, programadora con un enfoque en backend. Lo que más me gusta de mi trabajo es la oportunidad de investigar, resolver problemas y ayudar a las personas a través de procesos innovadores. He trabajado en diversos proyectos de desarrollo web adquiriendo habilidades en programación, gestión de proyectos y atención al cliente. Me considero una persona comprometida, responsable y enfocada en ofrecer soluciones escalables y fáciles de mantener.'
                },
                {
                    type: 'stack',
                    title: 'Tecnologías que uso',
                    groups: [
                        {
                            name: 'Lenguajes',
                            featured: true,
                            description: 'Lenguajes que uso para construir lógica de negocio, automatizaciones e integraciones.',
                            items: ['JavaScript', 'TypeScript', 'JSON', 'Bash']
                        },
                        {
                            name: 'Cloud & Serverless (AWS)',
                            items: ['Lambda', 'API Gateway', 'OpenSearch', 'DynamoDB']
                        },
                        {
                            name: 'Bases de datos',
                            items: ['MySQL', 'Snowflake']
                        },
                        {
                            name: 'Runtime & Herramientas',
                            items: ['Node.js', 'Git']
                        }
                    ]
                },
                {
                    type: 'focus',
                    title: 'Lo que me define',
                    items: [
                        {
                            name: 'Backend e innovación',
                            text: 'Me especializo en construir lógica de negocio robusta e integraciones entre servicios, siempre buscando soluciones escalables y fáciles de mantener.'
                        },
                        {
                            name: 'Investigación y resolución',
                            text: 'Lo que más disfruto es enfrentar problemas complejos, investigar opciones y encontrar la solución que mejor se adapta al contexto real del proyecto.'
                        },
                        {
                            name: 'Trabajo en equipo',
                            text: 'Me gusta colaborar de manera cercana para alcanzar objetivos comunes, compartir lo aprendido y construir junto a otros.'
                        }
                    ]
                },
                {
                    type: 'flip',
                    title: 'Películas y discos favoritos',
                    frontLabel: '🎬 Película',
                    backLabel: '🎵 Disco',
                    pairs: [
                        { front: 'El Diablo viste a la moda', back: 'LUX' },
                        { front: 'El Club de la Pelea', back: 'Almendra' },
                        { front: 'Legalmente Rubia', back: 'La vida era más corta' }
                    ]
                },
                {
                    type: 'extra',
                    text: 'Estoy completamente comprometida con mi trabajo y me aseguro de brindar lo mejor de mí. Si buscás a alguien capaz de ofrecer soluciones innovadoras y de calidad, estaré encantada de trabajar junto a vos.'
                }
            ]
        },
        {
            id: '3',
            name: 'Anto :)',
            location: 'Córdobaaaaa capiiiiital',
            age: 36,
            photo: './img/anto_tortuga.png',
            accent: '#fb8f14',
            heroCopy: 'Apasionada por la comunicación en todas sus formas. Busco incorporar nuevos conocimientos del mundo IT, siempre con una mirada social y humana.',
            headline: '"Aprender no es prepararse para la vida. Aprender es la vida misma." — John Dewey.',

            links: [
                { label: 'GitHub', href: 'https://github.com/Antocba' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antonellamasini' }

            ],
            skills: ['Comunicación', 'Diseño visual', 'Testing manual', 'Desarrollo móvil'],


            sections: [
                {
                    type: 'intro',
                    title: 'Un poco de mí',
                    text: 'Hola! Soy Anto :) Lic. y Prof. en Comunicación Social, Téc. en RR.HH. y actualmente me encuentro en la búsqueda de odiar menos la programación, digo, de aprender cosas nuevas. Actualmente, trabajo como docente y preceptora, lo que me ha ayudado a llevar la paciencia al siguiente nivel. Me gusta el diseño visual y eso lo demuestro en mi emprendimiento "Cosa Nostra Personalizados". Si te gusta tomarte las cosas con humor y charlar un poco de todo, este es el lugar.'
                },

                {
                    type: 'list',
                    title: 'Habilidades',
                    items: ['Comunicación', 'Diseño visual', 'Testing manual', 'Desarrollo móvil']
                },

                {
                    type: 'focus',
                    title: 'Películas favoritas',
                    items: [
                        {
                            name: 'El Padrino',
                            text: 'Clásico del cine sobre la poderosa familia mafiosa Corleone y la lucha por el poder, el honor y la lealtad.',
                            puntaje: '⭐⭐⭐⭐⭐',
                        },
                        {
                            name: 'Scarface',
                            text: 'Biografía de un hombre que busca el poder y la fortuna en el mundo del crimen organizado.',
                            puntaje: '⭐⭐⭐⭐⭐'
                        },
                        {
                            name: 'Snatch',
                            text: 'Comedia oscura sobre un robo fallido y sus consecuencias.',
                            puntaje: '⭐⭐⭐'
                        }
                    ]
                },

                {
                    type: 'flip',
                    title: 'Discos favoritos',
                    frontLabel: 'Disco',
                    backLabel: 'Artista',
                    pairs: [
                        { front: 'Thriller', back: 'Michael Jackson' },
                        { front: 'Otro día en el planeta tierra', back: 'Intoxicados' },
                        { front: 'Mi vida sin tu amor', back: 'Cristian Castro' }
                    ]
                },

                {
                    type: 'extra',
                    text: 'Me interesa particularmente el testing y el diseño, y aunque me cueste bastante este nuevo mundo, siempre estoy dispuesta a aprender cosas nuevas.'
                }
            ],       
        },
        
        {
            id: '4',
            name: 'Guille',
            location: 'Argentina',
            age: 20,
            photo: 'img/gui.png',
            photoClass: 'profile-photo-custom',
            accent: '#a35f16',
            heroCopy: 'Desarrollador Full Stack con experiencia construyendo soluciones web y de escritorio, integrando backend, frontend y bases de datos para convertir ideas en proyectos reales.',
            headline: 'Desarrollador Full Stack enfocado en backend, aplicaciones de gestion e integraciones entre software, datos y procesos.',
            cardMeta: 'Full Stack | Backend | Desktop',
            quickFacts: [
                'Python, JavaScript, C# y SQL',
                'Experiencia con Node.js, Django, React y Electron',
                'Interes en seguridad, automatizacion y agentes de IA'
            ],
            links: [
                { label: 'GitHub', href: 'https://github.com/guinovi' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/guillermo-novillo-551367144/' }
            ],
            skills: ['Python', 'JavaScript', 'C#', 'SQL', 'Node.js', 'Electron'],
            sections: [
                {
                    type: 'intro',
                    title: 'Sobre mi',
                    text: 'Soy un desarrollador con un enfoque integral del software. Me interesa especialmente la logica de backend, la arquitectura de sistemas y la posibilidad de conectar interfaces, datos y procesos en soluciones utiles. Disfruto aprender tecnologias nuevas, resolver problemas concretos y llevar ideas desde la etapa inicial hasta una implementacion funcional.'
                },
                {
                    type: 'stack',
                    title: 'Tecnologias que uso',
                    groups: [
                        {
                            name: 'Lenguajes',
                            featured: true,
                            description: 'Base principal para desarrollar interfaces, logica de negocio, automatizaciones y aplicaciones orientadas a escritorio y web.',
                            items: ['Python', 'JavaScript', 'C#', 'SQL', 'HTML', 'CSS']
                        },
                        {
                            name: 'Ecosistema principal',
                            description: 'Frameworks, bases de datos y herramientas que mas uso para pasar de una idea a una solucion funcional.',
                            items: ['Django', 'FastAPI', 'React', 'Node.js', 'Electron', 'PostgreSQL', 'SQLite', 'Git']
                        }
                    ]
                },
                {
                    type: 'favorites',
                    title: 'Pantalla y parlantes',
                    text: 'Una seleccion personal para salir un rato del codigo y volver con otra energia...',
                    categories: [
                        {
                            label: 'Peliculas',
                            badge: 'Cine',
                            stageLabel: 'En pantalla',
                            visualLabel: 'Watch',
                            items: [
                                {
                                    name: 'Interestelar',
                                    meta: 'Ciencia ficcion | Christopher Nolan',
                                    note: 'Me atrae por la escala de la historia, la tension constante y esa idea de empujar una solucion hasta el final.'
                                },
                                {
                                    name: 'Hasta el ultimo hombre',
                                    meta: 'Drama belico | Mel Gibson',
                                    note: 'La resiliencia del personaje y la conviccion con la que sostiene sus principios es lo que mas me queda.'
                                },
                                {
                                    name: 'Superbad',
                                    meta: 'Comedia | Greg Mottola',
                                    note: 'Cuando quiero algo mas liviano, vuelvo a esta por el ritmo, los dialogos y el humor sin demasiadas vueltas.'
                                }
                            ]
                        },
                        {
                            label: 'Musica',
                            badge: 'Playlist',
                            stageLabel: 'En auriculares',
                            visualLabel: 'Play',
                            items: [
                                {
                                    name: 'Master of Puppets',
                                    meta: 'Metallica',
                                    note: 'Me gusta la energia, la precision y la sensacion de avance que sostiene de principio a fin.'
                                },
                                {
                                    name: 'Hybrid Theory',
                                    meta: 'Linkin Park',
                                    note: 'Tiene esa mezcla de melodia e intensidad que siempre me funciona cuando necesito subir el ritmo.'
                                },
                                {
                                    name: 'Back in Black',
                                    meta: 'AC/DC',
                                    note: 'Cuando busco algo directo y potente, termino volviendo a discos con este tipo de sonido.'
                                }
                            ]
                        }
                    ]
                },
                {
                    type: 'focus',
                    title: 'Especialidades',
                    items: [
                        {
                            name: 'Backend y autenticacion',
                            text: 'Desarrollo de logica, integracion con bases de datos y sistemas de acceso con una mirada puesta en estructura, seguridad y mantenimiento.'
                        },
                        {
                            name: 'Aplicaciones web y desktop',
                            text: 'Experiencia construyendo tanto interfaces web como herramientas de escritorio, adaptando cada solucion al contexto de uso real.'
                        },
                        {
                            name: 'Vision integral',
                            text: 'Mi experiencia en mantenimiento y reparacion de PCs me aporta una perspectiva amplia para conectar hardware, software y experiencia de usuario.'
                        }
                    ]
                },
                {
                    type: 'extra',
                    text: 'Tambien disfruto colaborar, compartir lo que aprendo y seguir perfeccionando mis habilidades con proyectos propios. Hoy sigo profundizando en nuevas tecnologias, seguridad e integracion de agentes inteligentes dentro de flujos de trabajo reales.'
                }
            ]
        },
        {
            id: '5',
            name: 'Facundo Bascur',
            location: 'General Roca, Rio Negro',
            age: 29,
            photo: 'img/perfil_facu.png',
            photoClass: 'profile-photo-custom',
            accent: '#7b4fa3',
            skills: ['Java', 'C#', 'Node.js','MySQL','Soporte IT'],
            heroCopy: 'Enfocado en la resolución técnica y el desarrollo de software. Actualmente cursando la tecnicatura y trabajando en infraestructura de sistemas para brindar soluciones eficientes y escalables.',
            headline: 'DEV & SOPORTE IT',
            links: [
                { label: 'GitHub', href: 'https://github.com/FacundoBascur' },
                { label: 'LinkedIn', href: 'https://www.linkedin.com/in/facundo-david-bascur-it-dev/' }
            ],
            sections: [
                {
                    type: 'intro',
                    title: 'Desarrollador de Software | Especialista en Soporte IT e Infraestructura',
                    text: 'Soy un profesional con un perfil híbrido que combina el desarrollo de software con una sólida base en soporte técnico y resolución de incidencias. Mi experiencia en sectores de alta exigencia, como la construcción y la energía fotovoltaica, me permitió forjar una mentalidad práctica y una gran capacidad de respuesta bajo presión. Actualmente, mi enfoque principal está en la transición hacia el desarrollo a tiempo completo, aplicando mi experiencia técnica para construir soluciones digitales eficientes y escalables.'
                },
                {
                    type: 'stack',
                    title: 'Tecnologías que uso',
                    groups: [
                        {
                            name: 'Lenguajes',
                            featured: true,
                            description: 'Backend & Lógica',
                            items: ['Java', 'C#', 'JavaScript', 'Python', 'JSON']
                        },
                        {
                            name: 'Frontend',
                            items: ['HTML5', 'CSS3 Avanzado', 'Responsive Design', 'Pannellum.js (Tours 360°)']
                        },
                        {
                            name: 'Backend & Comunicación',
                            items: ['Node.js', 'Express', 'Nodemailer (SMTP)', 'Fetch API', 'REST API']
                        },
                        {
                            name: 'Bases de Datos',
                            items: ['MySQL', 'MariaDB', 'SQLite']
                        },
                        {
                            name: 'Herramientas & Soporte IT',
                            items: ['Git', 'InvGate', 'AnyDesk', 'Infraestructura de Redes']
                        }
                    ]
                },
                {
                    type: 'flip',
                    title: 'Películas y discos favoritos',
                    frontLabel: '🎬 Película',
                    backLabel: '🎵 Disco',
                    pairs: [
                        { front: 'Interestelar', back: 'Somos' },
                        { front: 'Hata el ultimo hombre', back: 'SED' },
                        { front: 'Saga Harry Potter', back: 'La Sintesis O´Konor' }
                    ]
                },
                {
                    type: 'extra',
                    text: 'Enfocado en la resolución técnica y el desarrollo de software. Actualmente cursando la tecnicatura y trabajando en infraestructura de sistemas para brindar soluciones eficientes y escalables.'
                }
            ]
        }
    ],
    logEntries: [
        {
            date: '12 de abril de 2026',
            title: 'Inicio del proyecto',
            decisions: 'Se definió una estructura simple con HTML en la raíz y carpetas separadas para CSS, JS e imágenes.',
            challenges: 'El primer desafío fue mantener las páginas consistentes sin repetir demasiado código.',
            changes: 'Se creó la portada, las páginas individuales y la sección de bitácora.'
        },
        {
            date: '18 de abril de 2026',
            title: 'Interactividad inicial',
            decisions: 'Se agregaron botones para mostrar mensajes, cambiar el estilo de la foto y desplegar información extra.',
            challenges: 'Los scripts de cada integrante repetían la misma lógica.',
            changes: 'Se mantuvo la funcionalidad y se identificó la necesidad de centralizar componentes.'
        },
        {
            date: '25 de abril de 2026',
            title: 'Diseño responsivo',
            decisions: 'Se agregaron propiedades para que la página pueda ser visualizada en los distintos dispositivos.',
            challenges: 'Los elementos no se encontraban correctamente estructurados en las distintas dimensiones.',
            changes: 'Se incorporaron las propiedades para las imágenes y organización de los elementos en la página.'
        },
        {
            date: '28 de abril de 2026',
            title: 'Refactor reutilizable',
            decisions: 'Se separaron los datos del renderizado para que el sitio pueda crecer sin copiar bloques de HTML.',
            challenges: 'Había textos mal codificados y duplicación entre páginas.',
            changes: 'Se incorporaron js/data.js y js/app.js como base común para la portada, integrantes y bitácora.'
        },
        {
            date: '1 de mayo de 2026',
            title: 'Conexión HTML–JavaScript',
            decisions: 'Se decidió eliminar el contenido hardcodeado de los archivos HTML y conectarlos al sistema de datos centralizado.',
            challenges: 'Los HTML tenían contenido estático desincronizado con data.js, lo que obligaba a actualizar varios archivos ante cada cambio.',
            changes: 'Se añadieron los atributos data-page y data-member-id en cada <body>, el contenedor <div id="app"></div> y las etiquetas <script> que cargan data.js y app.js. Ahora todo el contenido lo genera app.js a partir de los datos.'
        }
    ]
};
