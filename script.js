// Sistema de traducción mejorado y más robusto
const translations = {
    es: {
        'nav-home': 'Inicio',
        'nav-about': 'Sobre Mí',
        'nav-services': 'Servicios',
        'nav-portfolio': 'Portafolio',
        'nav-contact': 'Contacto',
        'hero-desc': 'Desarrollador Web Profesional & Freelancer Creativo',
        'cta-text': 'Ver Mis Servicios',
        'about-title': 'Sobre Mí',
        'about-p1': 'Soy un desarrollador web profesional especializado en crear sitios web modernos, responsivos y optimizados. Con experiencia en las últimas tecnologías, me dedico a transformar ideas en experiencias digitales excepcionales.',
        'about-p2': 'Mi enfoque se centra en la calidad, la funcionalidad y el diseño atractivo. Cada proyecto es una oportunidad para crear algo único que impulse el éxito de mis clientes.',
        'stat-projects': 'Proyectos Completados',
        'stat-experience': 'Años de Experiencia',
        'stat-satisfaction': 'Satisfacción del Cliente',
        'services-title': 'Desarrollo Web Profesional',
        'services-subtitle': 'Creo sitios web que no solo se ven increíbles, sino que también funcionan perfectamente en todos los dispositivos',
        'service-title': 'Desarrollo Web Completo',
        'service-description': 'Desde landing pages hasta aplicaciones web complejas, desarrollo soluciones web modernas que impulsan tu negocio al siguiente nivel.',
        'feature-1': 'Diseño responsivo y móvil-first',
        'feature-2': 'Optimización SEO y velocidad',
        'feature-3': 'Integración de sistemas de pago',
        'feature-4': 'Panel de administración',
        'feature-5': 'Seguridad y respaldos automáticos',
        'feature-6': 'Soporte técnico continuo',
        'service-btn': 'Solicitar Cotización',
        'important-note-title': 'Nota Importante:',
        'important-note-text': 'Las siguientes páginas son ejemplos visuales de sitios web dinámicos creados con fines demostrativos. No representan servicios oficiales ni proyectos reales, sino que muestran el tipo de trabajo que puedo realizar como parte de mis servicios.',
        'portfolio-title': 'Mis Proyectos',
        'portfolio-subtitle': 'Ejemplos de sitios web que he desarrollado para diferentes industrias',
        'project-1-title': 'E-commerce Moderno',
        'project-1-desc': 'Tienda online completa con carrito de compras, sistema de pagos y panel administrativo.',
        'project-2-title': 'Portal Corporativo',
        'project-2-desc': 'Landing page empresarial optimizada para conversión y captación de clientes.',
        'project-3-title': 'Portfolio Creativo',
        'project-3-desc': 'Portafolio interactivo con galería de imágenes y efectos visuales impactantes.',
        'view-project': 'Ver Proyecto',
        'view-project-2': 'Ver Proyecto',
        'view-project-3': 'Ver Proyecto',
        'contact-title': '¿Listo para tu Proyecto?',
        'contact-subtitle': 'Contacta conmigo para transformar tu idea en una realidad digital exitosa',
        'contact-fiverr': 'Ver en Fiverr',
        'contact-whatsapp': 'WhatsApp',
        'footer-rights': 'Todos los derechos reservados.',
        'footer-made': 'Hecho con',
        'footer-passion': 'y pasión por el desarrollo web',
        'whatsapp-message': 'Hola Luis! Me interesa desarrollar un sitio web profesional. He visto tu portafolio y me gustaria saber mas sobre tus servicios. Podrias enviarme una cotizacion con mas detalles? Gracias!'
    },
    en: {
        'nav-home': 'Home',
        'nav-about': 'About Me',
        'nav-services': 'Services',
        'nav-portfolio': 'Portfolio',
        'nav-contact': 'Contact',
        'hero-desc': 'Professional Web Developer & Creative Freelancer',
        'cta-text': 'See My Services',
        'about-title': 'About Me',
        'about-p1': "I'm a professional web developer specialized in creating modern, responsive and optimized websites. With experience in the latest technologies, I'm dedicated to transforming ideas into exceptional digital experiences.",
        'about-p2': "My approach focuses on quality, functionality and attractive design. Each project is an opportunity to create something unique that drives my clients' success.",
        'stat-projects': 'Projects Completed',
        'stat-experience': 'Years of Experience',
        'stat-satisfaction': 'Client Satisfaction',
        'services-title': 'Professional Web Development',
        'services-subtitle': 'I create websites that not only look incredible, but also work perfectly on all devices',
        'service-title': 'Complete Web Development',
        'service-description': 'From landing pages to complex web applications, I develop modern web solutions that take your business to the next level.',
        'feature-1': 'Responsive and mobile-first design',
        'feature-2': 'SEO and speed optimization',
        'feature-3': 'Payment system integration',
        'feature-4': 'Administration panel',
        'feature-5': 'Security and automatic backups',
        'feature-6': 'Continuous technical support',
        'service-btn': 'Request Quote',
        'important-note-title': 'Important Note:',
        'important-note-text': 'The following pages are visual examples of dynamic websites created for demonstration purposes. They do not represent official services or real projects, but rather showcase the type of work I can deliver as part of my services.',
        'portfolio-title': 'My Projects',
        'portfolio-subtitle': 'Examples of websites I have developed for different industries',
        'project-1-title': 'Modern E-commerce',
        'project-1-desc': 'Complete online store with shopping cart, payment system and administrative panel.',
        'project-2-title': 'Corporate Portal',
        'project-2-desc': 'Business landing page optimized for conversion and client acquisition.',
        'project-3-title': 'Creative Portfolio',
        'project-3-desc': 'Interactive portfolio with image gallery and impactful visual effects.',
        'view-project': 'View Project',
        'view-project-2': 'View Project',
        'view-project-3': 'View Project',
        'contact-title': 'Ready for Your Project?',
        'contact-subtitle': 'Contact me to transform your idea into a successful digital reality',
        'contact-fiverr': 'See on Fiverr',
        'contact-whatsapp': 'WhatsApp',
        'footer-rights': 'All rights reserved.',
        'footer-made': 'Made with',
        'footer-passion': 'and passion for web development',
        'whatsapp-message': 'Hello Luis! I am interested in developing a professional website. I have seen your portfolio and would like to know more about your services. Could you send me a quote with more details? Thank you!'
    }
};

