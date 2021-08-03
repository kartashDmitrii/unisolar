export default class popupFunc {
    constructor(button,popup,wrapper = true) {
        this.button = button;
        this.popup = popup;
        this.wrapper = wrapper;
        this.openPopupFunc = this.privateOpenPopup.bind(this);
        this.closePopupFunc = this.privateClosePopup.bind(this);
        if(this.button.dataset.stopEvent === undefined) {
            if (Array.isArray(this.button)) {
                this.button.forEach(elem => {
                    elem.addEventListener('click', this.openPopupFunc);
                })
            } else {
                this.button.addEventListener('click', this.openPopupFunc);
            }
        }
        if (Array.isArray(this.popup)){
            this.popup.forEach( elem => {
                elem.querySelectorAll('.close').forEach(elem => elem.addEventListener('click', this.closePopupFunc));
            });
        } else {
            this.popup.querySelectorAll('.close').forEach(elem => elem.addEventListener('click', this.closePopupFunc));
        }
    }
    privateOpenPopup(event){
        event.preventDefault();
        this.openPopup();
    }
    privateClosePopup(event){
        if (!event.target.classList.contains('close')){
            event.stopPropagation();
        } else {
            if (Array.isArray(this.popup)){
                this.popup.forEach( elem => {
                    elem.classList.remove('active');
                    if (elem.parentNode.classList.contains('wrapper') && this.wrapper) {
                        elem.parentNode.classList.remove('active');
                    }
                    if (window.screen.width < 768) {
                        document.body.classList.remove('hidden')
                    }
                    if (document.querySelector('.popup-wrapper') && this.wrapper) {
                        document.querySelector('.popup-wrapper').classList.remove('active');
                    }
                })
            } else {
                this.popup.classList.remove('active');
                if (this.popup.parentNode.classList.contains('wrapper') && this.wrapper) {
                    this.popup.parentNode.classList.remove('active');
                }
                if (window.screen.width < 768) {
                    document.body.classList.remove('hidden')
                }
                if (document.querySelector('.popup-wrapper') && this.wrapper) {
                    document.querySelector('.popup-wrapper').classList.remove('active');
                }
            }
            window.removeEventListener('mousedown', this.closePopupFunc);
        }
    }
    openPopup(){
        document.querySelectorAll('.popup-wrapper>div').forEach( elem => {
            elem.classList.remove('active')
        });
        document.querySelectorAll('.popup').forEach( elem => {
            elem.classList.remove('active')
        });
        if (Array.isArray(this.popup)){
            this.popup.forEach( elem => {
                elem.classList.add('active');
                if (elem.parentNode.classList.contains('wrapper') && this.wrapper) {
                    elem.parentNode.classList.add('active');
                }
                if (window.screen.width < 768) {
                    document.body.classList.add('hidden')
                }
            });
            if (document.querySelector('.popup-wrapper') && this.wrapper) {
                document.querySelector('.popup-wrapper').classList.add('active');
            }
        } else {
            this.popup.classList.add('active');
            if (this.popup.parentNode.classList.contains('wrapper') && this.wrapper) {
                this.popup.parentNode.classList.add('active');
            }
            if (window.screen.width < 768) {
                document.body.classList.add('hidden')
            }
            if (document.querySelector('.popup-wrapper') && this.wrapper) {
                document.querySelector('.popup-wrapper').classList.add('active');
            }
        }
        window.addEventListener('mousedown', this.closePopupFunc);
    }
}