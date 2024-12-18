// Select elements
const transactionContainer = document.querySelector('.input .text');
const pageTitle = document.querySelector('h2').textContent;

// Sample Data
const rechargeHistory = [
    { date: '2024-12-15', amount: '₦10,000' },
    { date: '2024-12-14', amount: '₦5,000' }
];

const withdrawHistory = [
    { date: '2024-12-12', amount: '₦2,000' },
    { date: '2024-12-10', amount: '₦1,500' }
];

// Function to display transactions
function displayTransactions(history) {
    // Clear current display
    transactionContainer.innerHTML = '';

    if (history.length === 0) {
        transactionContainer.innerHTML = `
            <div class="icon"><i class="fa-solid fa-person-circle-question"></i></div>
            No Record Yet
        `;
        return;
    }

    // Create a list of transactions
    history.forEach(record => {
        const transactionItem = document.createElement('div');
        transactionItem.classList.add('transaction-item');
        transactionItem.innerHTML = `
            <p>Date: ${record.date}</p>
            <p>Amount: ${record.amount}</p>
        `;
        transactionContainer.appendChild(transactionItem);
    });
}

// Initialize Page
if (pageTitle === 'Recharge History') {
    displayTransactions(rechargeHistory);
} else if (pageTitle === 'Withdraw History') {
    displayTransactions(withdrawHistory);
}
