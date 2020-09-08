const header = document.querySelector(".header")
const li = document.getElementById("list");
const toggleBtn = document.querySelector(".toggle");
const img = document.querySelectorAll("img")

function handleScroll() {
    header.classList.toggle("sticky", window.scrollY > 0)

}

function init() {
    window.addEventListener("scroll", handleScroll);
}

init()