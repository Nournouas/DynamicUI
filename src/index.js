import "./styles.css";

function navButtonHover () {
    const navWrapper = document.querySelector(".nav-button-wrapper");
    const navButton = document.querySelector(".nav-button-div");

    navWrapper.addEventListener("mouseenter", () => {
        if (navButton.classList.contains("hidden")){
            navButton.classList.remove("hidden");
        }
    });

    navWrapper.addEventListener("mouseleave", () => {
        if (!navButton.classList.contains("hidden")){
            navButton.classList.add("hidden");
        }
    });
}

function Carousel () {
    const rightButton = document.querySelector(".control-right");
    const leftButton = document.querySelector(".control-left");
    const carousel = document.querySelector(".carousel-main");
    const moveDistance = moveStart();
    rightButton.addEventListener("click", () => moveRightFunctionality(moveDistance, carousel));
    leftButton.addEventListener("click", () => moveLeftFunctionality(moveDistance, carousel));
    /*setInterval(()=>{
        moveRightFunctionality(moveDistance, carousel)
    }, 50);*/
}

function moveStart () {
    let currentIndex = 0;
    const carouselDiv = document.querySelector(".carousel-div");
    const widthOfCard = carouselDiv?.clientWidth;

    const careouselMain = document.querySelector(".carousel-main");
    const numberOfSlides =  careouselMain.childElementCount;
    console.log(-(widthOfCard * numberOfSlides));

    return function moveInner(direction) {

        if (direction === "left"){
            currentIndex += widthOfCard;
            if (currentIndex > 0){
                currentIndex = currentIndex * (-(numberOfSlides - 1));
                return(currentIndex);
            } else{
                return currentIndex;
            }
        }

        if (direction === "right"){
            currentIndex -= widthOfCard;
            if (currentIndex <= -(widthOfCard * numberOfSlides)){
                currentIndex = 0
                return currentIndex
            } else{
                return currentIndex;
            }
        }
    };
}



function moveRightFunctionality(moveDistanceRight, carousel){
        let rightDistance = moveDistanceRight("right");
        console.log(rightDistance);
        carousel.style.transform = `translateX(${rightDistance}px)`
}

function moveLeftFunctionality(moveDistanceLeft, carousel){
        let leftDistance = moveDistanceLeft("left");
        console.log(leftDistance);
        carousel.style.transform = `translateX(${leftDistance}px)`
}

Carousel();
navButtonHover();

