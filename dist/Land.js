"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Land = void 0;
class Land {
    constructor(id, name, rides) {
        this.id = id;
        this.name = name;
        this.rides = rides;
    }
    getID() {
        return this.id;
    }
    setID(id) {
        this.id = id;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getRides() {
        return this.rides;
    }
    setRides(rides) {
        this.rides = rides;
    }
    shortestWait() {
        let ride = this.rides[0];
        let wait = ride.getWaitTime();
        for (const curRide of this.rides) {
            let newWait = curRide.getWaitTime();
            if (newWait < wait && newWait != 0) {
                wait = newWait;
                ride = curRide;
            }
        }
        return ride;
    }
    avWaitTime() {
        let add = 0;
        let rideNum = 0;
        for (const ride of this.rides) {
            if (ride.getWaitTime() != 0) {
                add += ride.getWaitTime();
                rideNum++;
            }
        }
        let average = 0;
        if (rideNum != 0) {
            average = add / rideNum;
            return average;
        }
        else {
            return 0;
        }
    }
    toString() {
        let result = `${this.name}:\n\n`;
        for (const ride of this.rides) {
            if (!ride.getName().includes("Single")) {
                result += ride.toString() + "\n\n";
            }
        }
        return result;
    }
}
exports.Land = Land;
