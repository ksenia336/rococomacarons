let currentIndex = 0;
let slides = document.querySelectorAll(".slide");
let dots = document.querySelectorAll(".dot");

function showSlide(index) {
    if (index >= slides.length) {
        currentIndex = 0;
    } else if (index < 0) {
        currentIndex = slides.length - 1;
    } else {
        currentIndex = index;
    }

    document.querySelector(".slides").style.transform = `translateX(-${currentIndex * 100}%)`;
    updateDots();
}

function moveSlide(step) {
    showSlide(currentIndex + step);
}

function currentSlide(index) {
    showSlide(index - 1);
}

function updateDots() {
    dots.forEach((dot) => dot.classList.remove("active"));
    dots[currentIndex].classList.add("active");
}

setInterval(() => {
    moveSlide(1);
}, 10000);

var swiper = new Swiper(".mySwiper-2", {
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
        },
        520: {
            slidesPerView: 2,
        },
        950: {
            slidesPerView: 3,
        },
    },
});

const inputs = document.querySelectorAll(".input");

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

var swiper = new Swiper(".swiper-container", {
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    slidesPerView: 1,
    spaceBetween: 10,
    // init: false,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

    breakpoints: {
        620: {
            slidesPerView: 1,
            spaceBetween: 20,
        },
        680: {
            slidesPerView: 2,
            spaceBetween: 40,
        },
        920: {
            slidesPerView: 3,
            spaceBetween: 40,
        },
        1240: {
            slidesPerView: 4,
            spaceBetween: 50,
        },
    },
});

const container = document.querySelector(".sesion-container");
const btnSignIn = document.getElementById("btn-sign-in");
const btnSignUp = document.getElementById("btn-sign-up");

btnSignIn.addEventListener("click", () => {
    container.classList.remove("toggle");
});
btnSignUp.addEventListener("click", () => {
    container.classList.add("toggle");
});
