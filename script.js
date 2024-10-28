function updateText() {
    const logoText = document.getElementById("logo");
    const width = window.innerWidth;

    if (width < 576) {
        logoText.textContent = "PH";
    } else {
        logoText.textContent = "Parama Herath"
    }
}

window.addEventListener('resize', updateText);
window.addEventListener('load', updateText);