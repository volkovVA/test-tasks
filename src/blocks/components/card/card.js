document.addEventListener("DOMContentLoaded", () => {
    createMoreButton();
    activateMoreButton();
});

const createMoreButton = () => {
    const tagsList = document.querySelectorAll(".card__tags-list");

    tagsList.forEach(el => {
        if (el.childElementCount > 4) {
            const tag = document.createElement("li");
            const btn = document.createElement("button");
            tag.append(btn);
            tag.className = "card__tags-item";
            btn.className = "btn";
            btn.innerText = "...ещё";
            el.children[2].after(tag);
        }
        for (let i = 0; i < el.children.length; i++) {
            if (i > 3) {
                el.children[i].style.display = "none";
            }
        }
        Array.from(el.children).forEach((item, i) => {
            if (i > 3) {
                item.style.display = "none";
            }
        });
    });
};

const activateMoreButton = () => {
    const tagsList = document.querySelectorAll(".card__tags-list");

    tagsList.forEach(el => {
        el.addEventListener("click", (event) => {
            const target = event.target;
            if (target.innerText == "...ещё") {
                target.parentElement.remove();
                Array.from(el.children).forEach((item, i) => {
                    if (i >= 3) {
                        item.style.display = "block";
                    }
                });
            }
        });
    });
};