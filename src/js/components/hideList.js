export default class hideList{
    constructor(listBlock) {
        this.listBlock = listBlock;
        this.list = this.listBlock.querySelector('[data-block]');
        this.listBlock.querySelector('[data-btn]').addEventListener('click', ()=>{this.showBlock()})
        this.closeBlockFunc = this.closeBlock.bind(this)
        if (this.listBlock.querySelector('[data-btn]').classList.contains('active')) {
            this.list.style.height = `${this.list.scrollHeight}px`;
            this.list.classList.add('active')
        }
        this.minHeight = parseInt(window.getComputedStyle(this.list).getPropertyValue('min-height'));
        this.windowEvent = this.listBlock.classList.contains('hide-window-event');
    }
    showBlock(){
        let blockHeight = parseInt(window.getComputedStyle(this.list).getPropertyValue('height'));
        if (blockHeight === this.minHeight){
            this.list.style.height = `${this.list.scrollHeight}px`;
            this.listBlock.querySelector('[data-btn]').classList.add('active');
            this.list.classList.add('active');
            this.listBlock.classList.add('active');
            if (this.windowEvent) {
                window.addEventListener('mousedown', this.closeBlockFunc)
            }
        } else {
            this.listBlock.querySelector('[data-btn]').classList.remove('active');
            this.list.classList.remove('active');
            this.listBlock.classList.remove('active');
            this.list.style.height = `0`;
            if (this.windowEvent) {
                window.removeEventListener('mousedown', this.closeBlockFunc)
            }
        }
    }
    closeBlock(event){
        if (!event.target.closest('[data-hide]')){
            this.listBlock.querySelector('[data-btn]').classList.remove('active');
            this.list.classList.remove('active');
            this.listBlock.classList.remove('active');
            this.list.style.height = `0`;
            window.removeEventListener('mousedown', this.closeBlockFunc)
        }
    }
}