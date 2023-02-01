// Write code related to Calender page here
// get data from local storage
let meets = JSON.parse(localStorage.getItem("meets")) || [];

//get elements from HTML
const monthSelect = document.getElementById("month");
const weekDivs = [...document.querySelectorAll("[id^=Week-]")];

// render cards based on selected month and week
const renderCards = () => {
// clear all cards in each week div
weekDivs.forEach(weekDiv => {
weekDiv.innerHTML = "";
});

// filter meets based on selected month
const filteredMeets = meets.filter(
meet => meet.month === monthSelect.value
);

// render meets in respective week divs
filteredMeets.forEach(meet => {
const weekDiv = document.getElementById(meet.week);
const card = document.createElement("div");
card.innerHTML = `<p>${meet.name}</p> <p>${meet.description}</p> <p>${meet.meetType}</p> <select> <option value="Week-1">Week-1</option> <option value="Week-2">Week-2</option> <option value="Week-3">Week-3</option> <option value="Week-4">Week-4</option> </select> <button>Delete</button>` ;
weekDiv.appendChild(card);

// update week value in select tag
const weekSelect = card.querySelector("select");
weekSelect.value = meet.week;

// update meet in local storage and DOM on changing week value
weekSelect.addEventListener("change", e => {
  meet.week = e.target.value;
  localStorage.setItem("meets", JSON.stringify(meets));
  renderCards();
});

// delete meet from local storage and DOM on clicking delete button
const deleteBtn = card.querySelector("button");
deleteBtn.addEventListener("click", e => {
  meets = meets.filter(meetData => meetData !== meet);
  localStorage.setItem("meets", JSON.stringify(meets));
  renderCards();
});
});
};

// render cards on page load and month select change
renderCards();
monthSelect.addEventListener("change", renderCards);