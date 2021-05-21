const activateAcc = () => {
    const acc = document.querySelector(".faq__acc");

    acc.addEventListener("click", (event) => {
        const target = event.target;
        const parent = target.parentElement;
        const accItem = document.querySelectorAll(".faq__acc-item");

        if (target.classList.contains("faq__question")) {
            if (parent.classList.contains("active")) {
                parent.classList.remove("active");
                return;
            }
            accItem.forEach(el => {
                el.classList.remove("active");
            });
            parent.classList.add("active");
        }
    });
};

window.addEventListener("load", activateAcc());