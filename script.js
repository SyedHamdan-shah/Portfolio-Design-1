ScrollReveal({ 
    reset: true,
    distance:'60px',
    duration:2500,
    delay:400
      });
      ScrollReveal().reveal('.name,#clr,#sevenm', { delay: 100, origin: 'top' });
      ScrollReveal().reveal('.icons,.icons1,#fivem,form', { delay: 100, origin: 'bottom' });
      ScrollReveal().reveal('#four', { delay: 100, origin: 'right' });

      // typed.js
const typed = new Typed('#multiple-text', {
  strings: ['Frontend Developer','Youtuber','Backend Developer','UI/UX Designer'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay:1000,
  loop: true
});
const type = new Typed('.me', {
  strings: ['Me','Me'],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay:1000,
  loop: true
});

      // typed.js