document.addEventListener('DOMContentLoaded', function() {
    // إضافة السنة الحالية في التذييل
    document.getElementById('current-year').textContent = new Date().getFullYear();
    
    // إضافة تأثير عند النقر على الروابط
    const socialLinks = document.querySelectorAll('.social-link');
    
    socialLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            // إضافة تأثير الضغط
            this.style.transform = 'scale(0.95)';
            
            // إعادة التأثير الأصلي بعد وقت قصير
            setTimeout(() => {
                this.style.transform = '';
            }, 150);
        });
    });
});

