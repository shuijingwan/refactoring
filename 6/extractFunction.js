let invoice = {
    "customer": "BigCo",
    "performances": [
        {
            "playID": "hamlet",
            "audience": 55
        },
        {
            "playID": "as-like",
            "audience": 35
        },
        {
            "playID": "othello",
            "audience": 40
        }
    ]
};

function printOwing(invoice) {
    printBanner();
    let outstanding = calculateOutstanding();
    printDetails(outstanding);

    function printDetails(outstanding) {
        console.log(`name: ${invoice.customer}`);
        console.log(`amount: ${outstanding}`);
    }
}

printOwing(invoice);