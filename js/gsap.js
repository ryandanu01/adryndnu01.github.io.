gsap.to('.display-4', { duration: 3.5, delay: 3, text: 'Ade Ryandanu' });
gsap.to('.lead', { duration: 4, delay: 3.5, text: 'College student | Gamers' });
gsap.from('.navbar-brand', { duration: 5, delay: 4.5, text: '' });
gsap.registerPlugin(TextPlugin);
gsap.from('.jumbotron img', { duration: 3, x: -500, opacity: 0, scale: 0.5, ease: 'rough', delay: 1 });
gsap.from('.navbar', { duration: 2, y: -300, opacity: 0, ease: 'bounce' });
