"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ride = void 0;
var Ride = /** @class */ (function () {
    function Ride(id, name, lastUpdated, isOpen, waitTime) {
        this.id = id || 0;
        this.name = name || '';
        this.last_updated = lastUpdated || '';
        this.is_open = isOpen || false;
        this.wait_time = waitTime || 0;
    }
    Ride.prototype.getId = function () {
        return this.id;
    };
    Ride.prototype.sedId = function (id) {
        this.id = id;
    };
    Ride.prototype.getName = function () {
        return this.name;
    };
    Ride.prototype.setName = function (name) {
        this.name = name;
    };
    Ride.prototype.getLast_updated = function () {
        return this.last_updated;
    };
    Ride.prototype.setLast_updated = function (last_updated) {
        this.last_updated = last_updated;
    };
    Ride.prototype.getIsOpen = function () {
        return this.is_open;
    };
    Ride.prototype.setIsOpen = function (isOpen) {
        this.is_open = isOpen;
    };
    Ride.prototype.getWaitTime = function () {
        return this.wait_time;
    };
    Ride.prototype.setWaitTime = function (wait_time) {
        this.wait_time = wait_time;
    };
    Ride.prototype.toString = function () {
        var result = '';
        if (this.is_open) {
            result += "     ".concat(this.name, "\n");
            result += "            Wait: ".concat(this.wait_time);
        }
        else {
            result += "     ".concat(this.name, "\n");
            result += "            Status: Closed";
        }
        return result;
    };
    return Ride;
}());
exports.Ride = Ride;
