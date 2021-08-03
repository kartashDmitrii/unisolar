export  default class NumberTimer {
    constructor(object) {
        this.elem = object.elem;
        this.delay = typeof object.delay === "undefined" ?
                        1000 :
                        object.delay;
        this.max = typeof object.max === "undefined" ?
                    parseInt(this.elem.innerText) :
                    object.max;
        this.min = typeof object.min === "undefined" ?
                    0 :
                    object.max;
        this.type = typeof object.type === "undefined" ?
                        'default' :
                        object.type;
        switch (this.type) {
            case "ease-out":
                this.bezier = [0,0,0.58,1];
                break;
            case "default":
                this.bezier = [0];
                break;
        }
        this.elem.innerText = 0;
        this.iteration = 0;
        this.step = Math.round(this.delay / (this.max - this.min));
        this.currBezier = Math.floor(this.iteration / ((this.max - this.min) / this.bezier.length ));
        this.offsetElem = this.offset(this.elem);
        this.startAnimationFunc = this.startAnimation.bind(this);
        window.addEventListener('scroll', this.startAnimationFunc);
        this.start = false;
        let interval = setInterval( () => {
            if (this.start){
                this.step = Math.round(this.delay / (this.max - this.min));
                this.currBezier = Math.floor(this.iteration / ((this.max - this.min) / this.bezier.length ));
                if (this.iteration < this.max - 1){
                    this.iteration++;
                    this.elem.innerText = this.iteration;
                } else {
                    this.iteration++;
                    this.elem.innerText = this.iteration;
                    clearInterval(interval)
                }
            }
        }, this.step * (this.bezier[this.currBezier] + 1) );
    }
    offset(el){
        let rect = el.getBoundingClientRect(),
            scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
            scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
    }
    startAnimation(){
        if (window.scrollY + (window.screen.height / 2) >= this.offsetElem.top){
            this.start = true;
            window.removeEventListener('scroll', this.startAnimationFunc)
        }
    }
}