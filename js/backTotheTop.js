//Back to the top
//--------------------

//Back to the top of the page
const backToTheTopBtn = document.querySelector(".back-to-the-top-btn");

backToTheTopBtn.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
});

//Check user scrool 300 times and show the button
window.onscroll = function () {
    if (window.scrollY > 300) {
        backToTheTopBtn.classList.add(`active`);
    } else {
        backToTheTopBtn.classList.remove(`active`);
    }
}
//----------------------------------------------------------------------