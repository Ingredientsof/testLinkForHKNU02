document.addEventListener('DOMContentLoaded', function() {
    const backToTop = document.querySelector('#backToTop');
    
    if (backToTop) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 100) {
                backToTop.classList.add('show');
            } else {
                backToTop.classList.remove('show');
            }
        });
        
        backToTop.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    const hamBtn = document.querySelector('.hamBtn');
    const menu = document.querySelector('#menu');
    const menuBar = document.querySelector('.menuBar');
    const homeBtn = document.querySelector('#homeBtn');
    
    if (hamBtn && menu && menuBar) {
        hamBtn.addEventListener('click', function() {
            menu.classList.toggle('active');
            menuBar.classList.toggle('active');
            hamBtn.classList.toggle('active');
            if(homeBtn) homeBtn.classList.toggle('active');
        });
    }
});
