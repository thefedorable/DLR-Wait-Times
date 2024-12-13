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
exports.DisneylandResort = void 0;
const JsonTools_1 = require("./JsonTools");
class DisneylandResort {
    constructor() {
        this.Disneyland = undefined;
        this.DCA = undefined;
    }
    setDisneyland() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (() => __awaiter(this, void 0, void 0, function* () {
                const url = "https://queue-times.com/parks/16/queue_times.json";
                try {
                    let jsonHelper = new JsonTools_1.JsonTools();
                    this.Disneyland = yield jsonHelper.fetchAndDeserializePark(url);
                }
                catch (error) {
                    console.error("Failed to fetch or process the park data:", error);
                }
            }))();
        });
    }
    getDisneyland() {
        return this.Disneyland;
    }
    setDCA() {
        return __awaiter(this, void 0, void 0, function* () {
            yield (() => __awaiter(this, void 0, void 0, function* () {
                const url = "https://queue-times.com/parks/17/queue_times.json";
                try {
                    let jsonHelper = new JsonTools_1.JsonTools();
                    this.DCA = yield jsonHelper.fetchAndDeserializePark(url);
                }
                catch (error) {
                    console.error("Failed to fetch or process the park data:", error);
                }
            }))();
        });
    }
    getDCA() {
        return this.DCA;
    }
}
exports.DisneylandResort = DisneylandResort;
