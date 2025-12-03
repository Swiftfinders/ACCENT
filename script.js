/**
 * ACCENT - Premium Website JavaScript
 * ELEVATE THE ORDINARY
 *
 * Features:
 * - Smooth scrolling navigation
 * - Portfolio filtering system
 * - Mobile menu toggle
 * - Scroll animations
 * - Form handling
 * - Sticky navigation
 */

// ============================================
// DOM Elements
// ============================================

const navbar = document.getElementById('navbar');
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');
const portfolioGrid = document.getElementById('portfolioGrid');
const filterButtons = document.querySelectorAll('.filter-btn');
const scrollToTopBtn = document.getElementById('scrollToTop');
const quoteForm = document.getElementById('quoteForm');
const formSuccess = document.getElementById('formSuccess');

// ============================================
// Sticky Navigation on Scroll
// ============================================

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Scroll to top button visibility
    if (window.scrollY > 500) {
        scrollToTopBtn.classList.add('visible');
    } else {
        scrollToTopBtn.classList.remove('visible');
    }

    // Scroll animations
    animateOnScroll();
});

// ============================================
// Mobile Menu Toggle
// ============================================

navToggle.addEventListener('click', () => {
    navToggle.classList.toggle('active');
    navMenu.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
        navToggle.classList.remove('active');
        navMenu.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// ============================================
// Smooth Scrolling for Navigation Links
// ============================================

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 80;

            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });

            // Update active link
            navLinks.forEach(navLink => navLink.classList.remove('active'));
            link.classList.add('active');
        }
    });
});

// ============================================
// Active Navigation Link on Scroll
// ============================================

const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;

    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// ============================================
// Portfolio Filtering System
// ============================================

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        const filterValue = button.getAttribute('data-filter');
        const portfolioItems = document.querySelectorAll('.portfolio-item');

        portfolioItems.forEach((item, index) => {
            // Hide all items first
            item.classList.add('hide');

            setTimeout(() => {
                if (filterValue === 'all') {
                    // Show all items
                    item.classList.remove('hide');
                    animateItem(item, index);
                } else {
                    // Show items matching the filter
                    const categories = item.getAttribute('data-category');
                    if (categories.includes(filterValue)) {
                        item.classList.remove('hide');
                        animateItem(item, index);
                    }
                }
            }, 50);
        });
    });
});

// Animate portfolio items when filtering
function animateItem(item, index) {
    item.style.opacity = '0';
    item.style.transform = 'scale(0.8)';

    setTimeout(() => {
        item.style.transition = 'all 0.4s ease';
        item.style.opacity = '1';
        item.style.transform = 'scale(1)';
    }, index * 50);
}

// ============================================
// Scroll to Top Button
// ============================================

scrollToTopBtn.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ============================================
// Form Handling
// ============================================

quoteForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(quoteForm);
    const submitButton = quoteForm.querySelector('.btn-submit');
    const originalButtonText = submitButton.innerHTML;

    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = '<span>Submitting...</span><i class="fas fa-spinner fa-spin"></i>';

    try {
        // Submit to Netlify Forms
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        });

        if (response.ok) {
            // Show success message
            quoteForm.style.display = 'none';
            formSuccess.classList.add('show');

            // Reset form
            quoteForm.reset();

            // Optional: Hide success message and show form again after 10 seconds
            setTimeout(() => {
                formSuccess.classList.remove('show');
                quoteForm.style.display = 'flex';
                submitButton.disabled = false;
                submitButton.innerHTML = originalButtonText;
            }, 10000);
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Sorry, there was an error submitting your form. Please try again or contact us directly.');
        submitButton.disabled = false;
        submitButton.innerHTML = originalButtonText;
    }
});

// ============================================
// Input Field Animations
// ============================================

const formInputs = document.querySelectorAll('.form-group input, .form-group select, .form-group textarea');

formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
        if (!this.value) {
            this.parentElement.classList.remove('focused');
        }
    });
});

// ============================================
// Scroll Animations
// ============================================

function animateOnScroll() {
    const elements = document.querySelectorAll('.service-card, .why-card, .portfolio-item, .testimonial-card');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initialize scroll animations
window.addEventListener('load', () => {
    const elements = document.querySelectorAll('.service-card, .why-card, .portfolio-item, .testimonial-card');

    elements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
    });

    animateOnScroll();
});

