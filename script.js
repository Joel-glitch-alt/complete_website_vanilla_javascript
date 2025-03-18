// 🌟 Smooth Scroll for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function(event) {
    event.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetElement = document.getElementById(targetId);
    
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// 🎯 Button Click Alert
const ctaButton = document.getElementById('cta-button');
if (ctaButton) {
  ctaButton.addEventListener('click', () => {
    alert('Thanks for visiting! Scroll down to learn more about me.');
  });
}

// 📩 Form Submission Handling
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      contactForm.reset();
    } else {
      alert('Please fill out all fields.');
    }
  });
}
