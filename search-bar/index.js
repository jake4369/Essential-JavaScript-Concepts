const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  console.log(searchQuery);
});
