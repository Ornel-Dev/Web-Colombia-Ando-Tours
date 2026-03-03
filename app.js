
        // Lógica de Menú Móvil
        const menuBtn = document.getElementById('menuBtn');
        const closeMenu = document.getElementById('closeMenu');
        const mobileMenu = document.getElementById('mobileMenu');

        function toggleMenu() {
            mobileMenu.classList.toggle('hidden');
        }

        menuBtn.addEventListener('click', toggleMenu);
        closeMenu.addEventListener('click', toggleMenu);

        // Efecto scroll en Nav
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('py-2', 'shadow-md');
                nav.classList.remove('py-4');
            } else {
                nav.classList.remove('py-2', 'shadow-md');
                nav.classList.add('py-4');
            }
        });

        // Simulación de envío de formulario
        document.getElementById('contactForm').addEventListener('submit', (e) => {
            e.preventDefault();
            const successMsg = document.getElementById('formSuccess');
            const btn = e.target.querySelector('button');
            
            btn.innerHTML = '<i class="fas fa-circle-notch fa-spin"></i> Enviando...';
            btn.disabled = true;

            setTimeout(() => {
                successMsg.classList.remove('hidden');
                e.target.reset();
                btn.innerHTML = 'Enviar Solicitud';
                btn.disabled = false;
                
                setTimeout(() => {
                    successMsg.classList.add('hidden');
                }, 5000);
            }, 1500);
        });

        // Animación suave de aparición al hacer scroll
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.destination-card').forEach(card => {
            card.classList.add('transition', 'duration-700', 'opacity-0', 'translate-y-10');
            observer.observe(card);
        });