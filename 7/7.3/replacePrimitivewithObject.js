// orders.filter(o => "high" === o.priority || "rush" === o.priority);

orders.filter(o => o.priority.higherThan(new Priority("normal")))

highPriorityCount = orders.filter(o => "high" === o.priority || "rush" === o.priority).length;

class Order {
    constructor(data) {
        this.priority = data.priority;
        // more initialization
    }
}

