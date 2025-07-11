const buttons = document.querySelectorAll("[data-carousel-button]")
const highlighter = document.querySelector(".highlight")
const carousel = document.getElementById("carousel");
var position = parseInt(window.getComputedStyle(carousel).getPropertyValue('--position'));

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1
    position += offset

    if (position > 3){
      position = 1
    } else if (position < 1){
      position = 3
    }
    
    highlighter.style.setProperty("--index", position - 1)
    carousel.style.setProperty("--position", position)
  })
})