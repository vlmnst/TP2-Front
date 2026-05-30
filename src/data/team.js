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
        id: '2',
        name: 'Valeria',
        location: 'Cordoba, Provincia de Cordoba',
        age: 30,
        photo: '/img/perfil_vale.png',
        photoClass: 'profile-photo-custom',
        accent: '#c4513b',
        heroCopy:
            'Desarrolladora backend con experiencia en AWS serverless, bases de datos relacionales y no relacionales, enfocada en soluciones escalables e innovadoras.',
        headline:
            'Programadora con enfoque en backend, apasionada por investigar y resolver problemas a traves de procesos innovadores.',
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
                frontLabel: '🎬 Pelicula',
                backLabel: '🎵 Disco',
                pairs: [
                    { front: 'El Diablo viste a la moda', back: 'LUX' },
                    { front: 'El Club de la Pelea', back: 'Almendra' },
                    { front: 'Legalmente Rubia', back: 'La vida era mas corta' }
                ]
            },
            {
                type: 'extra',
                text: 'Estoy completamente comprometida con mi trabajo y me aseguro de brindar lo mejor de mi. Si buscas a alguien capaz de ofrecer soluciones innovadoras y de calidad, estare encantada de trabajar junto a vos.'
            }
        ]
    }
];

const teamData = {
    team,
    nav,
    homeMessages,
    members
};

export default teamData;