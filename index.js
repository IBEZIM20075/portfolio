        // View My Work button
        document.getElementById('btn').addEventListener('click', function() {
            window.location.href = '#case';
        });
         
        function myfunction() {
            window.location.href = "#contact";
        }
        
        // Mobile menu toggle
        let btn = document.getElementById('toggle');
        let show = document.querySelector('.show');
        
        btn.addEventListener('click', function() {
            console.log('Menu button clicked');
            show.classList.toggle('active');
        });
        
        // Close mobile menu when clicking links
        document.querySelectorAll('.show a').forEach(link => {
            link.addEventListener('click', () => {
                show.classList.remove('active');
            });
        });
        
        // Smooth scrolling for all anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    if (show.classList.contains('active')) {
                        show.classList.remove('active');
                    }
                }
            });
        });
    