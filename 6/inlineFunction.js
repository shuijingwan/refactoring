function getRating(driver) {
    return (driver.numberOfLateDeliveries > 5) ? 2 : 1;
}

function reportLines(aCustomer) {
    const lines = [];
    lines.push(["name", aCustomer.name]);
    gatherCustomerData(lines, aCustomer);
    return lines;
}

function gatherCustomerData(out, aCustomer) {

    out.push(["name", aCustomer.name]);

    out.push(["location", aCustomer.location]);
}