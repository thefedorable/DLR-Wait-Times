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
exports.DisneylandResort = void 0;
var JsonTools_1 = require("./JsonTools");
var DisneylandResort = /** @class */ (function () {
    function DisneylandResort() {
        this.Disneyland = undefined;
        this.DCA = undefined;
    }
    DisneylandResort.prototype.setDisneyland = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                            var url, jsonHelper, _a, error_1;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        url = "https://queue-times.com/parks/16/queue_times.json";
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        jsonHelper = new JsonTools_1.JsonTools();
                                        _a = this;
                                        return [4 /*yield*/, jsonHelper.fetchAndDeserializePark(url)];
                                    case 2:
                                        _a.Disneyland = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_1 = _b.sent();
                                        console.error("Failed to fetch or process the park data:", error_1);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DisneylandResort.prototype.getDisneyland = function () {
        return this.Disneyland;
    };
    DisneylandResort.prototype.getDummyDisneyland = function () {
        var data = { "lands": [{ "id": 109, "name": "Adventureland", "rides": [{ "id": 12428, "name": "Adventureland Treehouse inspired by Walt Disney’s Swiss Family Robinson", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 326, "name": "Indiana Jones™ Adventure", "is_open": true, "wait_time": 65, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 296, "name": "Jungle Cruise", "is_open": true, "wait_time": 25, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 288, "name": "Walt Disney's Enchanted Tiki Room", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 110, "name": "Bayou Country", "rides": [{ "id": 304, "name": "Davy Crockett's Explorer Canoes", "is_open": true, "wait_time": 10, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 306, "name": "The Many Adventures of Winnie the Pooh", "is_open": true, "wait_time": 10, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 14168, "name": "Tiana's Bayou Adventure", "is_open": true, "wait_time": 50, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 14326, "name": "Tiana's Bayou Adventure Single Rider", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 111, "name": "Fantasyland", "rides": [{ "id": 307, "name": "\"it's a small world\" Holiday", "is_open": true, "wait_time": 50, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 285, "name": "Alice in Wonderland", "is_open": true, "wait_time": 15, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 303, "name": "Casey Jr. Circus Train", "is_open": true, "wait_time": 5, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 275, "name": "Dumbo the Flying Elephant", "is_open": true, "wait_time": 25, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 277, "name": "King Arthur Carrousel", "is_open": true, "wait_time": 5, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 278, "name": "Mad Tea Party", "is_open": true, "wait_time": 20, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 279, "name": "Matterhorn Bobsleds", "is_open": true, "wait_time": 75, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 6711, "name": "Meet Disney Princesses at Royal Hall", "is_open": true, "wait_time": 30, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 280, "name": "Mr. Toad's Wild Ride", "is_open": true, "wait_time": 25, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 281, "name": "Peter Pan's Flight", "is_open": true, "wait_time": 45, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 282, "name": "Pinocchio's Daring Journey", "is_open": true, "wait_time": 10, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 687, "name": "Sleeping Beauty Castle Walkthrough", "is_open": false, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 283, "name": "Snow White's Enchanted Wish", "is_open": false, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 305, "name": "Storybook Land Canal Boats", "is_open": true, "wait_time": 25, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 112, "name": "Frontierland", "rides": [{ "id": 323, "name": "Big Thunder Mountain Railroad", "is_open": false, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 679, "name": "Frontierland Shootin' Exposition", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 456, "name": "Mark Twain Riverboat", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 331, "name": "Pirate's Lair on Tom Sawyer Island", "is_open": true, "wait_time": 5, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 328, "name": "Sailing Ship Columbia", "is_open": false, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 113, "name": "Main Street U.S.A", "rides": [{ "id": 674, "name": "Disneyland Railroad", "is_open": true, "wait_time": 15, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 686, "name": "Main Street Cinema", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 691, "name": "Main Street Vehicles", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 695, "name": "The Disney Gallery", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 690, "name": "The Disneyland Story presenting Great Moments with Mr. Lincoln", "is_open": false, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 114, "name": "Mickey's Toontown", "rides": [{ "id": 324, "name": "Chip 'n' Dale's GADGETcoaster", "is_open": true, "wait_time": 45, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 13814, "name": "Donald's Duck Pond", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 11980, "name": "Goofy's How-to-Play Yard", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 11526, "name": "Mickey & Minnie's Runaway Railway", "is_open": false, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 709, "name": "Mickey's House and Meet Mickey Mouse", "is_open": true, "wait_time": 45, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 684, "name": "Minnie's House", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 332, "name": "Roger Rabbit's Car Toon Spin", "is_open": true, "wait_time": 55, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 115, "name": "New Orleans Square", "rides": [{ "id": 13958, "name": "Haunted Mansion Holiday", "is_open": true, "wait_time": 95, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 289, "name": "Pirates of the Caribbean", "is_open": true, "wait_time": 50, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 332, "name": "Star Wars: Galaxy's Edge", "rides": [{ "id": 6339, "name": "Millennium Falcon: Smugglers Run", "is_open": true, "wait_time": 25, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 10903, "name": "Millennium Falcon: Smugglers Run Single Rider", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 6340, "name": "Star Wars: Rise of the Resistance", "is_open": true, "wait_time": 80, "last_updated": "2024-12-14T23:57:04.000Z" }] }, { "id": 117, "name": "Tomorrowland", "rides": [{ "id": 287, "name": "Astro Orbitor", "is_open": true, "wait_time": 10, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 317, "name": "Autopia", "is_open": true, "wait_time": 45, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 273, "name": "Buzz Lightyear Astro Blasters", "is_open": true, "wait_time": 40, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 274, "name": "Disneyland Monorail", "is_open": true, "wait_time": 5, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 276, "name": "Finding Nemo Submarine Voyage", "is_open": true, "wait_time": 25, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 284, "name": "Space Mountain", "is_open": true, "wait_time": 70, "last_updated": "2024-12-14T23:57:04.000Z" }, { "id": 286, "name": "Star Tours - The Adventures Continue", "is_open": true, "wait_time": 55, "last_updated": "2024-12-14T23:57:04.000Z" }] }], "rides": [{ "id": 14375, "name": "Holiday Fun with Santa & Friends!", "is_open": true, "wait_time": 0, "last_updated": "2024-12-14T23:57:04.000Z" }] };
        var jsonHelper = new JsonTools_1.JsonTools();
        return jsonHelper.deserialize(data);
    };
    DisneylandResort.prototype.setDCA = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, (function () { return __awaiter(_this, void 0, void 0, function () {
                            var url, jsonHelper, _a, error_2;
                            return __generator(this, function (_b) {
                                switch (_b.label) {
                                    case 0:
                                        url = "https://queue-times.com/parks/17/queue_times.json";
                                        _b.label = 1;
                                    case 1:
                                        _b.trys.push([1, 3, , 4]);
                                        jsonHelper = new JsonTools_1.JsonTools();
                                        _a = this;
                                        return [4 /*yield*/, jsonHelper.fetchAndDeserializePark(url)];
                                    case 2:
                                        _a.DCA = _b.sent();
                                        return [3 /*break*/, 4];
                                    case 3:
                                        error_2 = _b.sent();
                                        console.error("Failed to fetch or process the park data:", error_2);
                                        return [3 /*break*/, 4];
                                    case 4: return [2 /*return*/];
                                }
                            });
                        }); })()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    DisneylandResort.prototype.getDCA = function () {
        return this.DCA;
    };
    return DisneylandResort;
}());
exports.DisneylandResort = DisneylandResort;
