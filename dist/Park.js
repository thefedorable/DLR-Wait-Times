"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Park = void 0;
class Park {
    constructor(lands) {
        this.lands = lands;
        this.setAverageWait();
        this.setShortestLand();
    }
    getLands() {
        return this.lands;
    }
    setLands(lands) {
        this.lands = lands;
    }
    getAverageWait() {
        return this.averageWait;
    }
    setAverageWait() {
        let averageWait = 0;
        for (const land of this.lands) {
            averageWait = land.avWaitTime();
        }
        this.averageWait = averageWait / this.lands.length;
    }
    setShortestLand() {
        let shLand = this.lands[0];
        let shWait = shLand.avWaitTime();
        for (const land of this.lands) {
            let newWait = land.avWaitTime();
            if (newWait < shWait && newWait != 0) {
                shWait = newWait;
                shLand = land;
            }
        }
        this.shortestLand = shLand;
    }
    getShortestLand() {
        return this.shortestLand;
    }
    toString() {
        let result = "";
        for (const land of this.lands) {
            result += land.toString() + "\n";
        }
        return result;
    }
}
exports.Park = Park;
