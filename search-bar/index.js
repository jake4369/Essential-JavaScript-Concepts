const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", (e) => {
  let username = e.target.value.toLowerCase();
  console.log(username);
});
