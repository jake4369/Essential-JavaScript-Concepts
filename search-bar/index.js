const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  let allNamesDOMCollection = document.querySelectorAll(".name");
  console.log(allNamesDOMCollection.textContent);

  allNamesDOMCollection.forEach((el) => {
    const currentName = el.textContent.toLowerCase();

    currentName.includes(searchQuery)
      ? (el.style.display = "block")
      : (el.style.display = "none");
  });
});
