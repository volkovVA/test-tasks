window.onload = function() {
    createMoreButton();
    activateMoreButton();
};

const createMoreButton = () => {
    const tagsList = document.querySelectorAll(".card__tags-list");

    tagsList.forEach(el => {
        if (el.childElementCount > 4) {
            const moreButton = document.createElement("li");
            moreButton.className = "card__tags-item button";
            moreButton.innerText = "...ещё";
            el.children[2].after(moreButton);
        }
    });
};

const activateMoreButton = () => {
    const tagsList = document.querySelectorAll(".card__tags-list");

    tagsList.forEach(el => {
        el.addEventListener("click", (event) => {
            const target = event.target;
            if (target.innerText == "...ещё") {
                el.classList.add("active");
                target.remove();
            }
        });
    });
};
