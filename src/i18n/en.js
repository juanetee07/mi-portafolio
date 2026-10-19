export const en = {
  nav: ['Home', 'About', 'History', 'Projects', 'Contact'],
  heroSubtitle: 'Backend Developer | Java & Spring Boot',
  aboutTitle: 'Player 1: About Me',
  aboutText: 'I am a Software Development student focused on Backend development. I work primarily with Java and Spring Boot, developing REST APIs and applications using JPA/Hibernate and MySQL. Through various projects, I aim to strengthen my knowledge in layered architecture and databases. I am eager to keep learning and participate in projects where I can contribute and grow as a developer.',
  timelineTitle: 'Quest Log: Career History',
  quests: [
    { 
      role: 'Customer Service and Stock', 
      place: 'Retail Store', 
      date: '2023 - 2024', 
      desc: 'Customer advice, stock control, merchandise reception, and on-floor inventory supervision.',
      skillsLabel: 'Attributes acquired:',
      skills: ['Operational Organization', 'Inventory Control', 'Conflict Resolution']
    },
    { 
      role: 'Higher Technician in Software Development', 
      place: 'Universidad Provincial de Córdoba (UPC)', 
      date: '2023 - Present', 
      desc: 'Advanced training focused on Backend development, API architecture, design patterns, and relational databases.',
      skillsLabel: 'Technical Skills:',
      skills: ['Layered Architecture', 'Spring Data JPA', 'MySQL Modeling', 'Advanced OOP']
    },
    { 
      role: 'Administrative and Operational Assistant', 
      place: 'Orthopedics', 
      date: '2025 - Present', 
      desc: 'Administration, supply traceability, process systematization, and internal logistics optimization.',
      skillsLabel: 'Key Attributes:',
      skills: ['Process Systematization', 'Data Management', 'Traceability & Logistics']
    }
  ],
  achievementsTitle: 'Unlocked Achievements',
  achievements: [
    { title: 'Professional Training Certificate', desc: 'Software Development - Inst. Dr. Bernardo Houssay', year: '2024' },
    { title: 'Intro to Python Certification', desc: 'Cruz del Eje Municipality', year: '2022' }
  ],
  softSkillsTitle: 'Character Attributes',
  softSkills: [
    { name: 'Problem Solving', level: '90%' },
    { name: 'Teamwork', level: '85%' },
    { name: 'Adaptability', level: '80%' },
    { name: 'Management & Organization', level: '95%' }
  ],
  skillsTitle: 'Tech Inventory',
  skillsSub: '(Click to farm XP!)',
  projectsTitle: 'Completed Quests',
  projects: [
    {
      name: 'Turismo-Capilla',
      desc: 'Full-stack platform and REST API developed for the Capilla del Monte Tourism Board. Centralizes accommodations, tourist trails, booking engine with anti-overbooking rules, and host invitation tokens.',
      fullDescription: 'Academic platform developed for Capilla del Monte Tourism Board (UPC). Connects travelers with authorized accommodations (cabins, hotels, campsites), trails, and attractions, handling direct bookings with audited codes (CAP-YYYY-XXXX).',
      architecture: 'Layered clean architecture built with Java 17 and Spring Boot 3. Stateless authentication with Spring Security 6 and JJWT with role-based access control (ADMIN, HOST, TOURIST). Single-use invitation tokens with 7-day expiration for secure host onboarding. Documented with SpringDoc OpenAPI / Swagger UI 2.8.5.',
      dbNotes: 'PostgreSQL 18 relational database with native UUID primary keys, bidirectional JPA mappings, and strict referential integrity.',
      image: '/projects/turismo-capilla-cover.svg',
      repoUrl: 'https://github.com/Tiag4/Turismo-Capilla',
      technologies: ['Java 17', 'Spring Boot 3', 'Spring Security 6', 'JJWT', 'PostgreSQL 18', 'Spring Data JPA', 'Swagger / OpenAPI', 'Maven'],
      gallery: [
        { 
          image: '/projects/turismo-capilla-cover.svg', 
          title: 'Booking Engine & Accommodations', 
          desc: 'Check-in/check-out availability validation, strict anti-overbooking logic, and audited reservation codes.' 
        },
        { 
          image: '/projects/turismo-capilla-swagger.svg', 
          title: 'Swagger UI / OpenAPI 3.0 Documentation', 
          desc: 'Documented REST endpoints with Bearer Token authorization for host and admin operations.' 
        },
        { 
          image: '/projects/turismo-capilla-der.svg', 
          title: 'Entity-Relationship Model (PostgreSQL)', 
          desc: 'Normalized schema with native UUIDs, mapped accommodations, bookings, and invitation tokens.' 
        }
      ]
    },
    {
      name: 'SistemaDeGestionYValidacion',
      desc: 'Institutional academic platform for UPC to manage and validate educational information: official resolutions, news publishing, role-based users, and structured comments.',
      fullDescription: 'Platform developed to centralize academic communication and administration for Universidad Provincial de Córdoba. Allows official publication of academic resolutions, institutional notices, and moderated community participation with audit trail logging.',
      architecture: 'Modular backend built with Java 17 and Spring Boot organized into Controllers, Services, and Repositories. Clean decoupling with server-side business validations, RBAC permissions, and relational persistence via Spring Data JPA.',
      dbNotes: 'Relational MySQL database optimized for audit trail logging, resolution management, and user permissions.',
      image: '/projects/gestion-academica-cover.svg',
      repoUrl: 'https://github.com/juanetee07/SistemaDeGestionYValidacion',
      technologies: ['Java 17', 'Spring Boot', 'MySQL', 'Spring Data JPA', 'REST APIs', 'RBAC Control', 'Audit Trail'],
      gallery: [
        { 
          image: '/projects/gestion-academica-cover.svg', 
          title: 'Institutional Resolution Management', 
          desc: 'Centralization of official regulations, notices, and moderated community discussions.' 
        },
        { 
          image: '/projects/gestion-academica-arch.svg', 
          title: 'Validation & Roles Architecture', 
          desc: 'Authentication flow, RBAC access control, and historical change tracking.' 
            }
      ]
    },
    {
      name: 'cielo',
      desc: 'Interactive web platform for the Villa Cielo Nature Reserve. Features trail QR code scanning, nature trivias, native flora guide, and SOS Fire emergency protocol.',
      fullDescription: 'Web application designed for environmental awareness and biodiversity education in the Villa Cielo Nature Reserve (Capilla del Monte). Allows on-site visitors to scan QR codes on trails, unlock characters, browse botanical guides, and access quick emergency contacts.',
      architecture: 'Built with React 19, Vite, and Tailwind CSS v4. Implements component-driven architecture, custom hooks for reward state and profile persistence, React Router navigation, and Lucide React icons. Features mobile-first responsive design and visual accessibility modes.',
      dbNotes: 'Client-side data structures optimized for botanical cataloging, trivia quizzes, and character progression.',
      image: '/projects/villa-cielo-cover.svg',
      repoUrl: 'https://github.com/MayraMoy/cielo',
      technologies: ['React 19', 'Vite', 'Tailwind CSS', 'Lucide React', 'React Router', 'QR Gamification', 'Accessibility UX'],
      gallery: [
        { 
          image: '/projects/villa-cielo-cover.svg', 
          title: 'Villa Cielo Nature Reserve', 
          desc: 'Interactive environmental education, biodiversity cards, and community wildfire prevention.' 
        },
        { 
          image: '/projects/villa-cielo-ui.svg', 
          title: 'Trivia Modules & Fire Safety', 
          desc: 'On-trail QR scanning, native flora library, and SOS emergency protocols adapted for all ages.' 
        }
      ]
    },
    {
      name: 'ForoUPC Backend',
      desc: 'Backend development for an educational discussion platform. Implementation of entities, JPA relationships, repositories, and CRUD services with secure, well-documented REST APIs.',
      fullDescription: 'Academic forum backend platform. Provides REST endpoints for topic creation, paginated queries, status updates, and marked solution replies with robust backend best practices.',
      architecture: 'Three-tier architecture: Controllers (@RestController), Business Layer (@Service), and Persistence (@Repository with Spring Data JPA). JPA/Hibernate was selected over raw JDBC to maximize maintainability, declarative transaction management, and automated Jakarta validation.',
      dbNotes: 'Normalized relational MySQL schema with strict foreign keys (users, courses, topics, answers with soft-delete flags).',
      image: '/projects/foroupc-cover.svg',
      repoUrl: 'https://github.com/juanetee07/BackendForoUPC',
      technologies: ['Java 17', 'Spring Boot 3', 'Spring Data JPA', 'MySQL', 'Jakarta Validation', 'OpenAPI / Swagger'],
      gallery: [
        { 
          image: '/projects/foroupc-cover.svg', 
          title: 'Layered Architecture & DTO Flow', 
          desc: 'Clean decoupling between request/response DTOs and database persistent entities.' 
        },
        { 
          image: '/projects/foroupc-swagger.svg', 
          title: 'OpenAPI / Swagger UI Documentation', 
          desc: 'Tested REST endpoints for POST, paginated GET, PUT, and DELETE with semantic HTTP codes.' 
        },
        { 
          image: '/projects/foroupc-der.svg', 
          title: 'Entity-Relationship Diagram (ERD)', 
          desc: 'Database relational tables with bidirectional @ManyToOne / @OneToMany mappings in Hibernate.' 
        }
      ]
    },
    {
      name: 'StockFlow API',
      desc: 'REST API designed for real-time stock management, low inventory alerts, and order processing, inspired by real operational logistics workflows.',
      fullDescription: 'Backend microservice built to solve inventory discrepancies, supplier batch reception, and order fulfillment with audit logs.',
      architecture: 'Built with declarative ACID transactions (@Transactional) to ensure atomic stock decrement and order confirmation, with custom exception handling for out-of-stock items.',
      dbNotes: 'Products, categories, audit logs, and orders tables with optimized index lookups on SKU fields.',
      image: '/projects/stock-api-cover.svg',
      repoUrl: 'https://github.com/juanetee07',
      technologies: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'ACID Transactions', 'SpringDoc OpenAPI'],
      gallery: [
        { 
          image: '/projects/stock-api-cover.svg', 
          title: 'Stock Management & Logistic Modules', 
          desc: 'Modular architecture for tracking inventory thresholds and order processing.' 
        },
        { 
          image: '/projects/stock-api-swagger.svg', 
          title: 'OpenAPI / Swagger 3.0 Specification', 
          desc: 'RESTful endpoints for stock inquiries, batch adjustments, and order checkouts.' 
        }
      ]
    }
  ],
  contactTitle: 'Save Point (Contact)',
  btnLang: 'Cambiar a Español',
  footerSubtitle: 'Level Complete',
  footerAuthorPrefix: 'Designed and farmed by',
  footerRights: 'All rights reserved.'
};
