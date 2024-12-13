import { JsonTools } from "./JsonTools.js";
export class DisneylandResort {
    Disneyland;
    DCA;
    constructor() {
        this.Disneyland = undefined;
        this.DCA = undefined;
    }
    async setDisneyland() {
        await (async () => {
            const url = "https://queue-times.com/parks/16/queue_times.json";
            try {
                let jsonHelper = new JsonTools();
                this.Disneyland = await jsonHelper.fetchAndDeserializePark(url);
            }
            catch (error) {
                console.error("Failed to fetch or process the park data:", error);
            }
        })();
    }
    getDisneyland() {
        return this.Disneyland;
    }
    async setDCA() {
        await (async () => {
            const url = "https://queue-times.com/parks/17/queue_times.json";
            try {
                let jsonHelper = new JsonTools();
                this.DCA = await jsonHelper.fetchAndDeserializePark(url);
            }
            catch (error) {
                console.error("Failed to fetch or process the park data:", error);
            }
        })();
    }
    getDCA() {
        return this.DCA;
    }
}
