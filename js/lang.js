$(document).ready(function(){

    $(document).on('click', '.esp-lang', function(){

        // Nav Bar
        $("#home-lang").empty().text("Inicio");
        $("#about-lang").empty().text("Sobre Nosotros");
        $("#services-lang").empty().text("Servicios");
        $("#portfolio-lang").empty().text("Proyectos");
        $("#team-lang").empty().text("Equipo");
        $("#contact-lang").empty().text("Contáctenos");
        $(".switch-lang").empty().append("<a class=\"en-lang\" href=\"#\">English</a>");

        // Slogan
        $(".slogan-lang").empty().text("Trabajos de calidad en manos de profesionales");
        $(".slogan-btn-lang").empty().text("Conoce más");

        //About us
        $("#about-sec-lang").empty().text("Sobre Nosotros");
        $("#about-sec-p-lang").empty().text("APS Group, Inc. es una compañía de construcción que ostenta un equipo de profesionales con más de diez años de experiencia en la industria. Comprometidos como ningún otro con sus clientes para obtener un resultado final de calidad. Esto debido a su excelente organización y trabajo en equipo.");

        //Mission
        $("#mission-t-lang").empty().text("Nuestra misión");
        $("#mission-p-lang").empty().text("Satisfacer las necesidades de nuestros clientes, aliándonos con ellos en sus proyectos y proporcionándoles soluciones integrales de ingeniería, diseño y construcción, basados en innovación y calidad. Lograremos esto comprometiéndonos con las prácticas seguras, garantizando el respeto al ser humano y cumpliendo con la legislación vigente. Para ello, además, utilizaremos materiales adecuados y talento humano competente. Así, con cada una de nuestras acciones contribuimos al desarrollo económico de Puerto Rico.");

        //Plan
        $("#plan-t-lang").empty().text("Nuestro plan");
        $("#plan-p-lang").empty().text("Ofrecer cada uno de nuestros servicios con integridad y transparencia.");

        //Vision
        $("#vision-t-lang").empty().text("Nuestra visión");
        $("#vision-p-lang").empty().text("Ampliar nuestra cobertura y consolidar nuestro posicionamiento en el mercado puertorriqueño, desarrollando proyectos de diseño, ingeniería y construcción que excedan las expectativas de nuestros clientes, y nos permitan mantenernos como una compañía sólida, competitiva, segura y comprometida con la calidad.");

        //Services
        $("#services-t-lang").empty().text("Servicios");
        $("#services-1-lang").empty().text("Supervisión de proyectos en construcción");
        $("#services-2-lang").empty().text("Preparación y evaluación de costos estimados");
        $("#services-3-lang").empty().text("Control de costos de construcción, incluyendo el presupuesto");
        $("#services-4-lang").empty().text("Diseño y evaluación de planos");
        $("#services-5-lang").empty().text("Venta e instalación de muebles para oficina");
        $("#services-6-lang").empty().text("Conocimiento en revisión y evaluación de estructuras empleando la normativa vigente aplicable");
        $("#services-7-lang").empty().text("Instalación de: ");
        $("#services-7-1-lang").empty().text("sistema de alarma de fuego, sistema de supresión de fuego, sistema de llamada paciente-enfermera (nurse call), sistema de sonido y localización, sistema de control de acceso, sistema de Circuito Cerrado de Televisión (CCTV), sistema de intercom y sistema de cableado estructurado");
        $("#services-8-lang").empty().text("Construcción general: ");
        $("#services-8-1-lang").empty().text("concreto, acabados, electricidad, mecánica y plomería, tanto para proyectos públicos como privados");

        //Data
        $("#data-lang").empty().text("Nuestros Datos");
        $("#data-1-lang").empty().text("Establecida en el");
        $("#data-2-lang").empty().text("Proyectos completados");
        $("#data-3-lang").empty().text("Clientes");
        $("#data-4-lang").empty().text("Empleos creados");

        //Projects
        $("#projects-lang").empty().text("Nuestros Proyectos");

        //Portfolio
        $("#all-lang").empty().text("Todos");

        //Clients
        $("#clients-lang").empty().text("Nuestros Clientes");

        //Team
        $("#team-sec-lang").empty().text("Nuestro Equipo");
        $("#team-1-lang").empty().text("Con más de 10 años de experiencia en la industria de la construcción de hospitales, el Ingeniero Rivera fue director del Departamento de Ingeniería en varios hospitales. Ha sido responsable de manejar presupuestos de más de 7 millones de dólares anuales, asignados para mejoras permanentes. Asimismo, ha sido auditado por varias agencias reguladoras, como la Joint Commission y OSHA. De igual modo, ha sido responsable de dirigir proyectos de construcción de sobre 4 millones de dólares. Su éxito se basa en la excelente organización, estructura y liderazgo, herramientas que lo han llevado a dominar 67 empleos directos y 28 indirectos, trabajados simultáneamente. Ha sido responsable de la reestructuración de varios departamentos de Planta Física e Ingeniería durante los pasados años.");
        $("#team-2-lang").empty().text("Presidente de PSC Group Corp, compañía con más de 10 años de experiencia en la industria de las telecomunicaciones y sistemas de seguridad. Trabaja proyectos, simultáneamente, en la industria de hospitales y de construcción; asimismo, ha administrado presupuestos combinados de hasta 1.5 millones de dólares anualmente. Su mayor fortaleza incluye el conocimiento práctico de las regulaciones de la Administración de Seguridad y Salud Ocupacional (OSHA, por sus siglas en inglés) y los requisitos del Departamento de Trabajo. Domina el entorno hospitalario y los proyectos de seguimiento rápido. Su especialización en manejo de proyectos se concentra en los siguientes sistemas de seguridad: alarma de fuego, sistema de llamada paciente-enfermera (nurse call), sistema de protección de niños, sistema de sonido y localización, sistema de cableado estructurado, CCTV y alarmas antirrobos.");
        $("#team-3-lang").empty().text("Asistente ejecutivo administrativo con más de 10 años de experiencia, que provee asistencia hábil y completa a ejecutivos sénior. Cuenta con capacitación profesional en el área de contabilidad, y con un MBA en Recursos Humanos de la Universidad Interamericana de Puerto Rico.");

        //Contact Us
        $("#contact-sec-lang").empty().text("Contáctenos");
        $("#contact-1-lang").empty().text("Dirección Física");
        $("#contact-2-lang").empty().text("Dirección Postal");
        $("#contact-3-lang").empty().text("Teléfono");
        $("#contact-4-lang").empty().text("Email");



    });

    $(document).on('click', '.en-lang', function(){

        // Nav Bar
        $("#home-lang").empty().text("Home");
        $("#about-lang").empty().text("About Us");
        $("#services-lang").empty().text("Services");
        $("#portfolio-lang").empty().text("Projects");
        $("#team-lang").empty().text("Team");
        $("#contact-lang").empty().text("Contact Us");
        $(".switch-lang").empty().append("<a class=\"esp-lang\" href=\"#\">Español</a>");

        // Slogan
        $(".slogan-lang").empty().text("High quality work by professionals");
        $(".slogan-btn-lang").empty().text("See More");

        //About us
        $("#about-sec-lang").empty().text("About Us");
        $("#about-sec-p-lang").empty().text("APS Group, Inc. is a construction company that counts with a professional team with more than ten years of experience in the industry, committed like no other with its clients to obtain a final product of quality. This due to its excellent organization and teamwork.");

        //Mission
        $("#mission-t-lang").empty().text("Our Mission");
        $("#mission-p-lang").empty().text("Satisfying our clients' needs by being their allies in their projects and providing them with essential engineering, design and construction solutions based on innovation and quality. Our achievement will be acquired by committing ourselves to safe practices, ensuring respect for human beings and following current laws. Additionally, we will use adequate materials and competent human talent. Thus, with each of our actions we will contribute to Puerto Rico's economic development.");

        //Plan
        $("#plan-t-lang").empty().text("Our Plan");
        $("#plan-p-lang").empty().text("Offer each of our services with integrity and transparency.");

        //Vision
        $("#vision-t-lang").empty().text("Our Vision");
        $("#vision-p-lang").empty().text("Expand our coverage and cementing our position in the Puerto Rican market, developing projects of design, engineering and construction that exceed our clients' expectations, allowing us to uphold ourselves as a solid company, competitive, secure, and committed to quality.");

        //Services
        $("#services-t-lang").empty().text("Services");
        $("#services-1-lang").empty().text("Supervision of Projects in Construction");
        $("#services-2-lang").empty().text("Preparation and Evaluation of Cost Estimates");
        $("#services-3-lang").empty().text("Construction Cost Control, including Budget");
        $("#services-4-lang").empty().text("Design and evaluation of plans");
        $("#services-5-lang").empty().text("Sale and installation of office furniture");
        $("#services-6-lang").empty().text("Knowledge in revision and structure evaluations utilizing applicable current regulation");
        $("#services-7-lang").empty().text("Installation of: ");
        $("#services-7-1-lang").empty().text("fire alarm system, sprinkler system, Nurse Call system, sound & paging systems, access control system, CCTV system, intercom system and structured cabling system.");
        $("#services-8-lang").empty().text("General Construction: ");
        $("#services-8-1-lang").empty().text("concrete, finishes, electrical, mechanical and plumbing, for public and private projects.");

        //Data
        $("#data-lang").empty().text("Our Data");
        $("#data-1-lang").empty().text("Established in the");
        $("#data-2-lang").empty().text("Completed Projects");
        $("#data-3-lang").empty().text("Clients");
        $("#data-4-lang").empty().text("Jobs Created");

        //Projects
        $("#projects-lang").empty().text("Our Projects");

        //Portfolio
        $("#all-lang").empty().text("All");

        //Clients
        $("#clients-lang").empty().text("Our Clients");

        //Team
        $("#team-sec-lang").empty().text("Our Team");
        $("#team-1-lang").empty().text("The Engineer Rivera, with more than 10 years of experience in the industry of hospital construction, was the Director of the Engineering Department in different hospitals. He has been in charge of managing budgets for permanent improvements of more than 7 million dollars annually. He has been audited by regulation agencies like the Joint Commission and OSHA. Additionally, he has directed building projects of over 4 million dollars. His success is based on excellent organization, structure, and leadership skills, resulting in managing 67 direct jobs and 28 indirect jobs at the same time. He has been responsible of the re-structuration of different departments of the Physical and Engineering Plant during past years.");
        $("#team-2-lang").empty().text("President of PSC Group Corp, a company with more than 10 years of experience in telecommunications and security systems. He works with both, building and hospital industries simultaneously. Additionally, he has administered up to 1.5 million dollars annually in combined budgets. His greatest asset is practical understanding of the regulations established by Occupational Safety and Health Administration (OSHA) and of the requirements of the Department of Labor. He masters hospital environments and quick follow-up projects. He also specializes on the following security systems: fire alarm, access control, Nurse Call system, child protection system, sound & paging system, structured cabling system, CCTV, and burglar alarms.");
        $("#team-3-lang").empty().text("Executive Administrative Assistant with over 10 years of experience providing thorough and skillful support to senior executives. Professional training in accounting and MBA in Human Resources of the Interamericana University of Puerto Rico.");

        //Contact Us
        $("#contact-sec-lang").empty().text("Contact Us");
        $("#contact-1-lang").empty().text("Physical Address");
        $("#contact-2-lang").empty().text("Postal Address");
        $("#contact-3-lang").empty().text("Phone");
        $("#contact-4-lang").empty().text("Email");


    });

});
