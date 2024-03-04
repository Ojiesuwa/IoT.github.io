import { getEmail } from "./database.js";

const signoutBtn = document.querySelector(".s-out");

document.querySelector(".email-container p").textContent = await getEmail();

signoutBtn.addEventListener("click", () => {
  sessionStorage.removeItem("PiEeMoSi");
  location.href = "./authentication.html";
});
