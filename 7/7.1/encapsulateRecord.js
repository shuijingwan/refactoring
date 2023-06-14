result += `<h1>${getOrganization().name}</h1>`;

getOrganization().name = newName;

const organization = new Organization({name: "Acme Gooseberries", country: "GB"});

function getOrganization() {
    return organization;
}

class Organization {
    constructor(data) {
        this._name = data.name;
        this._country = data.country;
    }

    get name() {
        return this._name;
    }

    set name(aString) {
        this._name = aString;
    }

    get country() {
        return this._country;
    }

    set country(aCountryCode) {
        this._country = aCountryCode;
    }
}

// "1920": {
//     name: "martin",
//         id: "1920",
//         usages: {
//             "2016": {
//                 "1": 50,
//                 "2": 55,
//                 // remaining months of the year
//             },
//             "2015": {
//                 "1": 70,
//                 "2": 63,
//                 // remaining months of the year
//             }
//         }
//     },
// "38673": {
//     name: "neal",
//         id: "38673",
// more customers in a similar form

getCustomerData().setUsage(customerID, year, month, amount);

function compareUsage(customerID, laterYear, month) {
    const later = getCustomerData().usage(customerID, laterYear, month);
    const earlier = getCustomerData().usage(customerID, laterYear - 1, month);
    return {laterAmount: later, change: later - earlier};
}

function getRawDataOfCustomers() {
    return customerData.rawData;
}

function setRawDataOfCustomers(arg) {
    customerData = new CustomerData(arg);
}

function getCustomerData() {
    return customerData;
}

class CustomerData {
    constructor(data) {
        this._data = data;
    }

    get rawData() {
        return _.cloneDeep(this._data);
    }

    setUsage(customerID, year, month, amount) {
        this._data[customerID].usages[year][month] = amount;
    }

    usage(customerID, year, month) {
        return this._data[customerID].usages[year][month];
    }
}