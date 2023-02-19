const openModalBtn = document.getElementById("open-modal-btn");
const modal = document.getElementById("modal");
const modalContent = modal.querySelector(".modal-content");
const closeBtn = modal.querySelector(".close");

openModalBtn.addEventListener("click", function() {
  modal.style.display = "block";
  modalContent.classList.remove("hide");
  modalContent.classList.add("show");
});

closeBtn.addEventListener("click", function() {
  modalContent.classList.remove("show");
  modalContent.classList.add("hide");
  setTimeout(function() {
    modal.style.display = "none";
  }, 400);
});

window.addEventListener("click", function(event) {
  if (event.target == modal) {
    modalContent.classList.remove("show");
    modalContent.classList.add("hide");
    setTimeout(function() {
      modal.style.display = "none";
    }, 400);
  }
});
