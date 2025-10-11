'use strict';

document.addEventListener('DOMContentLoaded', () => {

    if (document.getElementById('particles-js')) {
        particlesJS('particles-js', {
            particles: {
                number: { value: 60, density: { enable: true, value_area: 800 } },
                color: { value: "#ffffff" },
                shape: { type: "circle" },
                opacity: { value: 0.4, random: true },
                size: { value: 2, random: true },
                line_linked: { enable: true, distance: 150, color: "#8A2387", opacity: 0.2, width: 1 },
                move: { enable: true, speed: 2, direction: "none", random: true, straight: false, out_mode: "out" }
            },
            interactivity: {
                detect_on: "canvas",
                events: { onhover: { enable: true, mode: "grab" }, onclick: { enable: true, mode: "push" }, resize: true },
                modes: { grab: { distance: 140, line_opacity: 0.5 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    }

    const revealElements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });
    revealElements.forEach(el => observer.observe(el));

    const subtitleElement = document.getElementById('subtitle');
    if (subtitleElement) {
        const texts = ["Full Stack Developer", "AI Enthusiast", "Modern Çözüm Üreticisi"];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;

        function type() {
            const currentText = texts[textIndex];
            let displayText = '';

            if (isDeleting) {
                displayText = currentText.substring(0, charIndex - 1);
                charIndex--;
            } else {
                displayText = currentText.substring(0, charIndex + 1);
                charIndex++;
            }
            
            subtitleElement.textContent = displayText;
            subtitleElement.style.borderRight = '2px solid var(--neon-orange)';


            let typeSpeed = isDeleting ? 75 : 150;

            if (!isDeleting && charIndex === currentText.length) {
                typeSpeed = 2000; 
                isDeleting = true;
                subtitleElement.style.borderRight = 'none';
            } else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                textIndex = (textIndex + 1) % texts.length;
                typeSpeed = 500; 
            }

            setTimeout(type, typeSpeed);
        }
        type();
    }

    const interactiveCards = document.querySelectorAll('.interactive-card');
    interactiveCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            const { width, height } = rect;

            const rotateX = (y / height - 0.5) * -15; 
            const rotateY = (x / width - 0.5) * 15;   

            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
        });

        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale(1)';
        });
    });

    const originalTitle = document.title;
    document.addEventListener('visibilitychange', () => {
        document.title = document.hidden ? 'Geri Dön! 👋' : originalTitle;
    });

    console.log("Portfolyo yüklendi. Tüm interaktif özellikler aktif.");
});
