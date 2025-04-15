 document.addEventListener("DOMContentLoaded", function() {
    const billInput = document.getElementById("baseTotal");
    const taxOutput = document.getElementById("baseTax");
    const tipSlider = document.getElementById("baseTip");
    const currencySelect = document.getElementById("currency");
    const tipConverted = document.getElementById("tipConverted");
    const finalTotal = document.getElementById("finalTotal");
    const errorMsg = document.getElementById("error");
    const tipDisplay = document.getElementById("tipDisplay");

    const currencyRates = {
        USD: 1,
        EUR: 0.95,
        INR: 85
    };

    function updateCalc() {
        let bill = parseFloat(billInput.value);
        let tipPercent = parseInt(tipSlider.value);
        let selectedCurrency = currencySelect.value;

        tipDisplay.textContent = tipPercent + "%";
    

        if (isNaN(bill) || bill < 0) {
        errorMsg.style.display = "block";
        taxOutput.value = "0.00";
        tipConverted.value = "0.00";
        finalTotal.value = "0.00";
        return;
        }

        errorMsg.style.display = "none";

        const tipAmount = bill * (tipPercent / 100);
        const taxAmount = bill * 0.11;
        const totalFin = bill + tipAmount + taxAmount;
        const rate = currencyRates[selectedCurrency];

        taxOutput.value = (bill > 0 ? (bill + taxAmount).toFixed(2) : "0.00");
        tipConverted.value = (tipAmount * rate).toFixed(2);
        finalTotal.value = (totalFin * rate).toFixed(2);
    }

    billInput.addEventListener("input", updateCalc);
    tipSlider.addEventListener("input", updateCalc);
    currencySelect.addEventListener("change", updateCalc);
 })