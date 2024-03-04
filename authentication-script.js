let switchButton = document.querySelector(".switch-btn span");
let firstnameBox = document.querySelector(".first-name");
let lastnameBox = document.querySelector(".last-name");
let authBtn = document.querySelector(".auth-btn");

switchButton.addEventListener("click", () => {
  firstnameBox.classList.toggle("hidden");
  lastnameBox.classList.toggle("hidden");
  if (authBtn.textContent == "Signup") {
    authBtn.textContent = "Login";
    switchButton.textContent = "Click to signup";
  } else {
    authBtn.textContent = "Signup";
    switchButton.textContent = "Click to login";
  }
});
