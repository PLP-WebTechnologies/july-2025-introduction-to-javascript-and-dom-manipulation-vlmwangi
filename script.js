// Part 1: Variables & Conditionals
function checkAge() {
  let age = prompt("Enter your age:");
  age = Number(age);

  if (isNaN(age)) {
    document.getElementById("ageResult").textContent = "Please enter a valid number.";
  } else if (age >= 18) {
    document.getElementById("ageResult").textContent = "You are an adult!";
  } else {
    document.getElementById("ageResult").textContent = "You are underage.";
  }
}

// Part 2: Functions (Reusability)
function calculateTotal(price, quantity) {
  return price * quantity;
}

function formatString(text) {
  return text.toUpperCase();
}


// Part 3: Loops (Iteration)
function countdown() {
  const list = document.getElementById("countdownList");
  list.innerHTML = ""; // clear old list

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
  let li = document.createElement("li");
  li.textContent = "Go!";
  list.appendChild(li);
}

// Part 4: DOM Manipulation
document.getElementById("toggleBtn").addEventListener("click", function() {
  const text = document.getElementById("toggleText");
  text.classList.toggle("highlight");
});

// Another DOM interaction: dynamically create element
const newPara = document.createElement("p");
newPara.textContent = "This paragraph was added dynamically using JS!";
document.body.appendChild(newPara);

// Third DOM interaction: change content on load
document.title = "JS Assignment";
