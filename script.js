const slider = document.getElementById("ratingSlider");
const output = document.getElementById("ratingValue");

slider.oninput = function() {
    output.innerHTML = this.value;
}

document.querySelector('.login-btn').addEventListener('click', function() {
    window.location.href = './login.html';
});