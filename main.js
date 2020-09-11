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

// // Making the home page elements change on scroll
// document.querySelectorAll('.scene').forEach((elem) => {
	
// 	const modifier = elem.getAttribute('data-modifier')
	
// 	basicScroll.create({
// 		elem: elem,
// 		from: 0,
// 		to: 1000,
// 		direct: true,
// 		props: {
// 			'--translateY': {
// 				from: '0',
// 				to: `${ 10 * modifier }px`
// 			}
// 		}
// 	}).start()
		
// })

//Tab functionality for gallery
function openTab(evt, tabName) {
    // Declare all variables
    let i, tabcontent, tablinks;
  
    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName("wm-tabcontent");

    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName("wm-tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
  }

  //Lazy load gallery photos
  const targets = document.querySelectorAll("img[data-lazy]");

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('Loading working');

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('data-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);