

const bar1 = document.querySelector("#bar1");
const bar2 = document.querySelector("#bar2");
const bar3 = document.querySelector("#bar3");
const bar4 = document.querySelector("#bar4");
const bar5 = document.querySelector("#bar5");
const bar1x = document.querySelector("#bar1x");
const bar2x = document.querySelector("#bar2x");
const bar3x = document.querySelector("#bar3x");
const bar4x = document.querySelector("#bar4x");
const bar5x = document.querySelector("#bar5x");
const proyect_titule = document.querySelector("#proyect_titule")
const proyect_text = document.querySelector("#proyect_text")
const slider1 = document.querySelector("#slider1")
const slider2 = document.querySelector("#slider2")
const slider3 = document.querySelector("#slider3")
const btn_Card = document.querySelector("#btn_Card")
const $block__container = document.querySelector("#block__container")

window.addEventListener("scroll", () =>{
    
    const scrolled = window.scrollY;
    //console.log(scrolled)

    if (scrolled > 30) {
        bar1.classList.replace("bar1","height1")
        bar2.classList.replace("bar2","height2")
        bar3.classList.replace("bar3","height3")
        bar4.classList.replace("bar4","height4")
        bar5.classList.replace("bar5","height5")
    }
    if(scrolled > 500){
        proyect_titule.classList.replace("gallery__titule--opacity","gallery__titule--move")
        proyect_text.classList.replace("gallery__text--opacity","gallery__text--move")
        slider1.classList.replace("slider1__opacity","slider1__move")
        slider2.classList.replace("slider2__opacity","slider2__move")
        slider3.classList.replace("slider3__opacity","slider3__move")
        btn_Card.classList.replace("btn_Card","btn_Card_move")
    }
    if(scrolled > 850){
        bar1x.classList.replace("bar1","height1")
        bar2x.classList.replace("bar2","height2")
        bar3x.classList.replace("bar3","height3")
        bar4x.classList.replace("bar4","height4")
        bar5x.classList.replace("bar5","height5")
    }
    if(scrolled > 1300){
        $block__container.classList.replace("block__container--opacity","block__container--move")
    }
});