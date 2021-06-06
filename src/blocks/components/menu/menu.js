const activateBurgerMenu = () => {
    const iconBtn = document.querySelector(".header__icon"),
        menu = document.querySelector(".menu"),
        menuItem = document.querySelectorAll(".menu__item");

    const noScroll = () => {
        window.scrollTo(0, 0);
    };

    const removeIsActive = () => {
        iconBtn.classList.remove("is-active");
        menu.classList.remove("is-active");
        window.removeEventListener("scroll", noScroll);
    };

    const addIsActive = () => {
        iconBtn.classList.add("is-active");
        menu.classList.add("is-active");
        window.addEventListener("scroll", noScroll);
    };

    iconBtn.addEventListener("click", () => {
        if (iconBtn.classList.contains("is-active")) {
            removeIsActive();
        } else {
            addIsActive();
        }
    });

    menuItem.forEach((item) => {
        item.addEventListener("click", () => {
            removeIsActive();
        });
    });
};

window.addEventListener("load", activateBurgerMenu());