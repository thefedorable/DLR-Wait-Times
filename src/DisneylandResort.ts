import {Park} from "./Park.ts";
import {JsonTools} from "./JsonTools.ts";

export class DisneylandResort {
    private Disneyland: Park | undefined;
    private DCA: Park | undefined;

    constructor() {
        this.Disneyland = undefined;
        this.DCA = undefined;
    }

    public async setDisneyland(): Promise<void> {
        await (async () => {
            const url = "https://queue-times.com/parks/16/queue_times.json";
            try {
                let jsonHelper: JsonTools = new JsonTools();
                this.Disneyland = await jsonHelper.fetchAndDeserializePark(url);
            } catch (error) {
                console.error("Failed to fetch or process the park data:", error);
            }
        })();
    }

    public getDisneyland(): Park | undefined {
        return this.Disneyland;
    }

    public async setDCA(): Promise<void> {
        await (async () => {
            const url = "https://queue-times.com/parks/17/queue_times.json";
            try {
                let jsonHelper: JsonTools = new JsonTools();
                this.DCA = await jsonHelper.fetchAndDeserializePark(url)
            } catch (error) {
                console.error("Failed to fetch or process the park data:", error);
            }
        })();
    }

    public getDCA(): Park | undefined {
        return this.DCA;
    }

}