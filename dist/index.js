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
const DisneylandResort_1 = require("./DisneylandResort");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        let disneyland = undefined;
        let dca = undefined;
        const disneylandResort = new DisneylandResort_1.DisneylandResort();
        yield disneylandResort.setDisneyland();
        yield disneylandResort.setDCA();
        disneyland = disneylandResort.getDisneyland();
        dca = disneylandResort.getDCA();
        if (disneyland) {
            console.log("Disneyland:", disneyland.toString());
        }
        else {
            console.log("Failed to retrieve DCA data.");
        }
        if (dca) {
            console.log("DCA:", dca.toString());
        }
        else {
            console.log("Failed to retrieve DCA data.");
        }
    });
}
main().catch((error) => {
    console.error("An error occurred:", error);
});
