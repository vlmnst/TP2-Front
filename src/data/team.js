export const team = {
    name: 'Grupo 2D',
    tagline: 'Migracion del TP1 hacia React con una arquitectura de componentes.',
    description: 'Presentamos al equipo, sus perfiles individuales y la evolucion del proyecto en una version construida con React.'
};

export const nav = [
    { label: 'Inicio', href: '/' },
    { label: 'Bitacora', href: '/bitacora' }
];

export const homeMessages = [
    'Bienvenido al proyecto. Cada tarjeta conecta con una pagina individual del equipo.',
    'Estamos migrando el TP1 a React manteniendo la identidad visual y mejorando la organizacion.',
    'La portada y cada perfil van a estar resueltos con componentes reutilizables.',
    'El objetivo es aprender React mientras repartimos la migracion entre los integrantes.'
];

export const members = [
    {
        id: '1',
        name: 'Nico',
        location: 'Rio Hondo, Provincia de Santiago del Estero',
        age: 31,
        photo: '/img/foto_perfil_nico.jpg',
        photoClass: 'nico-photo',
        accent: '#2f7a5f',
        heroCopy: 'Rio Hondo, Santiago del Estero | 31 anos',
        headline: 'Desarrollador en formacion con interes en interfaces claras y proyectos concretos.',
        skills: ["Soporte IT", "HTML", "Node.js", "Java","JavaScript"],
        quickFacts: [
            'Rio Hondo, Santiago del Estero',
            '31 anos',
            'HTML, CSS, JavaScript, React y MySQL'
        ],

        links: [
            { label: 'GitHub', href: 'https://github.com/NicoCris' }
        ],
        progress: {
            type: 'progress',
            title: 'Stack tecnico',
            accent: '#2f7a5f',
            items: [
                { label: 'Soporte IT', value: 90 },
                { label: 'HTML', value: 80 },
                { label: 'Node.js', value: 75 },
                { label: 'Java', value: 75 },
                { label: 'Testing', value: 82 }
            ]
        },
        
        sections: [
            {
                type: 'intro',
                title: 'Sobre mi',
                text: 'Soy desarrolador frontend, he incursionado en este mundo ya hace tres años. Me considero una persona activa y curiosa. En la actualidad estoy trabajando en distintos grupos de trabajo, construyendo proyectos utiles y eficaces, siempre impulsado por un constante sentimiento de aprender algo nuevo e incursionar en una nueva aventura.'
            },
            {
                type: 'focus',
                title: 'Habilidades Blandas',
                items: [
                    {
                        name: 'Comunicacion Efectiva',
                        text: 'La comunicación en sistemas no se trata de ser extrovertido, sino de tener la capacidad de transmitir información compleja de forma clara y precisa, adaptando el mensaje al equipo de trabajo o al cliente en un proyecto especifico.'
                    },
                    {
                        name: 'Liderazgo',
                        text: 'Dentro de un proyecto siempre me encuentro en estado activo, realizando prueba de código, verificando lo scasos límites y proponiendo posibles soluciones o herramientas para immplementar en el proyecto.'
                    },
                    {
                        name: 'Trabajo en equipo',
                        text: 'El software a escala rara vez lo hace una sola persona. Me gusta intercamb iar experiencias, aprender en conjunto con mi equipo, a fin que el producto final trabajado sea lo más eficiente posible.'
                    }
                ]
            },
            {
                type: 'flip',
                title: 'Peliculas y discos favoritos',
                variant: 'slide-down',
                accent: '#2f7a5f',
                frontLabel: 'Pelicula',
                backLabel: 'Disco',
                pairs: [
                    { front: 'El senor de los anillos', back: 'Green River' },
                    { front: 'Rocky IV', back: 'Californication' },
                    { front: 'En busca de la felicidad', back: 'Magos, espadas y rosas' }
                ]
            },
            {
                type: 'projects',
                title: 'Proyectos destacados',
                items: [
                    {
                        name: 'Gestor Club Deportivo',
                        description: 'Sistema integral de gestión deportiva para escritorio. Cuenta con módulos para el ABM (Alta, Baja y Modificación) de socios, inscripción a disciplinas y administración financiera (control de cuotas y liquidación de sueldos). Posteriormente, el sistema fue escalado a una versión móvil nativa utilizando Android Studio.',
                        tech: 'C#, MySQL, Kotlin, SQLite, Android Studio'
                    },
                    {
                        name: 'Gestor de turnos spa',
                        description: 'Aplicación web de venta de servicios de estetica que permite al usuario 24 hs de disponibilidad para solicitar un turno en tiempo real en cualquiera de las especialidades',
                        tech: 'HTML, CSS, Node.js'
                    },
                    {
                        name: 'Gestión y control de produccion panificadora',
                        description: 'Aplicacion web que permite llevar un correcto control y seguimiento de materia prima y produccion para una panificadora. El cliente requeria la automatizacion de la gestion entre la planta central y las sucursales, por lo que se le proveyó un sistema integral de control de materia prima y seguimiento de los distintos productos.',
                        tech: 'Node.js, MongoDB'
                    },
                ]
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
        location: 'Cordoba, Provincia de Cordoba',
        age: 30,
        photo: '/img/perfil_vale.png',
        photoClass: 'profile-photo-custom',
        accent: '#c4513b',
        heroCopy: 'Desarrolladora backend con experiencia en AWS serverless, bases de datos relacionales y no relacionales, enfocada en soluciones escalables e innovadoras.',
        headline: 'Programadora con enfoque en backend, apasionada por investigar y resolver problemas a traves de procesos innovadores.',
        quickFacts: [
            'JavaScript TypeScript Node.js',
            'AWS: Lambda, API Gateway, OpenSearch, DynamoDB',
            'MySQL Snowflake Soluciones escalables'
        ],
        links: [
            { label: 'GitHub', href: 'https://github.com/vlmnst/TP_parabellum_devs' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/valeria-mansueto-dev/' }
        ],
        skills: ['JavaScript', 'TypeScript', 'Node.js', 'AWS', 'MySQL', 'Snowflake'],
        progress: {
            type: 'progress',
            title: 'Stack tecnico',
            accent: '#c4513b',
            items: [
                { label: 'TypeScript', value: 80 },
                { label: 'Node.js', value: 89 },
                { label: 'AWS', value: 45 },
                { label: 'MySQL', value: 72 },
                { label: 'Snowflake', value: 56 }
            ]
        },
        sections: [
            {
                type: 'intro',
                title: 'Sobre mi',
                text: 'Soy Valeria, programadora con un enfoque en backend. Lo que mas me gusta de mi trabajo es la oportunidad de investigar, resolver problemas y ayudar a las personas a traves de procesos innovadores. He trabajado en diversos proyectos de desarrollo web adquiriendo habilidades en programacion, gestion de proyectos y atencion al cliente. Me considero una persona comprometida, responsable y enfocada en ofrecer soluciones escalables y faciles de mantener.'
            },
            {
                type: 'stack',
                title: 'Tecnologias que uso',
                groups: [
                    {
                        name: 'Lenguajes',
                        featured: true,
                        description: 'Lenguajes que uso para construir logica de negocio, automatizaciones e integraciones.',
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
                        name: 'Backend e innovacion',
                        text: 'Me especializo en construir logica de negocio robusta e integraciones entre servicios, siempre buscando soluciones escalables y faciles de mantener.'
                    },
                    {
                        name: 'Investigacion y resolucion',
                        text: 'Lo que mas disfruto es enfrentar problemas complejos, investigar opciones y encontrar la solucion que mejor se adapta al contexto real del proyecto.'
                    },
                    {
                        name: 'Trabajo en equipo',
                        text: 'Me gusta colaborar de manera cercana para alcanzar objetivos comunes, compartir lo aprendido y construir junto a otros.'
                    }
                ]
            },
            {
                type: 'flip',
                title: 'Peliculas y discos favoritos',
                frontLabel: 'Pelicula',
                backLabel: 'Disco',
                pairs: [
                    { front: 'El Diablo viste a la moda', back: 'LUX' },
                    { front: 'El Club de la Pelea', back: 'Almendra' },
                    { front: 'Legalmente Rubia', back: 'La vida era mas corta' }
                ]
            },
            {
                type: 'projects',
                title: 'Nuevas features en plataforma de comercios',
                items: [
                    {
                        name: 'Gestión de donaciones',
                        description: 'El stakeholder necesitaba una forma de gestionar las donaciones recibidas por su ONG y la creacion de nuevas campañas. Se construyó una aplicacion web con un panel administrativo para registrar cada donacion, visualizar el historial y generar reportes mensuales. ',
                        tech: 'Node.js, AWS Lambda, API Gateway, DBeaver, MySQL'
                    },
                    {
                        name: 'Modulo de legales',
                        description: 'Cada comercio necesitaba una forma de aceptar los terminos y condiciones de cada servicio, y el equipo queria una forma de centralizar la logica de aceptacion y versionado. Se construyo un modulo de legales con un panel para crear nuevos documentos, versionarlos y asignarlos a cada servicio. El modulo se integro con el sistema de autenticacion para registrar la aceptacion de cada usuario.',
                        tech: 'Node.js, AWS Lambda, API Gateway, S3, OpenSearch'
                    },
                    {
                        name: 'Envío de emails diarios por desconocimiento de compras.',
                        description: 'Los comercios tenian que ser notificados diariamente de las compras desconocidas en su plataforma, lo que se hacia manualmente a traves de un reporte generado por el equipo de soporte. Se automatizo el proceso construyendo una funcion serverless que se ejecuta diariamente, consulta las compras desconocidas y envia un email con el detalle a cada comercio.',
                        tech: 'Node.js, AWS Lambda, API Gateway, SQS, Cron'
                    }
                ]
            },
            {
                type: 'extra',
                text: 'Estoy completamente comprometida con mi trabajo y me aseguro de brindar lo mejor de mi. Si buscas a alguien capaz de ofrecer soluciones innovadoras y de calidad, estare encantada de trabajar junto a vos.'
            }
        ]
    },
    {
        id: '3',
        name: 'Anto :)',
        location: 'Cordobaaaaa capiiiiital',
        age: 36,
        photo: '/img/anto_tortuga.png',
        accent: '#fb8f14',
        heroCopy: 'Apasionada por la comunicacion en todas sus formas. Busco incorporar nuevos conocimientos del mundo IT, siempre con una mirada social y humana.',
        headline: '"Aprender no es prepararse para la vida. Aprender es la vida misma." — John Dewey.',
        links: [
            { label: 'GitHub', href: 'https://github.com/Antocba' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/antonellamasini' }
        ],
        skills: ['Comunicacion', 'Diseno visual', 'Testing manual', 'Desarrollo movil'],
        progress: {
            type: 'progress',
            title: 'Stack tecnico',
            accent: '#fb8f14',
            items: [
                { label: 'Comunicacion', value: 92 },
                { label: 'Diseno visual', value: 88 },
                { label: 'Testing manual', value: 74 },
                { label: 'Desarrollo movil', value: 68 }
            ]
        },
        sections: [
            {
                type: 'intro',
                title: 'Un poco de mi',
                text: 'Hola! Soy Anto :) Lic. y Prof. en Comunicacion Social, Tec. en RR.HH. y actualmente me encuentro en la busqueda de odiar menos la programacion, digo, de aprender cosas nuevas. Actualmente, trabajo como docente y preceptora, lo que me ha ayudado a llevar la paciencia al siguiente nivel. Me gusta el diseno visual y eso lo demuestro en mi emprendimiento "Cosa Nostra Personalizados". Si te gusta tomarte las cosas con humor y charlar un poco de todo, este es el lugar.'
            },
            {
                type: 'list',
                title: 'Habilidades',
                items: ['Comunicacion', 'Diseno visual', 'Testing manual', 'Desarrollo movil']
            },
            {
                type: 'focus',
                title: 'Peliculas favoritas',
                items: [
                    {
                        name: 'El Padrino',
                        text: 'Clasico del cine sobre la poderosa familia mafiosa Corleone y la lucha por el poder, el honor y la lealtad.',
                        puntaje: '⭐⭐⭐⭐⭐'
                    },
                    {
                        name: 'Scarface',
                        text: 'Biografia de un hombre que busca el poder y la fortuna en el mundo del crimen organizado.',
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
                    { front: 'Otro dia en el planeta tierra', back: 'Intoxicados' },
                    { front: 'Mi vida sin tu amor', back: 'Cristian Castro' }
                ]
            },
            {
                type: 'projects',
                title: 'Proyectos destacados',
                items: [
                    {
                        name: 'Proyecto 1',
                        description: 'Simulacion de sitio web educativo con secciones y tarjetas informativas.',
                        tech: 'React, CSS, HTML'
                    },
                    {
                        name: 'Proyecto 2',
                        description: 'Panel de presentación con animaciones simples y texto explicativo.',
                        tech: 'React, Transiciones CSS'
                    },
                    {
                        name: 'Proyecto 3',
                        description: 'Lista de tareas con estados y botones de accion.',
                        tech: 'React, useState'
                    }
                ]
            },
            {
                type: 'extra',
                text: 'Me interesa particularmente el testing y el diseno, y aunque me cueste bastante este nuevo mundo, siempre estoy dispuesta a aprender cosas nuevas.'
            }
        ]
    },
    {
        id: '4',
        name: 'Guille',
        location: 'Argentina',
        age: 20,
        photo: '/img/gui.png',
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
        progress: {
            type: 'progress',
            title: 'Stack tecnico',
            accent: '#a35f16',
            items: [
                { label: 'Python', value: 92 },
                { label: 'JavaScript', value: 84 },
                { label: 'C#', value: 82 },
                { label: 'SQL', value: 76 },
                { label: 'Node.js', value: 74 },
                { label: 'Electron', value: 68 }
            ]
        },
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
                type: 'projects',
                title: 'Proyectos destacados',
                items: [
                    {
                        name: 'Proyecto 1',
                        description: 'Simulacion de un sitio de compras con cards de producto y filtros.',
                        tech: 'React, CSS, Hooks'
                    },
                    {
                        name: 'Proyecto 2',
                        description: 'Panel de control de tareas con estado persistente en memoria.',
                        tech: 'React, useState, localStorage'
                    },
                    {
                        name: 'Proyecto 3',
                        description: 'Pagina de equipo con navegacion y secciones de perfil.',
                        tech: 'React Router, CSS'
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
        photo: '/img/perfil_facu.png',
        photoClass: 'profile-photo-custom',
        accent: '#7b4fa3',
        skills: ['Java', 'C#', 'Node.js','MySQL','Soporte IT'],
        progress: {
            type: 'progress',
            title: 'Stack tecnico',
            accent: '#7b4fa3',
            items: [
                { label: 'Java', value: 86 },
                { label: 'C#', value: 80 },
                { label: 'Node.js', value: 75 },
                { label: 'MySQL', value: 70 },
                { label: 'Soporte IT', value: 88 }
            ]
        },
        heroCopy: 'Enfocado en la resolucion tecnica y el desarrollo de software. Actualmente cursando la tecnicatura y trabajando en infraestructura de sistemas para brindar soluciones eficientes y escalables.',
        headline: 'DEV & SOPORTE IT',
        links: [
            { label: 'GitHub', href: 'https://github.com/FacundoBascur' },
            { label: 'LinkedIn', href: 'https://www.linkedin.com/in/facundo-david-bascur-it-dev/' }
        ],
        sections: [
            {
                type: 'intro',
                title: 'Desarrollador de Software | Especialista en Soporte IT e Infraestructura',
                text: 'Soy un profesional con un perfil hibrido que combina el desarrollo de software con una solida base en soporte tecnico y resolucion de incidencias. Mi experiencia en sectores de alta exigencia, como la construccion y la energia fotovoltaica, me permitio forjar una mentalidad practica y una gran capacidad de respuesta bajo presion. Actualmente, mi enfoque principal esta en la transicion hacia el desarrollo a tiempo completo, aplicando mi experiencia tecnica para construir soluciones digitales eficientes y escalables.'
            },
              {
                type: 'focus',
                title: 'Habilidades y enfoques',
                items: [
                    {
                        name: 'Soporte IT e infraestructura',
                        text: 'Me enfoco en resolver problemas técnicos de raíz y asegurar que todo funcione sin interrupciones, dándole siempre una respuesta clara y efectiva al usuario.'
                    },
                    {
                        name: 'Desarrollo Backend',
                        text: 'Me apasiona construir el motor de las aplicaciones. Disfruto diseñando la lógica de negocio, armando y testeando rutas, y gestionando el flujo de datos para garantizar que el sistema detrás de escena sea robusto, escalable y seguro.'
                    },
                    {
                        name: 'Versatilidad y resolución',
                        text: 'Mi experiencia me dio una capacidad de adaptación única para resolver problemas complejos y crear soluciones digitales bajo cualquier nivel de presión.' 
                    }
                ]
            },
            {
                type: 'stack'
            },
            {
                type: 'flip',
                title: 'Peliculas y discos favoritos',
                frontLabel: 'Pelicula',
                backLabel: 'Disco',
                pairs: [
                    { front: 'Interestelar', back: 'Somos' },
                    { front: 'Hata el ultimo hombre', back: 'SED' },
                    { front: 'Saga Harry Potter', back: 'La Sintesis O´Konor' }
                ]
            },
            {
                type: 'projects',
                title: 'Proyectos destacados',
                items: [
                    {
                        name: 'MarBas - Plataforma de gestion Inmobiliaria',
                        description: 'Plataforma web integral diseñada para modernizar la búsqueda de inmuebles. Ofrece a los clientes una experiencia inmersiva con galerías de fotos y recorridos 360°, y cuenta con un panel administrativo seguro para la gestión total del catálogo y contacto.',
                        tech: 'HTML5, CSS, Javascript, Node.js, Express, MySQL'
                    },
                    {
                        name: 'Gestor Club Deportivo',
                        description: 'Sistema integral de gestión deportiva. Cuenta con módulos para el ABM (Alta, Baja y Modificación) de socios, inscripción a disciplinas y administración financiera (control de cuotas y liquidación de sueldos). Posteriormente, el sistema fue escalado a una versión móvil nativa utilizando Android Studio.',
                        tech: 'C#, Kotlin, SQLite, Android Studio'
                    },
                    {
                        name: 'Gestor de Vacunacion',
                        description: 'Software integral para la administración de centros de inmunización, control de turnos, stock de dosis y geolocalización de sedes.',
                        tech: 'JAVA, MySQL, Swing'
                    }
                ]
            },
            {
                type: 'extra',
                text: 'Enfocado en la resolucion tecnica y el desarrollo de software. Actualmente cursando la tecnicatura y trabajando en infraestructura de sistemas para brindar soluciones eficientes y escalables.'
            }
        ]
    }
];

export const logEntries = [
    {
        date: '12 de abril de 2026',
        title: 'Inicio del proyecto',
        decisions: 'Se definio una estructura simple con HTML en la raiz y carpetas separadas para CSS, JS e imagenes.',
        challenges: 'El primer desafio fue mantener las paginas consistentes sin repetir demasiado codigo.',
        changes: 'Se creo la portada, las paginas individuales y la seccion de bitacora.'
    },
    {
        date: '18 de abril de 2026',
        title: 'Interactividad inicial',
        decisions: 'Se agregaron botones para mostrar mensajes, cambiar el estilo de la foto y desplegar informacion extra.',
        challenges: 'Los scripts de cada integrante repetian la misma logica.',
        changes: 'Se mantuvo la funcionalidad y se identifico la necesidad de centralizar componentes.'
    },
    {
        date: '25 de abril de 2026',
        title: 'Diseno responsivo',
        decisions: 'Se agregaron propiedades para que la pagina pueda ser visualizada en los distintos dispositivos.',
        challenges: 'Los elementos no se encontraban correctamente estructurados en las distintas dimensiones.',
        changes: 'Se incorporaron las propiedades para las imagenes y organizacion de los elementos en la pagina.'
    },
    {
        date: '28 de abril de 2026',
        title: 'Refactor reutilizable',
        decisions: 'Se separaron los datos del renderizado para que el sitio pueda crecer sin copiar bloques de HTML.',
        challenges: 'Habia textos mal codificados y duplicacion entre paginas.',
        changes: 'Se incorporaron js/data.js y js/app.js como base comun para la portada, integrantes y bitacora.'
    },
    {
        date: '1 de mayo de 2026',
        title: 'Conexion HTML–JavaScript',
        decisions: 'Se decidio eliminar el contenido hardcodeado de los archivos HTML y conectarlos al sistema de datos centralizado.',
        challenges: 'Los HTML tenian contenido estatico desincronizado con data.js, lo que obligaba a actualizar varios archivos ante cada cambio.',
        changes: 'Se anadieron los atributos data-page y data-member-id en cada <body>, el contenedor <div id="app"></div> y las etiquetas <script> que cargan data.js y app.js. Ahora todo el contenido lo genera app.js a partir de los datos.'
    },
    {
        date: '15 de mayo de 2026',
        title: 'Migracion inicial a React y Vite',
        decisions: 'Se decidio migrar la base estatica del TP1 a React 19 y Vite para estructurar la aplicacion mediante componentes reutilizables y rutas dinamicas.',
        challenges: 'Configurar el enrutador y adaptar la manipulacion directa del DOM hacia el flujo de datos declarativo de React.',
        changes: 'Se configuro React Router DOM, se crearon los componentes estructurales (Layout, Sidebar) y se modularizaron las secciones de los perfiles individuales.'
    },
    {
        date: '18 de mayo de 2026',
        title: 'Estilos unificados y Sidebar responsiva',
        decisions: 'Se decidio unificar el diseno general del dashboard mediante variables CSS globales y dar soporte responsive para moviles.',
        challenges: 'Adaptar los estilos inconexos del TP1 y lograr que la barra lateral colapse de forma fluida en pantallas chicas.',
        changes: 'Se reestructuro global.css centralizando la paleta de colores y se aplico media-queries para la Sidebar responsive.'
    },
    {
        date: '20 de mayo de 2026',
        title: 'Componentes dinamicos de perfil',
        decisions: 'Se busco dotar de dinamismo y mejor visualizacion a los datos de cada integrante en su perfil individual.',
        challenges: 'Gestionar estados independientes para multiples carruseles y animar las barras de progreso sin afectar la performance.',
        changes: 'Se crearon los componentes ProgressBar (barras de skills animadas) y SectionProjects (carruseles de proyectos con control manual).'
    },
    {
        date: '22 de mayo de 2026',
        title: 'Explorador JSON y API del MET',
        decisions: 'Se definio crear un explorador para buscar candidatos locales y un modulo de conexion con la API del Museo MET.',
        challenges: 'Coordinar las peticiones asincronas, paginar los resultados externos y controlar los estados de carga y error.',
        changes: 'Se desarrollaron las paginas JsonExplorer (con filtros locales) y MetPage (con paginacion, buscador y modal de detalles).'
    },
    {
        date: '24 de mayo de 2026',
        title: 'Optimizacion de busquedas (useDebounce)',
        decisions: 'Se decidio optimizar las consultas en los inputs de busqueda para no saturar las llamadas al servidor o procesamientos locales.',
        challenges: 'Implementar una funcion de retraso limpia que se reinicie ante cada pulsacion de tecla en React.',
        changes: 'Se desarrollo el hook personalizado useDebounce y se integro tanto en el Explorador JSON como en la conexion con el MET.'
    },
    {
        date: '28 de mayo de 2026',
        title: 'Galeria interactiva con Lightbox',
        decisions: 'Se busco una visualizacion interactiva y limpia para la seccion de galeria de imagenes del grupo.',
        challenges: 'Gestionar de manera global eventos de teclado (Esc, flechas) y agregar funcionalidad de zoom fluido dentro del modal.',
        changes: 'Se construyo el componente Lightbox con navegacion interna, zoom interactivo y control mediante teclado.'
    },
    {
        date: '30 de mayo de 2026',
        title: 'Deploy final en Vercel e Integracion',
        decisions: 'Se decidio unificar todos los cambios en la rama desa y realizar la publicacion final del sitio en Vercel.',
        challenges: 'Solucionar advertencias de imports sensibles a mayusculas/minusculas entre entornos Windows (local) y Linux (Vercel).',
        changes: 'Se corrigieron los nombres de los archivos en imports y se realizo el deploy automatico conectado a la rama main.'
    }
];