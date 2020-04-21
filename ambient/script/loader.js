window.addEventListener('load', () => {
    var loader = document.querySelector("#loader");
    var page = document.querySelector("#page");

    page.classList.remove('page-preloaded');
    loader.style.display = "none";

})