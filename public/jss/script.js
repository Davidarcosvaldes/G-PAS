//Update footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        const target = document.querySelector(this.getAttribute('href'));
        const navbarHeight = document.querySelector('.navbar').offsetHeight;
        
        window.scrollTo({
            top: target.offsetTop - navbarHeight,
            behavior: 'smooth'
        });
    });
});

// Close mobile menu when clicking a link
const navLinks = document.querySelectorAll('.nav-link');
const menuToggle = document.querySelector('.navbar-toggler');
const navbarCollapse = document.querySelector('.navbar-collapse');

navLinks.forEach((link) => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 992) { // Bootstrap's lg breakpoint
            navbarCollapse.classList.remove('show');
        }
    });
});