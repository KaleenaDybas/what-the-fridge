const convertButton = document.getElementById("convert-btn");

function convertCupsAndGrams(amount, direction) {
  const rate = 236.588; // got this conversion rate from: https://www.inchcalculator.com/convert/cup-to-gram/
  if (direction === "cupsToGrams") {
    return `${(amount * rate).toFixed(2)} grams`;
  } else if (direction === "gramsToCups") {
    return `${(amount / rate).toFixed(2)} cups`;
  } else {
    return "Invalid direction.";
  }
}

function validateConversionInput(num){
  const regex = /\d/; // Regular expression to check for numbers aka `d` for digits
  return regex.test(num);
}

convertButton.addEventListener("click", () => {
  const amountInput = document.getElementById("amount-input")
  const amount = parseFloat(amountInput.value)

  const selectedDirection = document.getElementById("conversion-direction")
  const direction = selectedDirection.value

  if (!validateConversionInput(amount)) {
    document.getElementById("conversion-result").textContent = "Please enter a number.";
    return;
  }

  const result = convertCupsAndGrams(amount, direction);
  document.getElementById("conversion-result").textContent = `Converted: ${result}`;
});
