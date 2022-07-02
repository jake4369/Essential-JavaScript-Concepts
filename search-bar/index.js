const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", (e) => {
  let searchQuery = e.target.value.toLowerCase();
  let allNamesDOMcollection = document.getElementsByClassName("name");
  console.log(allNamesDOMcollection.textContent);
});
