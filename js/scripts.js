/*!
* Start Bootstrap - Creative v7.0.7 (https://startbootstrap.com/theme/creative)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            rootMargin: '0px 0px -40%',
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

    // Activate SimpleLightbox plugin for portfolio items
    new SimpleLightbox({
        elements: '#portfolio a.portfolio-box'
    });

});
function setLang(lang) {
    localStorage.setItem('site_lang', lang);

    const current = window.location.pathname;
    const isStudyPage = current.includes('study');

    const jobMap = {
        zh: '/index.html',
        en: '/index_en.html',
        ja: '/index_jp.html',
    };

    const studyMap = {
        zh: '/study.html',
        en: '/study_en.html',
        ja: '/study_jp.html',
    };

    const target = isStudyPage ? studyMap[lang] : jobMap[lang];
    if (target) {
        window.location.href = target;
    }
}

// 刷新页面时保持选中语言高亮
document.addEventListener('DOMContentLoaded', () => {
    const saved = localStorage.getItem('site_lang');
    if (!saved) return;
    const langItem = document.querySelector(`.dropdown-item[data-lang="${saved}"]`);
    if (langItem) {
        langItem.classList.add('active-lang');
    }
});
