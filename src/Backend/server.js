"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var body_parser_1 = require("body-parser");
var cors_1 = require("cors");
var DisneylandResort_1 = require("./DisneylandResort");
var Ride_1 = require("./Ride");
var app = (0, express_1.default)();
var port = 5000;
// Middleware
app.use((0, cors_1.default)());
app.use(body_parser_1.default.json());
// Simulate data for simplicity
var disneylandResort = new DisneylandResort_1.DisneylandResort();
// Fetch Disneyland data
app.get("/disneyland", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 4, , 6]);
                if (!!disneylandResort.getDisneyland()) return [3 /*break*/, 2];
                return [4 /*yield*/, disneylandResort.setDisneyland()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2: return [4 /*yield*/, res.json(disneylandResort.getDisneyland())];
            case 3:
                _a.sent();
                return [3 /*break*/, 6];
            case 4:
                error_1 = _a.sent();
                return [4 /*yield*/, res.status(500).json({ message: "Error fetching Disneyland data", error: error_1 })];
            case 5:
                _a.sent();
                return [3 /*break*/, 6];
            case 6: return [2 /*return*/];
        }
    });
}); });
// Fetch DCA data
app.get("/dca", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!!disneylandResort.getDCA()) return [3 /*break*/, 2];
                return [4 /*yield*/, disneylandResort.setDCA()];
            case 1:
                _a.sent();
                _a.label = 2;
            case 2:
                res.json(disneylandResort.getDCA());
                return [3 /*break*/, 4];
            case 3:
                error_2 = _a.sent();
                res.status(500).json({ message: "Error fetching DCA data", error: error_2 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Add or update a ride
app.post("/rides", function (req, res) {
    var _a = req.body, id = _a.id, name = _a.name, last_updated = _a.last_updated, is_open = _a.is_open, wait_time = _a.wait_time;
    try {
        var ride = new Ride_1.Ride(id, name, last_updated, is_open, wait_time);
        res.json({ message: "Ride added/updated successfully", ride: ride });
    }
    catch (error) {
        res.status(400).json({ message: "Invalid data", error: error });
    }
});
// Get information about a specific ride
app.get("/rides/:id", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var rideId, ride, error_3;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                rideId = parseInt(req.params.id);
                _a.label = 1;
            case 1:
                _a.trys.push([1, 3, , 4]);
                return [4 /*yield*/, findRideById(rideId)];
            case 2:
                ride = _a.sent();
                if (ride) {
                    res.json(ride);
                }
                else {
                    res.status(404).json({ message: "Ride not found" });
                }
                return [3 /*break*/, 4];
            case 3:
                error_3 = _a.sent();
                res.status(500).json({ message: "Error fetching ride data", error: error_3 });
                return [3 /*break*/, 4];
            case 4: return [2 /*return*/];
        }
    });
}); });
// Helper to find a ride by ID
function findRideById(id) {
    return __awaiter(this, void 0, void 0, function () {
        var park, _i, _a, land, ride;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    if (!!disneylandResort.getDisneyland()) return [3 /*break*/, 2];
                    return [4 /*yield*/, disneylandResort.setDisneyland()];
                case 1:
                    _b.sent();
                    _b.label = 2;
                case 2:
                    park = disneylandResort.getDisneyland();
                    if (park) {
                        for (_i = 0, _a = park.getLands(); _i < _a.length; _i++) {
                            land = _a[_i];
                            ride = land.getRides().find(function (r) { return r.getId() === id; });
                            if (ride)
                                return [2 /*return*/, ride];
                        }
                    }
                    return [2 /*return*/, null];
            }
        });
    });
}
// Start the server
app.listen(port, function () {
    console.log("Server is running on http://localhost:".concat(port));
});
