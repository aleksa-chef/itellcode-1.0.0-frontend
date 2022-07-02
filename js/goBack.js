//Go back system
//--------------------

//Go back to previous page
const goBackLink = document.querySelector(".agree-btn");

const goBack = () => {
  window.history.back();
};

goBackLink.addEventListener("click", goBack);

//----------------------------------------------------------------------
