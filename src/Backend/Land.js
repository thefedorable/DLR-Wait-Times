"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Land = void 0;
var Land = /** @class */ (function () {
    function Land(id, name, rides) {
        this.id = id;
        this.name = name;
        this.rides = rides;
    }
    Land.prototype.getID = function () {
        return this.id;
    };
    Land.prototype.setID = function (id) {
        this.id = id;
    };
    Land.prototype.getName = function () {
        return this.name;
    };
    Land.prototype.setName = function (name) {
        this.name = name;
    };
    Land.prototype.getRides = function () {
        return this.rides;
    };
    Land.prototype.setRides = function (rides) {
        this.rides = rides;
    };
    Land.prototype.shortestWait = function () {
        var ride = this.rides[0];
        var wait = ride.getWaitTime();
        for (var _i = 0, _a = this.rides; _i < _a.length; _i++) {
            var curRide = _a[_i];
            var newWait = curRide.getWaitTime();
            if (newWait < wait && newWait != 0) {
                wait = newWait;
                ride = curRide;
            }
        }
        return ride;
    };
    Land.prototype.avWaitTime = function () {
        var add = 0;
        var rideNum = 0;
        for (var _i = 0, _a = this.rides; _i < _a.length; _i++) {
            var ride = _a[_i];
            if (ride.getWaitTime() != 0) {
                add += ride.getWaitTime();
                rideNum++;
            }
        }
        var average = 0;
        if (rideNum != 0) {
            average = add / rideNum;
            return average;
        }
        else {
            return 0;
        }
    };
    Land.prototype.toString = function () {
        var result = "".concat(this.name, ":\n\n");
        for (var _i = 0, _a = this.rides; _i < _a.length; _i++) {
            var ride = _a[_i];
            if (!ride.getName().includes("Single")) {
                result += ride.toString() + "\n\n";
            }
        }
        return result;
    };
    return Land;
}());
exports.Land = Land;
