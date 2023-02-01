// Write code related to Home page here
// Form Submit Event
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  // Get Form Data
  const name = document.querySelector("#name").value;
  const description = document.querySelector("#desc").value;
  const month = document.querySelector("#month").value;
  const week = document.querySelector("#week").value;
  const meetType = document.querySelector("#meetType").value;

  // Save to Local Storage
  let meets = JSON.parse(localStorage.getItem("meets")) || [];
  meets.push({ name, description, month, week, meetType });
  localStorage.setItem("meets", JSON.stringify(meets));

  // Clear Form Data
  document.querySelector("#name").value = "";
  document.querySelector("#desc").value = "";
});