// orders.filter(o => "high" === o.priority || "rush" === o.priority);

orders.filter(o => o.priority.higherThan(new Priority("normal")))

highPriorityCount = orders.filter(o => "high" === o.priority.toString() || "rush" === o.priority.toString()).length;

class Order {
    constructor(data) {
        this.priority = data.priority;
        // more initialization
    }

    get priorityString() {
        return this._priority.toString();
    }

    set priority(aString) {
        this._priority = new Priority(aString);
    }
}

class Priority {
    constructor(value) {
        if (value instanceof Priority) return value;
        this._value = value;
    }

    toString() {
        return this._value;
    }
}