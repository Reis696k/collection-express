// script.js - Interações básicas para Collection Express
document.addEventListener('DOMContentLoaded', function() {
    // Efeito smooth scroll para links de navegação
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
            }
        });
    });
    
    // Efeito de carregamento com animações
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.step, .service-card, .tip');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.2;
            
            if (elementPosition < screenPosition) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Configura animações iniciais
    window.addEventListener('load', function() {
        const animatedElements = document.querySelectorAll('.step, .service-card, .tip');
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        });
        
        animateOnScroll();
    });
    
    // Ativa animações ao rolar
    window.addEventListener('scroll', animateOnScroll);
    
    // Botão de download do app - simulação
    const downloadButtons = document.querySelectorAll('.btn');
    downloadButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (this.textContent.includes('Baixe') || this.textContent.includes('Agendar')) {
                e.preventDefault();
                alert('Em breve disponível para download!\nEnquanto isso, continue explorando nosso site.');
            }
        });
    });
});