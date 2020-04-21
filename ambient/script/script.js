var img = document.querySelector("#img");
var images = ["slider1.jpeg", "slider2.jpg", "slider3.jpeg"];
var x = 1;


function Slider() {
    if (x < images.length) {
        x++;
    } else {
        x = 1;
    }

    img.innerHTML = "<img src=slike/" + images[x - 1] + ">";

}

window.addEventListener("load", () => {


    setInterval(Slider, 5000);

    // Responzivna navigacija

    const navSlide = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");

        var oNamaBtn = document.querySelector(".onama-btn");
        var meniBtn = document.querySelector(".meni-btn");
        var glrBtn = document.querySelector(".galer-btn");
        var kntBtn = document.querySelector(".kont-btn");

        burger.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
        })

        oNamaBtn.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
        })

        meniBtn.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
        })

        glrBtn.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
        })

        kntBtn.addEventListener("click", () => {
            nav.classList.toggle("nav-active");
        })



    }
    navSlide();
    // Promena headera pri skrolovanju
    window.addEventListener("scroll", () => {
        var header = document.querySelector(".header");

        var firstSect = document.querySelector("#o-nama");

        var secSect = document.querySelector("#meni");

        var thirdSect = document.querySelector("#galerija");

        var frthSect = document.querySelector("#kontakt");

        var oNamaBtn = document.querySelector(".onama-btn");
        var meniBtn = document.querySelector(".meni-btn");
        var glrBtn = document.querySelector(".galer-btn");
        var kntBtn = document.querySelector(".kont-btn");

        if (firstSect.getBoundingClientRect().top <= 100) {
            header.classList.add("header-scroled");
        } else {
            header.classList.remove("header-scroled");
        }

        if (firstSect.getBoundingClientRect().top >= -firstSect.clientHeight && firstSect.getBoundingClientRect().top < window.innerHeight) {
            oNamaBtn.classList.add("nav-link-active");
        } else {
            oNamaBtn.classList.remove("nav-link-active");
        }
        if (secSect.getBoundingClientRect().top >= -secSect.clientHeight && secSect.getBoundingClientRect().top < window.innerHeight) {
            meniBtn.classList.add("nav-link-active");
        } else {
            meniBtn.classList.remove("nav-link-active");
        }
        if (thirdSect.getBoundingClientRect().top >= -thirdSect.clientHeight && thirdSect.getBoundingClientRect().top < window.innerHeight) {
            glrBtn.classList.add("nav-link-active");
        } else {
            glrBtn.classList.remove("nav-link-active");
        }
        if (frthSect.getBoundingClientRect().top >= -frthSect.clientHeight && frthSect.getBoundingClientRect().top < window.innerHeight) {
            kntBtn.classList.add("nav-link-active");
        } else {
            kntBtn.classList.remove("nav-link-active");
        }
    })

})