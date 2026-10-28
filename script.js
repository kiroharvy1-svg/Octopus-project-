document.addEventListener('DOMContentLoaded', () => {
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

    const themeBtn = document.getElementById('theme-toggle');
    
    if (localStorage.getItem('darkMode') === 'enabled') {
        document.body.classList.add('dark-mode');
        if (themeBtn) {
            themeBtn.textContent = document.documentElement.getAttribute('lang') === 'ar' ? 'للنور' : '☀️ Light Mode';
        }
    }

    if (themeBtn) {
        themeBtn.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            const isAr = document.documentElement.getAttribute('lang') === 'ar';
            
            if (document.body.classList.contains('dark-mode')) {
                localStorage.setItem('darkMode', 'enabled');
                themeBtn.textContent = isAr ? 'للنور' : '☀️ Light Mode';
            } else {
                localStorage.setItem('darkMode', 'disabled');
                themeBtn.textContent = isAr ? 'للضلمه' : '🌙 Dark Mode';
            }
        });
    }

    const translateBtn = document.getElementById('translate-btn');
    let isArabic = false;

    translateBtn.addEventListener('click', () => {
        isArabic = !isArabic;
        const translatableElements = document.querySelectorAll('[data-ar]');

        translatableElements.forEach(el => {
            const currentText = el.innerHTML;
            const targetText = el.getAttribute('data-ar');

            el.setAttribute('data-ar', currentText);
            el.innerHTML = targetText;
        });

        if (isArabic) {
            document.documentElement.setAttribute('dir', 'rtl');
            document.documentElement.setAttribute('lang', 'ar');
            translateBtn.textContent = '🌐 English';
            if (themeBtn) {
                themeBtn.textContent = document.body.classList.contains('dark-mode') ? 'للنور' : 'للضلمه';
            }
        } else {
            document.documentElement.setAttribute('dir', 'ltr');
            document.documentElement.setAttribute('lang', 'en');
            translateBtn.textContent = '🌐 عربي';
            if (themeBtn) {
                themeBtn.textContent = document.body.classList.contains('dark-mode') ? '☀️ Light Mode' : '🌙 Dark Mode';
            }
        }
    });
});