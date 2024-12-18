let btnInputs = document.querySelectorAll('.recharge button');
let inputField = document.querySelector('.input input'); // Select the input field
let submitButton = document.querySelector('.btn button'); // Select the submit button

btnInputs.forEach(button => {
    button.addEventListener('click', () => {
        let amount = parseFloat(button.textContent); // Get the value from the button text
        inputField.value = amount; // Set the input field value
    });
});

// Handle Deposit Submission
submitButton.addEventListener('click', () => {
    let amount = parseFloat(inputField.value); // Retrieve input value and convert to number
    if (isNaN(amount) || amount <= 0) {
        alert("Please enter a valid deposit amount.");
        return;
    }
    alert(`Deposit initiated for $${amount}!`); // Example action
});
