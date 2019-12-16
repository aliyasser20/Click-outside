// Select modal outer and inner //
const modalInner = document.querySelector(".modal-inner");
const modalOuter = document.querySelector(".modal-outer");

// Select all buttons //
const learnMoreButtons = document.querySelectorAll(".card button");

// Content adder function //
function contentAdder(buttonClicked) {
  const card = buttonClicked.closest(".card");
  const imageSrc = card.querySelector("img").src;
  const imageAlt = card.querySelector("img").alt;
  const { description } = card.dataset;
  const html = `
  <img src="${imageSrc}" alt="${imageAlt}">
  <p>${description}</p>
  `;
  modalInner.innerHTML = html;
  modalOuter.classList.add("open");
}

// Handle button click function //
function handleButtonClick(event) {
  contentAdder(event.currentTarget);
}

// Handle window click function //
function handleWindowClick(event) {
  const isOutside = !event.target.closest(".modal-inner");
  if (isOutside) {
    modalOuter.classList.remove("open");
  }
}

// Add event listners to buttons //
learnMoreButtons.forEach(button => {
  button.addEventListener("click", handleButtonClick);
});

// Add event listner to window //
modalOuter.addEventListener("click", handleWindowClick);
