class  Scroll  {

constructor({element, top, unit }){
    if(typeof element == 'string'){
        this.el = document.querySelector(element)
    }else if(element instanceof HTMLElement){
        this.el = element
     }
     this.el.style.position = 'fixed'
     this.range = top
     this.unit = unit 

     this.el.style.top = this.checkUnit() + 'px' 


     window.addEventListener('scroll', () => this.move())

}

move(){

    this.pxOrPercentage = this.checkUnit()

    if(this.pxOrPercentage - scrollY > 0 ){

        this.el.style.top = this.pxOrPercentage - scrollY + 'px'
    }else{
        this.el.style.top = 0 
    }


}

checkUnit(){
    if(this.unit == 'px' ){
        return this.range >= 0 ? this.range : 0
    }else if(this.unit == '%' || this.unit == undefined){
    return window.innerHeight / 100 * this.range - this.el.clientHeight
    }
}

    
}

let MyScroll = new Scroll({
    element : '.header__nav',
    top: 100,
    // unit: '%'
})


class Hover {

    constructor(el){
        this.element = document.querySelector(el)
        this.header = document.querySelector('.header')

        this.parentheight = this.header.clientHeight - 54
        this.parentwidth = this.header.clientWidth

        this.heiht = this.element.clientHeight
        this.width = this.element.clientWidth
        
        this.element.style.position = 'absolute'
        this.element.addEventListener('mouseover', () => {
        this.move()
        })

    }


    rand(min,max){
    
       return Math.floor(Math.random() * (max - min + 1) + min) 

    }
    move(){
        
        this.element.style.left = this.rand( 0, this.parentwidth - this.width) + 'px'
        this.element.style.top = this.rand( 0, this.parentheight - this.heiht) + 'px'

    }


}

let block = new Hover ('.header__content')

