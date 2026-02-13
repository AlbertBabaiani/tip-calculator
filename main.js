const bill = document.getElementById("bill");
const tip_labels = [...document.querySelectorAll(".tip-btn")];
const people = document.getElementById("people");
const custom_tip = document.getElementById("custom-tip");

const tipValueDisplay = document.getElementById("tip-amount");
const totalValueDisplay = document.getElementById("total-amount");

const reset_btn = document.querySelector(".reset-btn");

let billValue = 0;
let tipValue = 0;
let peopleValue = 0;

bill.addEventListener("input", () => {
  const num = Number(bill.value);

  if (num < 0) return;

  billValue = num;

  calculate();
});

tip_labels.forEach((label) => {
  const btn = label.querySelector("input");

  btn.addEventListener("input", () => {
    const selected_tip = document.querySelector('input[type="radio"]:checked');

    tip_labels.forEach((l) => l.classList.remove("active"));

    label.classList.add("active");

    custom_tip.value = 0;

    if (selected_tip === null) return;

    tipValue = Number(selected_tip.value);

    calculate();
  });
});

custom_tip.addEventListener("input", () => {
  const tip = Number(custom_tip.value);

  if (tip > 100 || tip < 0) {
    tipValue = 0;
    custom_tip.value = "";
  } else {
    tipValue = tip / 100;

    tip_labels.forEach((l) => l.classList.remove("active"));
  }

  calculate();
});

people.addEventListener("input", () => {
  const num = Number(people.value);

  if (num < 0) return;

  peopleValue = num;

  calculate();
});

function calculate() {
  reset_btn.disabled = true;

  if (billValue <= 0 || peopleValue <= 0) return;

  reset_btn.disabled = false;

  const tipPerPerson = (billValue * tipValue) / peopleValue;
  const totalPerPerson = (billValue + billValue * tipValue) / peopleValue;

  tipValueDisplay.textContent = tipPerPerson.toFixed(2);
  totalValueDisplay.textContent = totalPerPerson.toFixed(2);
}

reset_btn.addEventListener("click", reset);

function reset() {
  billValue = 0;
  peopleValue = 0;
  tipValue = 0;

  bill.value = "";
  people.value = "";

  tipValueDisplay.textContent = billValue.toFixed(2);
  totalValueDisplay.textContent = peopleValue.toFixed(2);

  custom_tip.value = 0;

  tip_labels.forEach((l) => l.classList.remove("active"));

  reset_btn.disabled = true;
}
