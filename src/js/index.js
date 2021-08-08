import hideList from "./components/hideList";
import NumberTimer from "./components/NumberTimer";
import popupFunc from "./components/popupFunc";


if (document.querySelector('section.main-slider')){
    let allSlide = document.querySelector('section.main-slider .slide-number .all');
    allSlide.innerText = document.querySelectorAll('section.main-slider .slide').length;

    let swiper = new Swiper('section.main-slider .slider', {
        loop: true,
        pagination: {
            el: "section.main-slider .user-menu .dots",
            clickable: true,
            renderBullet: function (index, className) {
                return `<li class="${className}"><span></span></li>`
            }
        },
        breakpoints: {
            0: {
              direction: 'horizontal'
            },
            768: {
                direction: 'vertical'
            }
        },
        on: {
            init: function (swiper) {
                let currentSlide = document.querySelector('section.main-slider .slide-number .current');
                currentSlide.innerText = swiper.realIndex + 1;
            }
        }
    });
    swiper.on('slideChange', function (swiper) {
        let currentSlide = document.querySelector('section.main-slider .slide-number .current');
        currentSlide.innerText = swiper.realIndex + 1;
    });

    let goDownBtn = document.querySelector('section.main-slider .go-down');
    goDownBtn.addEventListener('click', function (e) {
        e.preventDefault();
        window.scrollTo(0,document.body.scrollHeight);
    })
}
if (document.querySelector('section.certificates-slider')){
    let swiper = new Swiper('section.certificates-slider .slider', {
        spaceBetween: 60,
        navigation: {
            nextEl: "section.certificates-slider .navigation .next",
            prevEl: "section.certificates-slider .navigation .prev",
        },
        breakpoints: {
            0: {
                slidesPerView: 1
            },
            681: {
                slidesPerView: 2
            }
        }
    });
}

if (document.querySelector('section.main-video')){
    let video = document.querySelector('section.main-video video');
    let preview = document.querySelector('section.main-video .preview');

    preview.addEventListener('click', function () {
        preview.classList.add('hide');
        video.play()
    });
    video.addEventListener('click', function () {
        preview.classList.remove('hide');
        video.pause()
    })
}

if (document.querySelector('section.questions')){
    let section = document.querySelector('section.questions');
    let grid = section.querySelector('.grid');
    for (let i = 0; i < 2; i++){
        let block = document.createElement('div');
        block.classList.add('block');
        grid.appendChild(block);
    }
    section.querySelectorAll('.elem').forEach( (elem, i) => {
        [...grid.querySelectorAll('.block')][i % 2].appendChild(elem);
        new hideList(elem)
    })
}
if (document.querySelector('section.partners')){
    let swiper = new Swiper('section.partners .slider', {
        breakpoints: {
            0: {
                slidesPerView: 1.5,
            },
            421: {
                slidesPerView: 2.5,
                spaceBetween: 10
            },
            768: {
                slidesPerView: 3.5
            },
            1001: {
                slidesPerView: 4.5
            },
            1366: {
                slidesPerView: 5.5
            },
            1566: {
                slidesPerView: 5.5,
                spaceBetween: 60,
            }
        }
    });
}
if (document.querySelector('section.seo-text')){
    let textWrapper = document.querySelector('section.seo-text .text-wrapper');
    let text = document.querySelector('section.seo-text .text');
    if (window.screen.width > 1024){
        if (text.scrollHeight <= 175) {
            textWrapper.classList.add('no-scroll')
        }
    } else if (window.screen.width > 681){
        if (text.scrollHeight <= 250) {
            textWrapper.classList.add('no-scroll')
        }
    } else {
        if (text.scrollHeight <= 320) {
            textWrapper.classList.add('no-scroll')
        }
    }
    text.addEventListener('scroll', function () {
        let currPos = text.scrollHeight - text.offsetHeight - text.scrollTop;
        textWrapper.classList[currPos < 20 ? 'add' : 'remove']('no-fade')
    })
}
if (document.querySelector('[data-popup]')){

    document.querySelectorAll('[data-popup]').forEach( elem =>{
        new popupFunc(elem, document.querySelector(`.popup.${elem.dataset.popup}`))
    })
}