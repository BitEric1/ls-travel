const buttonCta = document.querySelector(".header__cta-btn");
const modal = document.querySelector("#modal");
const modalInner = document.querySelector(".modal__inner");
const closeBtn = document.querySelector(".modal__close");
const overlay = document.querySelector(".modal__overlay");

buttonCta.addEventListener("click", () => {
    modal.classList.toggle("show");
    if (modal.classList.contains("show")) {
        overlay.style.display = "block";
    } else {
        overlay.style.display = "none";
    }
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.style.display = "none";
});

overlay.addEventListener("click", () => {
    modal.classList.remove("show");
    overlay.style.display = "none";
});

document.addEventListener("DOMContentLoaded", () => {
    const audio = document.querySelector(".audio");
    if (
        window.location.pathname === "/" ||
        window.location.pathname === "/index.html"
    ) {
        audio
            .play()
            .catch((error) => console.log("Trình duyệt chặn phát: ", error));
    }
    window.addEventListener('beforeunload', () => {
        audio.pause();
    })
});
