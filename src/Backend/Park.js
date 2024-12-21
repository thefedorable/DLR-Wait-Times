"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Park = void 0;
var Park = /** @class */ (function () {
    function Park(lands) {
        this.lands = lands;
        this.setAverageWait();
        this.setShortestLand();
    }
    Park.prototype.getLands = function () {
        return this.lands;
    };
    Park.prototype.setLands = function (lands) {
        this.lands = lands;
    };
    Park.prototype.getAverageWait = function () {
        return this.averageWait;
    };
    Park.prototype.setAverageWait = function () {
        var averageWait = 0;
        for (var _i = 0, _a = this.lands; _i < _a.length; _i++) {
            var land = _a[_i];
            averageWait = land.avWaitTime();
        }
        this.averageWait = averageWait / this.lands.length;
    };
    Park.prototype.setShortestLand = function () {
        var shLand = this.lands[0];
        var shWait = shLand.avWaitTime();
        for (var _i = 0, _a = this.lands; _i < _a.length; _i++) {
            var land = _a[_i];
            var newWait = land.avWaitTime();
            if (newWait < shWait && newWait != 0) {
                shWait = newWait;
                shLand = land;
            }
        }
        this.shortestLand = shLand;
    };
    Park.prototype.getShortestLand = function () {
        return this.shortestLand;
    };
    Park.prototype.toString = function () {
        var result = "";
        for (var _i = 0, _a = this.lands; _i < _a.length; _i++) {
            var land = _a[_i];
            result += land.toString() + "\n";
        }
        return result;
    };
    return Park;
}());
exports.Park = Park;
