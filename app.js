const currentNumber = document.getElementById("currentNumber");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");
const increase = document.getElementById("increase");
let newNumber;
increase.addEventListener("click", function () {
  newNumber = Number(currentNumber.innerHTML) + 1;
  currentNumber.innerHTML = newNumber;
  if (newNumber > 0) {
    currentNumber.style.color = "green";
  } else if (newNumber == 0) {
    currentNumber.style.color = "#fff";
  } else {
    currentNumber.style.color = "red";
  }
});
reset.addEventListener("click", function () {
  currentNumber.innerHTML = 0;
  currentNumber.style.color = "#fff";
});
decrease.addEventListener("click", function () {
  newNumber = Number(currentNumber.innerHTML) - 1;
  currentNumber.innerHTML = newNumber;
  if (newNumber > 0) {
    currentNumber.style.color = "green";
  } else if (newNumber == 0) {
    currentNumber.style.color = "#fff";
  } else {
    currentNumber.style.color = "red";
  }
});
