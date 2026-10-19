export const es = {
  nav: ['Inicio', 'Acerca de', 'Historial', 'Proyectos', 'Contacto'],
  heroSubtitle: 'Desarrollador Backend | Java & Spring Boot',
  aboutTitle: 'Player 1: Acerca de mí',
  aboutText: 'Soy estudiante de Desarrollo de Software orientado al desarrollo Backend. Trabajo principalmente con Java y Spring Boot, desarrollando APIs REST y aplicaciones utilizando JPA/Hibernate y MySQL. A través de proyectos busco fortalecer mi conocimiento en arquitectura en capas y bases de datos. Me interesa seguir aprendiendo y participar en proyectos donde pueda aportar y crecer como desarrollador.',
  timelineTitle: 'Quest Log: Historial de Partidas',
  quests: [
    { 
      role: 'Atención al Cliente y Stock', 
      place: 'Polirubro', 
      date: '2023 - 2024', 
      desc: 'Asesoramiento al cliente, control y recepción de mercadería, gestión de stock e inventario en salón.',
      skillsLabel: 'Atributos adquiridos:',
      skills: ['Organización Operativa', 'Control de Stock', 'Resolución de Conflictos']
    },
    { 
      role: 'Tecnicatura Sup. en Desarrollo de Software', 
      place: 'Universidad Provincial de Córdoba (UPC)', 
      date: '2023 - En curso', 
      desc: 'Formación avanzada orientada al desarrollo Backend, arquitectura de APIs, patrones de diseño y bases de datos relacionales.',
      skillsLabel: 'Skills Técnicas:',
      skills: ['Arquitectura en Capas', 'Spring Data JPA', 'Modelado MySQL', 'POO Avanzada']
    },
    { 
      role: 'Auxiliar Administrativo y Operativo', 
      place: 'Ortopedia', 
      date: '2025 - Actualidad', 
      desc: 'Administración, trazabilidad de insumos, sistematización de procesos y optimización de logística interna.',
      skillsLabel: 'Atributos clave:',
      skills: ['Sistematización de Procesos', 'Gestión de Datos', 'Trazabilidad y Logística']
    }
  ],
  achievementsTitle: 'Logros Desbloqueados',
  achievements: [
    { title: 'Certificado de Formación Profesional', desc: 'Desarrollo de Software - Inst. Dr. Bernardo Houssay', year: '2024' },
    { title: 'Certificación Intro a Python', desc: 'Municipalidad de Cruz del Eje', year: '2022' }
  ],
  softSkillsTitle: 'Atributos del Personaje',
  softSkills: [
    { name: 'Resolución de Problemas', level: '90%' },
    { name: 'Trabajo en Equipo', level: '85%' },
    { name: 'Adaptabilidad', level: '80%' },
    { name: 'Gestión y Organización', level: '95%' }
  ],
  skillsTitle: 'Inventario Técnico',
  skillsSub: '(¡Haz clic para farmear XP!)',
  projectsTitle: 'Misiones Completadas',
  projects: [
    {
      name: 'Turismo-Capilla',
      desc: 'Plataforma integral y API REST desarrollada para la Comisión de Turismo de Capilla del Monte. Centraliza hospedajes, paseos turísticos, motor de reservas con prevención anti-overbooking y tokens de invitación.',
      fullDescription: 'Sistema integral desarrollado en el marco académico de la UPC para la Comisión de Turismo de Capilla del Monte. Conecta a turistas con alojamientos habilitados (cabañas, hoteles, campings), circuitos serranos y paseos locales, gestionando el ciclo completo de reservas directas con código único auditado (CAP-YYYY-XXXX).',
      architecture: 'Arquitectura limpia en capas con Java 17 y Spring Boot 3. Seguridad stateless con Spring Security 6 y JJWT con roles diferenciados (ADMIN, HOST, TOURIST). Onboarding seguro para prestadores mediante tokens de un solo uso con 7 días de validez. Documentación completa con SpringDoc OpenAPI / Swagger UI 2.8.5.',
      dbNotes: 'Base de datos relacional PostgreSQL 18 con claves primarias UUID nativas, relaciones JPA bidireccionales e integridad referencial estricta.',
      image: '/projects/turismo-capilla-cover.svg',
      repoUrl: 'https://github.com/Tiag4/Turismo-Capilla',
      technologies: ['Java 17', 'Spring Boot 3', 'Spring Security 6', 'JJWT', 'PostgreSQL 18', 'Spring Data JPA', 'Swagger / OpenAPI', 'Maven'],
      gallery: [
        { 
          image: '/projects/turismo-capilla-cover.svg', 
          title: 'Motor de Reservas & Hospedajes', 
          desc: 'Control de disponibilidad por fechas, prevención estricta de overbooking y códigos auditados CAP-YYYY-XXXX.' 
        },
        { 
          image: '/projects/turismo-capilla-swagger.svg', 
          title: 'Documentación Swagger UI / OpenAPI 3.0', 
          desc: 'Endpoints REST documentados con soporte para autenticación Bearer Token en operaciones protegidas.' 
        },
        { 
          image: '/projects/turismo-capilla-der.svg', 
          title: 'Diagrama Entidad-Relación (PostgreSQL)', 
          desc: 'Modelo relacional normalizado con identificadores UUID nativos, alojamientos, reservas y tokens.' 
        }
      ]
    },
    {
      name: 'SistemaDeGestionYValidacion',
      desc: 'Plataforma web institucional para la gestión y validación de información académica en la UPC: resoluciones oficiales, novedades, usuarios con roles y comentarios estructurados.',
      fullDescription: 'Plataforma concebida para centralizar la comunicación y administración académica de la institución educativa. Permite la publicación segura y ordenada de resoluciones académicas oficiales, noticias institucionales y participación activa de la comunidad con control de permisos y trazabilidad de cambios.',
      architecture: 'Backend modular en Java 17 y Spring Boot organizado por capas (Controllers, Services, Repositories). Desacoplamiento limpio con validaciones de negocio en servidor, control de acceso por roles (RBAC) y persistencia relacional con Spring Data JPA.',
      dbNotes: 'Base de datos relacional MySQL optimizada para auditoría, almacenamiento de resoluciones y control de usuarios.',
      image: '/projects/gestion-academica-cover.svg',
      repoUrl: 'https://github.com/juanetee07/SistemaDeGestionYValidacion',
      technologies: ['Java 17', 'Spring Boot', 'MySQL', 'Spring Data JPA', 'APIs REST', 'Control de Roles (RBAC)', 'Auditoría'],
      gallery: [
        { 
          image: '/projects/gestion-academica-cover.svg', 
          title: 'Gestión Institucional de Resoluciones', 
          desc: 'Centralización de reglamentos, novedades oficiales y participación comunitaria moderada.' 
        },
        { 
          image: '/projects/gestion-academica-arch.svg', 
          title: 'Arquitectura de Validación & Roles', 
          desc: 'Flujo de autenticación, control de permisos RBAC y registro histórico de cambios.' 
        }
      ]
    },
    {
      name: 'cielo',
      desc: 'Plataforma web interactiva para la Reserva Natural Villa Cielo. Incluye gamificación con escáner QR en senderos, trivias botánicas, guía de flora autóctona y protocolo SOS Incendios.',
      fullDescription: 'Aplicación web orientada a la educación ambiental y preservación de la biodiversidad en la Reserva Natural Villa Cielo (Capilla del Monte). Ofrece a los visitantes una experiencia inmersiva en territorio con escáner de códigos QR, desbloqueo de personajes, biblioteca de flora serrana y acceso directo a números de emergencia.',
      architecture: 'Desarrollado en React 19 con Vite y Tailwind CSS v4. Implementa arquitectura basada en componentes, hooks personalizados para estado de recompensas y perfil, enrutamiento con React Router e iconografía vectorial con Lucide React. Integra diseño responsive mobile-first y soporte de accesibilidad.',
      dbNotes: 'Gestión de datos de catálogo botánico, preguntas de trivia y estado de desbloqueos en cliente.',
      image: '/projects/villa-cielo-cover.svg',
      repoUrl: 'https://github.com/MayraMoy/cielo',
      technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Lucide React', 'React Router', 'Escáner QR', 'Accesibilidad UX'],
      gallery: [
        { 
          image: '/projects/villa-cielo-cover.svg', 
          title: 'Reserva Natural Villa Cielo', 
          desc: 'Educación ambiental interactiva, fichas de biodiversidad y concientización territorial.' 
        },
        { 
          image: '/projects/villa-cielo-ui.svg', 
          title: 'Módulos de Trivia & SOS Incendios', 
          desc: 'Escaneo QR en senderos, fichas de flora nativa y protocolos de emergencia con accesibilidad.' 
        }
      ]
    },
    {
      name: 'Backend ForoUPC',
      desc: 'Desarrollo integral del backend para una plataforma de foros educativos. Implementación de entidades, relaciones JPA, repositorios y servicios CRUD con APIs REST seguras y documentadas.',
      fullDescription: 'Plataforma backend concebida para la interacción y soporte académico. Provee endpoints REST para la creación, consulta paginada, actualización y cierre de tópicos de debate con respuestas marcadas como solución.',
      architecture: 'Arquitectura en tres capas: Controladores REST (@RestController), Capa de Negocio (@Service) y Persistencia (@Repository con Spring Data JPA). Se utilizó JPA/Hibernate para optimizar el tiempo de desarrollo, garantizar portabilidad de motor de datos y aprovechar validaciones automáticas Jakarta.',
      dbNotes: 'Base de datos relacional MySQL con integridad referencial (tablas usuarios, cursos, topicos y respuestas con foreign keys y borrado lógico).',
      image: '/projects/foroupc-cover.svg',
      repoUrl: 'https://github.com/juanetee07/BackendForoUPC',
      technologies: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'MySQL', 'Jakarta Validation', 'OpenAPI / Swagger'],
      gallery: [
        { 
          image: '/projects/foroupc-cover.svg', 
          title: 'Arquitectura en Capas & Flujo DTO', 
          desc: 'Desacoplamiento limpio entre DTOs de entrada/salida y entidades persistentes de base de datos.' 
        },
        { 
          image: '/projects/foroupc-swagger.svg', 
          title: 'Documentación OpenAPI / Swagger', 
          desc: 'Endpoints RESTful testeados para POST, GET paginado, PUT y DELETE con códigos HTTP semánticos.' 
        },
        { 
          image: '/projects/foroupc-der.svg', 
          title: 'Diagrama Entidad-Relación (DER)', 
          desc: 'Esquema relacional de tablas con mapeo bidireccional y asociaciones @ManyToOne / @OneToMany.' 
        }
      ]
    },
    {
      name: 'StockFlow API',
      desc: 'API REST diseñada para gestión de existencias en tiempo real, alertas de bajo stock y procesamiento de órdenes, inspirada en procesos operativos reales.',
      fullDescription: 'Microservicio backend creado para sistematizar el control de mercadería, recepción de lotes y despacho de pedidos. Diseñado para evitar discrepancias de inventario y optimizar la trazabilidad operativa.',
      architecture: 'Implementación con transacciones ACID declarativas (@Transactional) para asegurar que el decremento de existencias y la confirmación de la orden ocurran de forma indivisible. Manejo de excepciones personalizadas para productos agotados.',
      dbNotes: 'Tablas de productos, categorías, movimientos y pedidos con índices de búsqueda rápida por SKU.',
      image: '/projects/stock-api-cover.svg',
      repoUrl: 'https://github.com/juanetee07',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Transacciones ACID', 'SpringDoc OpenAPI'],
      gallery: [
        { 
          image: '/projects/stock-api-cover.svg', 
          title: 'Control de Stock y Módulos Logísticos', 
          desc: 'Arquitectura modular para control de existencias críticas, alertas y gestión de pedidos.' 
        },
        { 
          image: '/projects/stock-api-swagger.svg', 
          title: 'Contrato OpenAPI / Swagger 3.0', 
          desc: 'Especificación de endpoints para consulta de bajo stock, actualización de lotes y checkout.' 
        }
      ]
    }
  ],
  contactTitle: 'Punto de Guardado (Contacto)',
  btnLang: 'Switch to English',
  footerSubtitle: 'Level Complete',
  footerAuthorPrefix: 'Diseñado y farmeado por',
  footerRights: 'Todos los derechos reservados.'
};
