
const formRanking = document.getElementById("formRanking");

const op1 = parseFloat(document.getElementById("op1").value);
const op2 = parseFloat(document.getElementById("op2").value);
const op3 = parseFloat(document.getElementById("op3").value);
const op4 = parseFloat(document.getElementById("op4").value);
const op5 = parseFloat(document.getElementById("op5").value);

let selectedValue = 0;

formRanking.onchange = (e) => {
  selectedValue = e.target.value;
  console.log(selectedValue);
}

formRanking.addEventListener("submit", (e) => {
  e.preventDefault();
  document.querySelector(
    "body"
  ).innerHTML = `<main class="containerModalThankYou">
<div class="thankYouImage">
  <img src="./images/illustration-thank-you.svg" alt="" width="">
</div>
<div id="selectedOption">
  You selected ${selectedValue} out of 5
</div>
<div class="titleAndDescriptionModal">
<h1 class="title">Thank you!</h1>
<p class="textModalThankYou">
  We appreciate you taking the time to give a rating. If you ever need more support, don't hesitate to get in touch!
</p>
</div>
</main>`;
}
)