// ============================================
// Parallax Effect for Hero Section (Optional)
// ============================================

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroBackground = document.querySelector('.hero-background');

    if (heroBackground && scrolled < window.innerHeight) {
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// ============================================
// Image Lazy Loading Enhancement
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

// ============================================
// Dynamic Year in Footer
// ============================================

const currentYear = new Date().getFullYear();
const footerText = document.querySelector('.footer-bottom p');
if (footerText) {
    footerText.innerHTML = footerText.innerHTML.replace('2024', currentYear);
}

// ============================================
// Portfolio Item Click for Full View (Optional Enhancement)
// ============================================

const portfolioItems = document.querySelectorAll('.portfolio-item');

portfolioItems.forEach(item => {
    item.addEventListener('click', function() {
        const img = this.querySelector('img');
        const title = this.querySelector('.portfolio-info h3').textContent;
        const description = this.querySelector('.portfolio-info p').textContent;

        // You can implement a lightbox/modal here
        console.log('Portfolio item clicked:', { title, description, img: img.src });
        // Future enhancement: Open modal with full-size image
    });
});

// ============================================
// Smooth Reveal Animations
// ============================================

const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('scroll-animate', 'active');
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.addEventListener('DOMContentLoaded', () => {
    const animateElements = document.querySelectorAll('.section-header, .about-text, .about-image');
    animateElements.forEach(el => {
        el.classList.add('scroll-animate');
        observer.observe(el);
    });
});

// ============================================
// Prevent Form Spam with Simple Rate Limiting
// ============================================

let formSubmissionCount = 0;
let lastSubmissionTime = 0;

function canSubmitForm() {
    const now = Date.now();
    const timeSinceLastSubmission = now - lastSubmissionTime;

    // Allow max 3 submissions per hour
    if (formSubmissionCount >= 3 && timeSinceLastSubmission < 3600000) {
        alert('Too many submission attempts. Please try again later.');
        return false;
    }

    // Reset counter if it's been more than an hour
    if (timeSinceLastSubmission > 3600000) {
        formSubmissionCount = 0;
    }

    formSubmissionCount++;
    lastSubmissionTime = now;
    return true;
}

// Add to form submit handler
const originalFormSubmit = quoteForm.onsubmit;
quoteForm.onsubmit = function(e) {
    if (!canSubmitForm()) {
        e.preventDefault();
        return false;
    }
    return originalFormSubmit ? originalFormSubmit.call(this, e) : true;
};

// ============================================
// Accessibility Enhancements
// ============================================

// Keyboard navigation for portfolio filters
filterButtons.forEach((button, index) => {
    button.addEventListener('keydown', (e) => {
        let targetButton = null;

        switch(e.key) {
            case 'ArrowRight':
                targetButton = filterButtons[index + 1] || filterButtons[0];
                break;
            case 'ArrowLeft':
                targetButton = filterButtons[index - 1] || filterButtons[filterButtons.length - 1];
                break;
        }

        if (targetButton) {
            e.preventDefault();
            targetButton.focus();
            targetButton.click();
        }
    });
});

// ============================================
// Performance Optimization
// ============================================

// Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll-heavy functions
const debouncedScrollHandler = debounce(() => {
    animateOnScroll();
}, 50);

window.addEventListener('scroll', debouncedScrollHandler);

// ============================================
// Console Welcome Message
// ============================================

console.log('%c ACCENT ', 'background: #d4af37; color: #0f0f0f; font-size: 24px; font-weight: bold; padding: 10px;');
console.log('%c ELEVATE THE ORDINARY ', 'background: #0f0f0f; color: #d4af37; font-size: 14px; padding: 5px;');
console.log('Premium accent wall installation services in Ontario.');
console.log('Website built with precision and luxury in mind.');

// ============================================
// Initialize Everything on Load
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('ACCENT website initialized successfully.');

    // Set first nav link as active by default
    if (navLinks.length > 0) {
        navLinks[0].classList.add('active');
    }

    // Trigger initial animations
    animateOnScroll();
});
