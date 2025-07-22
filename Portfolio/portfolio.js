// Contact Form Script
let sections= document.querySelectorAll('section');
let navLinks= document.querySelectorAll('header nav ul li a');
 window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let inset=sec.offsetWidth-150;
        let width = sec.offsetWidth;
        if (width > inset) {
            sec.style.width = "100%";
        }
        if (width < inset) {
            sec.style.width = "90%";
        }
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + height){
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav ul li a[href*=' + id + ']').classList.add('active');
            });
        };
    });
    let header = document.querySelector("header");
    header.classList.toggle('sticky',window.scrollY>100);
 }
