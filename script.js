// Simple cart functionality (can be expanded)
document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle enhancement
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarNav = document.querySelector('#navbarNav');
    
    navbarToggler.addEventListener('click', function() {
        navbarNav.classList.toggle('show');
    });
    
    // Product page functionality (for men.html, women.html, sale.html)
    if (document.querySelector('.product-card')) {
        const productCards = document.querySelectorAll('.product-card');
        
        productCards.forEach(card => {
            card.addEventListener('click', function(e) {
                if (!e.target.classList.contains('btn')) {
                    // Navigate to product detail page (can be implemented later)
                    console.log('Navigate to product detail');
                }
            });
        });
    }
    
    // Newsletter form handling
    const newsletterForm = document.querySelector('footer form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const emailInput = this.querySelector('input[type="email"]');
            alert(`Thanks for subscribing with ${emailInput.value}!`);
            emailInput.value = '';
        });
    }
});