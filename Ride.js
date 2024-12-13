class Ride {
    constructor(id, name, lastUpdated, isOpen, waitTime) {
        this.id = id || 0;
        this.name = name || '';
        this.last_updated = lastUpdated || '';
        this.isOpen = isOpen || false;
        this.waitTime = waitTime || 0;
    }

    getId() {
        return this.id
    }

    sedId(id) {
        this.id = id;
    }

    getName() {
        return this.name
    }

    setName(name) {
        this.name = name;
    }

    getLast_updated() {
        return this.last_updated
    }

    setLast_updated(last_updated) {
        this.last_updated = last_updated
    }

    getIsOpen() {
        return this.is_open
    }

    setIsOpen(isOpen) {
        this.is_open = isOpen
    }

    getWaitTime() {
        return this.wait_time
    }

    setWaitTime(wait_time) {
        this.wait_time = wait_time
    }

    toString() {
        let result = '';
        if (this.isOpen) {
            result += `     ${this.name}\n`;
            result += `            Wait: ${this.waitTime}`;
        } else {
            result += `     ${this.name}\n`;
            result += `            Status: Closed`;
        }
        return result;
    }

}
