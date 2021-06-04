const activateBurgerMenu = () => {
    const burgerBtn = document.querySelector(".header__nav"),
        menu = document.querySelector(".menu"),
        icon = document.querySelector(".header__icon"),
        body = document.querySelector("body");

    burgerBtn.addEventListener("click", () => {
        menu.classList.toggle("is-active");
        icon.classList.toggle("is-active");
        body.classList.toggle("is-active");
    });
};

window.addEventListener("load", activateBurgerMenu());