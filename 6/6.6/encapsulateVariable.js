let defaultOwner = {firstName: "Martin", lastName: "Fowler"};

setDefaultOwner({firstName: "Rebecca", lastName: "Parsons"});

spaceship.owner = getDefaultOwner();

function getDefaultOwner() {
    return defaultOwner;
}

function setDefaultOwner(arg) {
    defaultOwner = arg;
}