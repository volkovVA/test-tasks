const selectPack = () => {
    const packBlock = Array.prototype.slice.apply(document.querySelectorAll(".js-pack-block"));

    packBlock.forEach(el => {
        el.addEventListener("click", (event) => {
            const pack = el.querySelector(".js-pack");
            const target = event.target,
                packTarget = target.closest(".js-pack"),
                buyTarget = target.closest(".js-buy");

            if (packTarget || buyTarget) {
                el.classList.toggle("pack-block--selected");
                pack.classList.add("pack--default");
                el.addEventListener("mouseleave", () => {
                    pack.classList.remove("pack--default");
                });
            }

            if (el.classList.contains("pack-block--disabled")) {
                el.classList.remove("pack-block--selected");
                pack.classList.remove("pack--default");
            }
        });
    });
};

selectPack();