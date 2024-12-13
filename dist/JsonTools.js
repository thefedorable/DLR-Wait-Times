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
Object.defineProperty(exports, "__esModule", { value: true });
exports.JsonTools = void 0;
const Park_1 = require("./Park");
const Land_1 = require("./Land");
const Ride_1 = require("./Ride");
class JsonTools {
    fetchAndDeserializePark(url) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const response = yield fetch(url);
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = yield response.json();
                const lands = data.lands.map((landData) => {
                    const rides = landData.rides.map((rideData) => {
                        return new Ride_1.Ride(rideData.id, rideData.name, rideData.last_updated, rideData.is_open, rideData.wait_time);
                    });
                    return new Land_1.Land(landData.id, landData.name, rides);
                });
                return new Park_1.Park(lands);
            }
            catch (error) {
                console.error("Error fetching or deserializing data:", error);
                throw error;
            }
        });
    }
}
exports.JsonTools = JsonTools;
