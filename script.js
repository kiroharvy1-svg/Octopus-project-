document.addEventListener('DOMContentLoaded', () => {
    // 1. التنقل بين الأقسام بالترتيب الصحيح
    const buttons = document.querySelectorAll('.tab-btn');
    const sections = document.querySelectorAll('.section-content');

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            buttons.forEach(btn => btn.classList.remove('active'));
            sections.forEach(sec => sec.classList.remove('active'));

            button.classList.add('active');
            sections[index].classList.add('active');
        });
    });

    // 2. نظام وضع الضلام وحفظه بالـ LocalStorage
    const themeBtn = document.getElementById('theme-toggle');
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        if (themeBtn) themeBtn.textContent = 'غير للنور';
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                themeBtn.textContent = 'غير للنور';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                themeBtn.textContent = 'غير للاسود';
            }
        });
    }
});