const parallax = document.getElementById("parallax")

window.addEventListener('scroll', function() {
    const offset = window.pageYOffset;
    parallax.style.backgroundPositionY = offset * 1 + "px"
})