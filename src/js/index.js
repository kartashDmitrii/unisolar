import hideList from "./components/hideList";
import NumberTimer from "./components/NumberTimer";
import popupFunc from "./components/popupFunc";


if (document.querySelector('.filters') && document.querySelector('.main-content')){
    if (window.screen.width > 767) {
        document.querySelector('.filters .filters-wrapper').style.minHeight = document.querySelector('.main-content').scrollHeight - 45 + 'px'
    }
    function closeFilter(e){
        if (!e.target.closest('.filters') || e.target.closest('.close')){
            document.querySelector('.filters').classList.remove('active')
            window.removeEventListener('mousedown', closeFilter)
        }
    }
    document.querySelector('.main-content .burger').addEventListener('click', function () {
        document.querySelector('.filters').classList.add('active')
        window.addEventListener('mousedown', closeFilter)
    });
}
console.log()
if (document.querySelector('[data-hide]')){
    document.querySelectorAll('[data-hide]').forEach( elem => {
        new hideList(elem)
    })
}

if (document.querySelector('section.top-block')){
    let swiper = new Swiper("section.top-block .slider", {
        pagination: {
            el: 'section.top-block .slides-count',
            type: 'fraction'
        },
         navigation: {
            nextEl: 'section.top-block .slider-buttons .next',
            prevEl: 'section.top-block .slider-buttons .prev'
         }
    });
}
if (document.querySelector('.short-about-company .numbers')){
    document.querySelectorAll('.short-about-company .numbers .num').forEach( elem => {
        new NumberTimer({
            elem: elem.querySelector("span"),
            delay: 1500
        });
    })
}

if (document.querySelector('[data-shadow]')){
    document.querySelectorAll('[data-shadow]').forEach( elem =>{
        let text = elem.querySelector('[data-shadow-text]');
        let btn = elem.querySelector('[data-shadow-btn]');
        if(text.scrollHeight <= 200){
            text.classList.add('no-shadow');
            btn.style.display = 'none'
        }
    })
}

document.querySelectorAll('[data-popup]').forEach( elem => {
    new popupFunc(elem, document.querySelector(`.${elem.dataset.popup}`));
});

if (document.querySelector('header .burger')){
    let headerMenu = document.querySelector('header nav');
    let headerPhone = document.querySelector('header .phone');
    let headerLanguage = document.querySelector('header .language');
    function closeMobileMenu(e){
        if (!e.target.closest('header nav') && !e.target.closest('header .phone') && !e.target.closest('header .language') || e.target.closest('header .close')){
            headerLanguage.classList.remove('active');
            headerMenu.classList.remove('active');
            headerPhone.classList.remove('active');
            window.removeEventListener('mousedown', closeMobileMenu)
        }
    }
    document.querySelector('header .burger').addEventListener('click', function () {
        headerLanguage.classList.add('active');
        headerMenu.classList.add('active');
        headerPhone.classList.add('active');
        window.addEventListener('mousedown', closeMobileMenu)
    })
}