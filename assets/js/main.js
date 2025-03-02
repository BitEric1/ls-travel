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
        audio.play();
        audio.volume = (0.2).catch((error) =>
            console.log("Trình duyệt chặn phát: ", error)
        );
    }
    window.addEventListener("beforeunload", () => {
        audio.pause();
    });
});

document.addEventListener(
    "click",
    function () {
        const audio = document.querySelector(".audio");
        if (audio.paused) {
            audio.play();
            audio.volume = 0.2;
        }
    },
    { once: true }
);

const loader = document.querySelector(".loader");
const placeDetail = document.getElementById("place__detail");

loader.style.display = "block";
placeDetail.style.opacity = 0;
placeDetail.style.visibility = "hidden";

const urlParams = new URLSearchParams(window.location.search);
const placeId = urlParams.get("id");

setTimeout(() => {
    if (places[placeId]) {
        document.title = places[placeId].title;
        document.getElementById("breadcrumb__title").textContent =
            places[placeId].breadcrumb;
        document.getElementById("place-title").textContent =
            places[placeId].title;
        document.getElementById("date").textContent = places[placeId].date;
        document.getElementById("views").textContent = places[placeId].views;
        document.getElementById("content").innerHTML = places[placeId].content;
    } else {
        document.getElementById("content").innerHTML =
            "<p>Không tìm thấy nội dung!</p>";
    }
    loader.style.display = "none";
    placeDetail.style.opacity = 1;
    placeDetail.style.visibility = "visible";
}, 1000);
