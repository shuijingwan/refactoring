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

customerData[customerID].usages[year][month] = amount;