const usernameInput = document.getElementById("usernameInput");

usernameInput.addEventListener("keyup", (e) => {
  let username = e.target.value.toLowerCase();
  console.log(username);
});
