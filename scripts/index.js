// Inputs

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
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  // PLN to PLN
  if (zOutput == "PLN" && xOutput == "PLN") {
    Info.innerHTML = amount + " PLN = <br/> error EUR";
  }

  // PLN to USD
  if (zOutput == "PLN" && xOutput == "USD") {
    let cost = amount / usd;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }

  // PLN to EUR
  if (zOutput == "PLN" && xOutput == "EUR") {
    let cost = amount / eur;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }

  // PLN to GBP
  if (zOutput == "PLN" && xOutput == "GBP") {
    let cost = amount / gbp;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }

  // PLN to BAT
  if (zOutput == "PLN" && xOutput == "BAT") {
    let cost = amount / bat;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }

  // PLN to SEK
  if (zOutput == "PLN" && xOutput == "SEK") {
    let cost = amount / sek;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }

  // PLN to TRY
  if (zOutput == "PLN" && xOutput == "TRY") {
    let cost = amount / tryy;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }
});
