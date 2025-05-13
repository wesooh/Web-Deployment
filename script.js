// Mobile Navigation
const burger = document.querySelector('.burger');
const navLinks = document.querySelector('.nav-links');

burger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    
    // Change burger icon
    const icon = burger.querySelector('i');
    if (navLinks.classList.contains('active')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');
const formMessage = document.getElementById('form-message');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input[type="email"]').value;
        
        // Simulate form submission
        formMessage.textContent = 'Thank you for subscribing!';
        formMessage.style.color = 'var(--success-color)';
        newsletterForm.reset();
        
        setTimeout(() => {
            formMessage.textContent = '';
        }, 3000);
    });
}

// Contact Form
const contactForm = document.getElementById('contact-form');
const contactStatus = document.getElementById('contact-status');

if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        // Get form values
        const name = contactForm.querySelector('#name').value;
        const email = contactForm.querySelector('#email').value;
        const subject = contactForm.querySelector('#subject').value;
        const message = contactForm.querySelector('#message').value;
        
        // Simulate form submission
        contactStatus.textContent = 'Thank you for your message! We will get back to you soon.';
        contactStatus.style.color = 'var(--success-color)';
        contactForm.reset();
        
        setTimeout(() => {
            contactStatus.textContent = '';
        }, 5000);
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// Add active class to current page in navigation
const currentPage = location.pathname.split('/').pop();
const navItems = document.querySelectorAll('.nav-links a');

navItems.forEach(item => {
    const itemHref = item.getAttribute('href');
    
    if (currentPage === itemHref) {
        item.classList.add('active');
    }
});