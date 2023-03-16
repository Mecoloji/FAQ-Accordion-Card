const questionBtn = document.querySelectorAll(".question");

questionBtn.forEach((e) => {
  e.addEventListener("click", () => {
    e.children[0].classList.toggle("question-open");
    e.children[1].classList.toggle("arrow-up");
    e.nextElementSibling.classList.toggle("answer-show");
  });
});
