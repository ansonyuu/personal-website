// Making the nav bar go away and come back on mobile
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

// Making the home page elements change on scroll
document.querySelectorAll('.scene').forEach((elem) => {
	
	const modifier = elem.getAttribute('data-modifier')
	
	basicScroll.create({
		elem: elem,
		from: 0,
		to: 1000,
		direct: true,
		props: {
			'--translateY': {
				from: '0',
				to: `${ 10 * modifier }px`
			}
		}
	}).start()
		
})