document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you shortly.');
    e.target.reset();
});
