const hamburgerBtn = document.querySelector(".hamburger");
const hamburgerExit = document.querySelector(".hamburger__exit");
const modalElement = document.querySelector(".modal");

hamburgerBtn.addEventListener("click", () => {
  modalElement.classList.add("open");
});

hamburgerExit.addEventListener("click", () => {
  modalElement.classList.remove("open");
});
