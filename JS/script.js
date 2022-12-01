// Variables
const slides = document.querySelector("[data-slides]");
const container = [...document.querySelectorAll(".carousel-inner")];
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");
var index = 0;
var scrollPosition = 0;

// Resize Event
window.addEventListener("resize", () => {
    scrollPosition = 0;
    index = 0;
    $("#carouselId .carousel-inner").animate({
        scrollLeft: scrollPosition
    }, 500);
} )

//Next Btn
nextBtn.addEventListener('click', () => {
    if(window.matchMedia("(max-width: 645px)").matches) {
        if (index === [...slides.children].length - 1) {
            scrollPosition = 0;
            index = 0;
        } else {
            let width = slides.children[index].getBoundingClientRect().width;
            scrollPosition += width;
            index++;
        }
    } else if(window.matchMedia("(max-width: 930px)").matches) {
        if (index === [...slides.children].length - 2) {
            scrollPosition = 0;
            index = 0;
        } else {
            let width = slides.children[index].getBoundingClientRect().width;
            scrollPosition += width;
            index++;
        }
    } else {
        if (index === [...slides.children].length - 3) {
            scrollPosition = 0;
            index = 0;
        } else {
            let width = slides.children[index].getBoundingClientRect().width;
            scrollPosition += width;
            index++;
        }
    }
    $("#carouselId .carousel-inner").animate({
        scrollLeft: scrollPosition
    }, 600);
})

// Prev Btn
prevBtn.addEventListener('click', ()=> {
    index--;
    if(window.matchMedia("(max-width: 645px)").matches) {
        if (index < 0) {
            let width = slides.children[0].getBoundingClientRect().width;
            scrollPosition += (width * (slides.children.length - 1));
            index = [...slides.children].length - 1;
        } else {
            let width = slides.children[index].getBoundingClientRect().width;
            scrollPosition -= width;
        }
    } else if(window.matchMedia("(max-width: 930px)").matches) {
        if (index < 0) {
            let width = slides.children[0].getBoundingClientRect().width;
            scrollPosition += ((width * slides.children.length) * 0.75);
            index = [...slides.children].length - 2;
        } else {
            let width = slides.children[index].getBoundingClientRect().width;
            scrollPosition -= width;
        }
    } else {
        if (index < 0) {
            let width = slides.children[0].getBoundingClientRect().width;
            scrollPosition += (width * slides.children.length) / 1.6;
            index = [...slides.children].length - 3;
        } else {
            let width = slides.children[index].getBoundingClientRect().width;
            scrollPosition -= width;
        }
    }
    $("#carouselId .carousel-inner").animate({
        scrollLeft: scrollPosition
    }, 600);
})