const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
    link.addEventListener('click', e => {
        e.preventDefault();
        const href = link.getAttribute('href');
        const target = document.querySelector(href);
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});