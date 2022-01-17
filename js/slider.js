

const sliderSection = document.querySelector("#sliderSection");
const sliderSection2 = document.querySelector("#sliderSection2");
const sliderSection3 = document.querySelector("#sliderSection3");

                  
    function MoveImg() {
        var $width = screen.width;
        if ($width > 425) {
            let sliderSectionFirst = document.querySelectorAll("#box_of_Image")[0];
            sliderSection.style.right = "400px";
            sliderSection.style.transition = "all 2s ease"; 
            setTimeout( function moviemientoImagenNext() {  
                sliderSection.style.transition = "none";
                sliderSection.insertAdjacentElement('beforeend', sliderSectionFirst); 
                sliderSection.style.right = "0px";
            }, 2000);   
        }}

    function MoveImg2() {
        var $width = screen.width;
        if ($width > 425) {
            let sliderSectionFirst = document.querySelectorAll("#box_of_Image2")[0];
            sliderSection2.style.bottom = "300px";
            sliderSection2.style.transition = "all 2s ease"; 
            setTimeout( function moviemientoImagenNext2() {  
                sliderSection2.style.transition = "none";
                sliderSection2.insertAdjacentElement('beforeend', sliderSectionFirst); 
                sliderSection2.style.bottom = "0px";
            }, 2000);   
        }}

    function MoveImg3() {
        var $width = screen.width;
        if ($width > 425) {
            let sliderSectionFirst = document.querySelectorAll("#box_of_Image3")[0];
            sliderSection3.style.right = "400px";
            sliderSection3.style.transition = "all 2s ease"; 
            setTimeout( function moviemientoImagenNext3() {  
                sliderSection3.style.transition = "none";
                sliderSection3.insertAdjacentElement('beforeend', sliderSectionFirst); 
                sliderSection3.style.right = "0px";
            }, 2000);   
        }}

    setInterval(() => {                    
        MoveImg()
    }, 8500);
    setInterval(() => {                    
        MoveImg2()
    }, 10500);
    setInterval(() => {                    
        MoveImg3()
    }, 5000);
