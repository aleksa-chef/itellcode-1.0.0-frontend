//Count words in input
//--------------------

//Count word for answer
let post_answer_input = document.querySelector("#postAnswer");
let post_answer_count_p = document.querySelector(".word-counter-answer");
const post_answer_limit = 500;

post_answer_count_p.textContent = 0 + "/" + post_answer_limit;
post_answer_input.addEventListener("input", function () {
    let textLength = post_answer_input.value.length;
    post_answer_count_p.textContent = textLength + "/" + post_answer_limit;

    if (textLength > post_answer_limit) {
        post_answer_input.style.borderColor = "#ff2851";
        post_answer_count_p.style.color = "#ff2851";
    } else {
        post_answer_input.style.borderColor = "#00a9ff";
        post_answer_count_p.style.color = "white";
    }
});
//----------------------------------------------------------------------