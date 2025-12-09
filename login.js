        document.addEventListener("DOMContentLoaded", function() {

            // ===== FLOATING PARTICLES =====
            function createParticles() {
                const container = document.getElementById('particles');
                for(let i=0; i<40; i++){
                    const p = document.createElement('div');
                    p.className = 'particle';
                    p.style.left = Math.random() * 100 + '%';
                    p.style.animationDelay = Math.random() * 15 + 's';
                    container.appendChild(p);
                }
            }
            createParticles();

            // ===== TOGGLE PASSWORD VISIBILITY =====
            const toggle = document.getElementById('toggle-password');
            const password = document.getElementById('password');
            toggle.addEventListener('click', () => {
                if(password.type === 'password'){
                    password.type = 'text';
                    toggle.textContent = '🙈';
                } else {
                    password.type = 'password';
                    toggle.textContent = '👁️';
                }
            });

            // ===== SIMPLE LOGIN =====
            const form = document.getElementById('login-form');
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                // أي username & password → تحويل مباشرة
                window.location.href = 'index.html';
            });

        });