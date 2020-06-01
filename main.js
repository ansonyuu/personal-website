const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-list');
    const navLinks = document.querySelector('.nav-list li');

    burger.addEventListener('click', () => {

         //Toggle nav bar
        nav.classList.toggle('nav-active');

        //Animate links
        navLinks.forEach((link, index) => {
            if(link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 6 + 0.3}s`
            }
        });

        // Burger animation
        burger.classList.toggle('toggle');
    });
}


navSlide();