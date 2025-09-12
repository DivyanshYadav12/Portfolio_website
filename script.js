document.addEventListener('DOMContentLoaded', function() {
    // Navigation functionality
    const navLinks = document.querySelectorAll('.nav-link');
    const sections = document.querySelectorAll('section');
    
    // Set first section as active on page load
    sections[0].classList.add('active');
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(link => link.classList.remove('active'));
            sections.forEach(section => section.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Show corresponding section
            const sectionId = this.getAttribute('data-section');
            document.getElementById(sectionId).classList.add('active');
            
            // Scroll to top
            window.scrollTo(0, 0);
        });
    });
    
    // Animate skill bars when skills section is activated
    const skillsSection = document.getElementById('skills');
    const skillBars = document.querySelectorAll('.skill-progress');
    
    // Function to animate skill bars
    function animateSkillBars() {
        skillBars.forEach(bar => {
            const width = bar.getAttribute('data-width');
            bar.style.width = width;
        });
    }
    
    // Use Intersection Observer to detect when skills section is in view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                animateSkillBars();
            }
        });
    }, { threshold: 0.5 });
    
    observer.observe(skillsSection);
    
    // Lightbox functionality for certificates
    const certificateCards = document.querySelectorAll('.certificate-card');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.querySelector('.close-btn');

    // Only add listeners if lightbox elements exist
    if (lightbox && lightboxImg && closeBtn) {
        certificateCards.forEach(card => {
            card.addEventListener('click', function() {
                const certificateSrc = this.getAttribute('data-certificate');
                if (certificateSrc) {
                    lightbox.classList.add('show');
                    lightboxImg.src = certificateSrc;
                    document.body.style.overflow = 'hidden';
                }
            });
        });

        // Close lightbox when close button is clicked
        closeBtn.addEventListener('click', function() {
            closeLightbox();
        });

                // Close lightbox when clicking outside the image
                lightbox.addEventListener('click', function(event) {
                    if (event.target === lightbox) {
                        closeLightbox();
                    }
                });

                // Close lightbox when Escape key is pressed
                document.addEventListener('keydown', function(event) {
                    if (event.key === 'Escape' && lightbox.classList.contains('show')) {
                        closeLightbox();
                    }
                });

                function closeLightbox() {
                    lightbox.classList.remove('show');
                    document.body.style.overflow = 'auto';
                }
            }
        });