// Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
      event.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
  });
});

// Button Click Alert
document.getElementById('cta-button').addEventListener('click', () => {
  alert('Thanks for visiting! Scroll down to learn more about me.');
});

// Form Submission Handling
document.getElementById('contact-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById('contact-form').reset();
  } else {
      alert('Please fill out all fields.');
  }
});
