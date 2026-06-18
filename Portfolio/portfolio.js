// Contact Form Script
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-list li a');
    const header = document.querySelector("navbar");

    window.onscroll = () => {
        let top = window.scrollY;

        // Sticky Navbar Toggle
        if (header) {
            header.classList.toggle('sticky', top > 50);
        }

        // Active Navigation Highlight Loop
        sections.forEach(sec => {
            let offset = sec.offsetTop - 160;
            let height = sec.offsetHeight;
            let id = sec.getAttribute('id');

            if (top >= offset && top < offset + height) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                });
                
                const activeTarget = document.querySelector(`.nav-list li a[href*="${id}"]`);
                if (activeTarget) {
                    activeTarget.classList.add('active');
                }
            }
        });
    };
});
