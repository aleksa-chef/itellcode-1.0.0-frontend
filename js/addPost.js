//Count words in input
//--------------------

//Count word for title
let post_title_input = document.querySelector("#postHeading");
let post_title_count_p = document.querySelector(".word-counter-title");
const post_title_limit = 300;

post_title_count_p.textContent = 0 + "/" + post_title_limit;
post_title_input.addEventListener("input", function () {
  let textLength = post_title_input.value.length;
  post_title_count_p.textContent = textLength + "/" + post_title_limit;

  if (textLength > post_title_limit) {
    post_title_input.style.borderColor = "#ff2851";
    post_title_count_p.style.color = "#ff2851";
  } else {
    post_title_input.style.borderColor = "#00a9ff";
    post_title_count_p.style.color = "white";
  }
});
//----------------------------------------------------------------------

//Count word for content
let post_content_input = document.querySelector("#postContent");
let post_content_count_p = document.querySelector(".word-counter-content");
const post_content_limit = 1500;

post_content_count_p.textContent = 0 + "/" + post_content_limit;
post_content_input.addEventListener("input", function () {
  let textLength = post_content_input.value.length;
  post_content_count_p.textContent = textLength + "/" + post_content_limit;

  if (textLength > post_content_limit) {
    post_content_input.style.borderColor = "#ff2851";
    post_content_count_p.style.color = "#ff2851";
  } else {
    post_content_input.style.borderColor = "#00a9ff";
    post_content_count_p.style.color = "white";
  }
});
//----------------------------------------------------------------------
