// Buttons
const Change = document.getElementById("Change");
const Submit = document.getElementById("Submit");

// Text
const Info = document.getElementById("Info");

// SelectBox's
const currencyz = document.getElementById("currencyz");
const currencyx = document.getElementById("currencyx");

// Currency
let usd = 4.52;
let eur = 4.7;
let gbp = 5.46;
let bat = 0.13;
let sek = 0.43;
let tryy = 0.24;

Change.addEventListener("click", () => {
  alert("Opcja 'Change' wkrótce!");
});

function final(x) {
  return Number.parseFloat(x).toFixed(2);
}

Submit.addEventListener("click", () => {
  PLNtoPLN();
  PLNtoUSD();
  PLNtoEUR();
  PLNtoGBP();
  PLNtoBAT();
  PLNtoSEK();
  PLNtoTRY();
});
