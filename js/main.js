
const formRanking = document.getElementById("formRanking");

let selectedValue = 0;

formRanking.onchange = (e) => {
  selectedValue = e.target.value;
  document.getElementById("btnSubmit").removeAttribute("disabled")}

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
