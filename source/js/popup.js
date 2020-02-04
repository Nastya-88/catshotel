(function() {
  const orderPopup = document.querySelector(".order-room");
  const closeToggle = document.querySelector(".order-room__toggle");
  const buttons = document.querySelectorAll(".button");
  const orderAnswer = document.querySelector(".order-answer");
  const closeToggleAnswer = document.querySelector(".order-answer__toggle");
  const orderButton = document.querySelector(".order-room__button");
  const orderButtonAnswer = document.querySelector(".order-answer__button");
  const inputs = document.querySelectorAll(".order-room__form input");

  function closePopup(e) {
    e.preventDefault();
    orderPopup.classList.toggle("hidden");
  }
  function openPopup(e) {
    e.preventDefault();
    orderPopup.classList.toggle("hidden");
    inputs.forEach(function(input) {
      input.value = "";
    });
  }
  function openPopupAnswer(e) {
    e.preventDefault();
    orderAnswer.classList.toggle("hidden");
  }
  function closePopupAnswer(e) {
    e.preventDefault();
    orderAnswer.classList.toggle("hidden");
  }
  closeToggle.addEventListener("click", closePopup);

  buttons.forEach(function(btn) {
    btn.addEventListener("click", openPopup);
  });
  orderButton.addEventListener("click", openPopupAnswer, closePopup);
  closeToggleAnswer.addEventListener("click", closePopupAnswer);
  orderButtonAnswer.addEventListener("click", closePopupAnswer);
})();
