const body = document.querySelector("body")
const closeBtn = document.querySelector(".close")
const bg = document.querySelector(".bg")
const popup = document.querySelector(".popup")
const header = document.querySelector(".header")
const li = document.getElementById("list");
const toggleBtn = document.querySelector(".toggle");
const logo = document.querySelector(".logo");



function showCard() {

    popup.style.display = "block"
    bg.style.display = "block"
    body.classList.add("hidden")

}

function closeCard() {
    popup.style.display = "none"
    bg.style.display = "none"
    body.classList.remove("hidden")
}

function handleScroll() {
    header.classList.toggle("sticky", window.scrollY > 0)

}

function init() {
    window.addEventListener("scroll", handleScroll);
    closeBtn.addEventListener("click", closeCard)


}

init()