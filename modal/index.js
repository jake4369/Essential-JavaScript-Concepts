const overlay = document.getElementById("overlay");
const openBtn = document.getElementById("open-modal");
const closeBtn = document.getElementById("close-modal");

openBtn.addEventListener("click", () => {
  overlay.style.display = "block";
});

closeBtn.addEventListener("click", () => {
  overlay.style.display = "none";
});