let currentLang = 'es';

// Función mejorada para cambiar idioma
function setLanguage(lang) {
    currentLang = lang;
    // Actualizar todos los elementos con data-translate
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
    elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (translations[lang] && translations[lang][key]) {
            // Verificar si es un input o textarea
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translations[lang][key];
            } else {
                element.textContent = translations[lang][key];
            }
        }
    });
    // Actualizar botón de idioma
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.textContent = lang === 'es' ? 'EN' : 'ES';
    }
    // Actualizar enlace de WhatsApp
    updateWhatsAppLink(lang);
    // Guardar preferencia de idioma
    try {
        sessionStorage.setItem('preferredLanguage', lang);
    } catch(e) {
        // Si sessionStorage no está disponible, simplemente continuar
        console.log('SessionStorage not available');
    }
}

// Función para actualizar el enlace de WhatsApp
function updateWhatsAppLink(lang) {
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn && translations[lang] && translations[lang]['whatsapp-message']) {
        const message = translations[lang]['whatsapp-message'];
        const encodedMessage = encodeURIComponent(message);
        whatsappBtn.href = `https://wa.me/593979429949?text=${encodedMessage}`;
    }
}

// Función para obtener idioma preferido
function getPreferredLanguage() {
    try {
        return sessionStorage.getItem('preferredLanguage') || 'es';
    } catch(e) {
        return 'es';
    }
}

// Inicialización cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', function() {
    // Obtener idioma preferido y aplicarlo
    const preferredLang = getPreferredLanguage();
    setLanguage(preferredLang);

    // Event listener para el botón de cambio de idioma
    const langBtn = document.getElementById('lang-toggle');
    if (langBtn) {
        langBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const newLang = currentLang === 'es' ? 'en' : 'es';
            setLanguage(newLang);
        });
    }

    // Event listener para WhatsApp
    const whatsappBtn = document.getElementById('whatsapp-btn');
    if (whatsappBtn) {
        whatsappBtn.addEventListener('click', function(e) {
            e.preventDefault();
            const message = translations[currentLang]['whatsapp-message'];
            const encodedMessage = encodeURIComponent(message);
            window.open(`https://wa.me/593979429949?text=${encodedMessage}`, '_blank');
        });
    }

    // Mobile menu toggle
    const mobileMenuBtn = document.getElementById('mobile-menu-btn');
    const navMenu = document.getElementById('nav-menu');
    if (mobileMenuBtn && navMenu) {
        mobileMenuBtn.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            const icon = this.querySelector('i');
            if (navMenu.classList.contains('active')) {
                icon.className = 'fas fa-times';
            } else {
                icon.className = 'fas fa-bars';
            }
        });
        // Close mobile menu when clicking on a link
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (icon) {
                    icon.className = 'fas fa-bars';
                }
            });
        });
    }

    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerHeight = document.querySelector('.header')?.offsetHeight || 70;
                const targetPosition = target.offsetTop - headerHeight;
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
        observer.observe(el);
    });

    // Header scroll effect
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.header');
        if (header) {
            if (window.scrollY > 100) {
                header.style.background = 'rgba(15, 15, 35, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.3)';
            } else {
                header.style.background = 'rgba(15, 15, 35, 0.95)';
                header.style.boxShadow = 'none';
            }
        }
    });

    // Counter animation for stats
    function animateCounter(element, target) {
        let current = 0;
        const increment = target / 100;
        const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            element.textContent = Math.floor(current) + (target === 98 ? '%' : '+');
        }, 20);
    }
    // Activate counter animation when stats are visible
    const statsObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const numbers = entry.target.querySelectorAll('.stat-number');
                numbers.forEach((num, index) => {
                    const targets = [50, 3, 98];
                    animateCounter(num, targets[index]);
                });
                statsObserver.unobserve(entry.target);
            }
        });
    }, { threshold: 0.5 });
    const statsSection = document.querySelector('.stats');
    if (statsSection) {
        statsObserver.observe(statsSection);
    }
    // Parallax effect for hero section
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrolled * 0.5}px)`;
        }
    });
});

// Forzar recarga del favicon
function setFavicon(url) {
    var link = document.querySelector("link[rel~='icon']");
    if (!link) {
        link = document.createElement('link');
        link.rel = 'icon';
        document.getElementsByTagName('head')[0].appendChild(link);
    }
    link.href = url + '?v=' + new Date().getTime();
}
// Try to set favicon
try {
    setFavicon('./imagenes/logo.png');
} catch(e) {
    console.log('Favicon not found, using default');
}
