const bulb = document.querySelector('.bulb');
if (bulb) {
    const turnBulb = () => {
        bulb.classList.toggle('bulb--on');
    }
    document.addEventListener('keydown', turnBulb);
}