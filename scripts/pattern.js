function PLNtoPLN() {
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  if (zOutput == "PLN" && xOutput == "PLN") {
    Info.innerHTML = amount + " PLN = <br/> error EUR";
  }
}

function PLNtoUSD() {
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  if (zOutput == "PLN" && xOutput == "USD") {
    let cost = amount / usd;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }
}

function PLNtoEUR() {
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  if (zOutput == "PLN" && xOutput == "EUR") {
    let cost = amount / eur;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }
}

function PLNtoGBP() {
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  if (zOutput == "PLN" && xOutput == "GBP") {
    let cost = amount / gbp;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }
}

function PLNtoBAT() {
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  if (zOutput == "PLN" && xOutput == "BAT") {
    let cost = amount / bat;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }
}

function PLNtoSEK() {
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  if (zOutput == "PLN" && xOutput == "SEK") {
    let cost = amount / sek;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }
}

function PLNtoTRY() {
  const amount = document.getElementById("amount").value;
  let xOutput = currencyx.value;
  let zOutput = currencyz.value;

  if (zOutput == "PLN" && xOutput == "TRY") {
    let cost = amount / tryy;
    console.log(final(cost));
    Info.innerHTML =
      amount + " " + zOutput + " = <br /> " + final(cost) + " " + xOutput;
  }
}
