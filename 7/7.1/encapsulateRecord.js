organization = {name: "Acme Gooseberries", country: "GB"};

result += `<h1>${organization.name}</h1>`;
organization.name = newName;

function getRawDataOfOrganization() {
    return organization;
}

result += `<h1>${getRawDataOfOrganization().name}</h1>`;

getRawDataOfOrganization().name = newName;

class Organization {
    constructor(data) {
        this._data = data;
    }
}