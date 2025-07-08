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
}

function moveStart () {
    let move = 0;

    return function moveInner(direction) {
        if (direction === "left"){
            move += 60;
            if (move > 0){
                move = move * -3
                return move
            } else{
                return move;
            }
        }

        if (direction === "right"){
            move -= 60;
            if (move < -180){
                move = 0
                return move
            } else{
                return move;
            }
        }
    };
}



function moveRightFunctionality(moveDistanceRight, carousel){
        let rightDistance = moveDistanceRight("right");
        console.log(rightDistance);
        carousel.style = "";
        carousel.style.transform += `translateX(${rightDistance}vw)`
}

function moveLeftFunctionality(moveDistanceLeft, carousel){
        let leftDistance = moveDistanceLeft("left");
        console.log(leftDistance);
        carousel.style = "";
        carousel.style.transform += `translateX(${leftDistance}vw)`
}

Carousel();
navButtonHover();
