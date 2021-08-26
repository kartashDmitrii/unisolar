import hideList from "./components/hideList";
import NumberTimer from "./components/NumberTimer";
import popupFunc from "./components/popupFunc";

/*  fix */

if (document.querySelector('header')){
    let header = document.querySelector('header');
    let isBlack = header.classList.contains('black')
    let scrollNumber = 70;
    let colorSwitch = true;
    document.addEventListener('scroll', function () {
        header.classList[window.scrollY > scrollNumber ? 'add' : 'remove']('scroll');
        document.body.classList[window.scrollY > scrollNumber ? 'add' : 'remove']('scroll');
        document.querySelector('.header-menu-popup').classList[window.scrollY > scrollNumber ? 'add' : 'remove']('scroll');
        if(!isBlack){
            header.classList[window.scrollY > scrollNumber ? 'add' : 'remove']('black');
            if (window.scrollY > scrollNumber){
                if (colorSwitch) {
                    colorSwitch = false
                    header.querySelectorAll('.burger img').forEach(img => img.classList.toggle('show'))
                    header.querySelectorAll('.logo img').forEach(img => img.classList.toggle('show'))
                }
            }else {
                if (!colorSwitch) {
                    colorSwitch = true
                    header.querySelectorAll('.burger img').forEach(img => img.classList.toggle('show'))
                    header.querySelectorAll('.logo img').forEach(img => img.classList.toggle('show'))
                }
            }
        }
        if (window.scrollY > scrollNumber){
            document.body.style.paddingTop = isBlack ? '137px' : '97px'
        } else {
            document.body.style.paddingTop = '0px'
        }
    })
}

/*  fix */
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

if (document.querySelector('section.questions-grid')){
    let section = document.querySelector('section.questions-grid');
    let grid = section.querySelector('.grid');
    for (let i = 0; i < 2; i++){
        let block = document.createElement('div');
        block.classList.add('block');
        grid.appendChild(block);
    }
    section.querySelectorAll('.elem').forEach( (elem, i) => {
        [...grid.querySelectorAll('.block')][i % 2].appendChild(elem);
        if (section.classList.contains('questions')) {
            new hideList(elem)
        }
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

if (document.querySelector('section.project-images')){
    let allImagesSlider = new Swiper('section.project-images .all-images', {
        freeMode: true,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            0: {
                slidesPerView: 3,
                slidesPerScroll: 3,
                spaceBetween: 10,
            },
            768: {
                slidesPerView: 3.5,
                slidesPerScroll: 3,
                spaceBetween: 10,
            },
            1001: {
                spaceBetween: 20,
                slidesPerView: 5,
                slidesPerScroll: 5,
            },
            1366: {
                spaceBetween: 40,
                slidesPerView: 5.75,
                slidesPerScroll: 5,
            }
        }
    });
    let mainImageSlider = new Swiper('section.project-images .main-image', {
        spaceBetween: 10,
        navigation: {
            nextEl: 'section.project-images .main-image .next',
            prevEl: 'section.project-images .main-image .prev',
        },
        thumbs: {
            swiper: allImagesSlider
        }
    })
}
if (document.querySelector('section.year-slider')){
    let yearsSlider = new Swiper('section.year-slider .years .year', {
        allowTouchMove: false,
        navigation: {
            nextEl: "section.year-slider .navigation .next",
            prevEl: "section.year-slider .navigation .prev",
        }
    });
    let dataSlider = new Swiper('section.year-slider .data-slider', {
        navigation: {
            nextEl: 'section.year-slider .navigation .next',
            prevEl: 'section.year-slider .navigation .prev',
        },
        on: {
            activeIndexChange(){
                yearsSlider.slideTo(dataSlider.activeIndex)
            }
        }
    })
}
if (document.querySelector('section.academy-reviews')){
    let slider = new Swiper('section.academy-reviews .slider', {
        navigation: {
            nextEl: "section.academy-reviews .navigation .next",
            prevEl: "section.academy-reviews .navigation .prev",
        }
    })
}
if (document.querySelector('section.who-need-b2b')){
    let tabBtns = document.querySelectorAll('section.who-need-b2b .tab-buttons [data-tab]');
    let tabs = document.querySelectorAll('section.who-need-b2b .tabs [data-tab]');
    tabBtns.forEach( (elem) => {
        elem.addEventListener('click', function () {
            tabBtns.forEach( btn => btn.classList.remove('active'));
            tabs.forEach( tab => tab.classList.remove('active'));

            elem.classList.add('active');
            [...tabs].find( tab => tab.dataset.tab === elem.dataset.tab).classList.add('active')
        })
    })
}
if (document.querySelector('section.b2b-realization')) {
    let slider = new Swiper('section.b2b-realization .slider',{
        pagination: {
            el: 'section.b2b-realization .slider-pagination',
            clickable: true,
            renderBullet(index, className){
                return `<span class="${className}">${index + 1}</span>`
            }
        },
        navigation: {
            nextEl: "section.b2b-realization .slider-navigation .next",
            prevEl: "section.b2b-realization .slider-navigation .prev",
        }
    })
}