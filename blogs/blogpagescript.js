// === Home Page Logic ===//
document.addEventListener('DOMContentLoaded', () => {
    // Functionality for the "Added to Favorites" button
    const favoriteBtn = document.getElementById('favorite-btn');
    const favoriteIcon = document.getElementById('favorite-icon');

    favoriteBtn.addEventListener('click', () => {
        if (favoriteIcon.classList.contains('fa-regular')) {
            favoriteIcon.classList.remove('fa-regular');
            favoriteIcon.classList.add('fa-solid');
            favoriteBtn.classList.add('bg-green-accent');
            favoriteBtn.classList.remove('bg-black', 'bg-opacity-50');
            favoriteIcon.classList.remove('green-accent');
        } else {
            favoriteIcon.classList.remove('fa-solid');
            favoriteIcon.classList.add('fa-regular');
            favoriteBtn.classList.remove('bg-green-accent');
            favoriteBtn.classList.add('bg-black', 'bg-opacity-50');
            favoriteIcon.classList.add('green-accent');
        }
    });

    // Smooth scrolling for "In this article" links
    document.querySelectorAll('.toc-container a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the home page
    if (document.querySelector('.home-page-wrapper')) {
        // Mobile Navigation Toggle
        const mobileNavToggle = document.getElementById('mobileNavToggle');
        const mobileNavOverlay = document.getElementById('mobileNavOverlay');
        const closeMobileNav = document.getElementById('closeMobileNav');
        const mobileLoginIcon = document.getElementById('mobileLoginIcon');
        
        if (mobileNavToggle && mobileNavOverlay) {
            mobileNavToggle.addEventListener('click', function() {
                mobileNavOverlay.style.width = '100%';
            });
        }
        
        if (closeMobileNav) {
            closeMobileNav.addEventListener('click', function() {
                mobileNavOverlay.style.width = '0';
            });
        }
        
        // Desktop Login Button
        const loginButton = document.getElementById('loginButton');
        if (loginButton) {
            loginButton.addEventListener('click', function() {
                window.location.href = 'C:\\Users\\AL_YOUSSEF\\Desktop\\Hala 2\\Entry\\login.html';
            });
        }

         // Header background change on scroll
        window.addEventListener('scroll', function() {
            const header = document.querySelector('header');
            if (header) {
                if (window.scrollY > 50) {
                    header.style.backgroundColor = 'rgba(13, 13, 13, 0.9)';
                } else {
                    header.style.backgroundColor = 'transparent';
                }
            }
        });
    }   
});
