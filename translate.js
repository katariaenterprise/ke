function setLanguage(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => btn.classList.remove('active'));
    if (event && event.target) event.target.classList.add('active');
    
    applyTranslation(lang);
    
    const dropdown = document.querySelector('.lang-dropdown select');
    if (dropdown) dropdown.value = lang;
    
    localStorage.setItem('language', lang);
}

function setLanguageDropdown(lang) {
    applyTranslation(lang);
    
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.onclick.toString().includes(`'${lang}'`)) {
            btn.classList.add('active');
        }
    });
    
    localStorage.setItem('language', lang);
}

function applyTranslation(lang) {
    document.querySelectorAll('[data-en]').forEach(el => {
        const translation = el.getAttribute('data-' + lang);
        if (translation) {
            if (el.tagName === 'SPAN') {
                el.innerHTML = translation;
            } else if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                el.placeholder = translation;
            } else {
                el.textContent = translation;
            }
        }
    });
}

window.onload = function() {
    const savedLang = localStorage.getItem('language') || 'en';
    
    const dropdown = document.querySelector('.lang-dropdown select');
    if (dropdown) dropdown.value = savedLang;
    
    if (savedLang !== 'en') {
        applyTranslation(savedLang);
        
        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.remove('active');
            if (btn.onclick.toString().includes(`'${savedLang}'`)) {
                btn.classList.add('active');
            }
        });
    }
};
