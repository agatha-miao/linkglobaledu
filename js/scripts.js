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
    localStorage.setItem("site_lang", lang);

    // 移除旧的高亮
    document.querySelectorAll(".dropdown-item").forEach(i => {
        i.classList.remove("active-lang");
    });

    // 给当前语言加高亮
    event.target.classList.add("active-lang");
}

// 刷新页面时保持选中语言高亮
document.addEventListener("DOMContentLoaded", () => {
    const saved = localStorage.getItem("site_lang");
    if (saved) {
        const item = document.querySelector(`.dropdown-item[onclick="setLang('${saved}')"]`);
        if (item) item.classList.add("active-lang");
    }
});
function setLang(lang) {
  // 存储用户选择（可以用 localStorage）
  localStorage.setItem('site_lang', lang);

  // 示例：你可以根据语言重新加载页面或替换内容
  // 如果你是单页替换内容的话，这里写对应逻辑。
  console.log('语言选择：', lang);

  // 以下是示例：选择后刷新（假设你有 index_zh.html, index_en.html）
  if (lang === 'zh') {
    window.location.href = '/index_zh.html';
  } else if (lang === 'en') {
    window.location.href = '/index_en.html';
  } else if (lang === 'ja') {
    window.location.href = '/index_ja.html';
  }
}

// 页面加载时，设置高亮或做其他逻辑
document.addEventListener('DOMContentLoaded', function() {
  const saved = localStorage.getItem('site_lang');
  if (saved) {
    // 可以根据保存的语言做标记
    // 例如给对应的 .dropdown-item 加上 class
  }
});
