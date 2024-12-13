import { Land } from "./Land.ts";

export class Park {
    private lands: Land[];
    private averageWait: number | undefined;
    private shortestLand: Land | undefined;

    constructor(lands: Land[]) {
        this.lands = lands;
        this.setAverageWait();
        this.setShortestLand();
    }

    public getLands(): Land[] {
        return this.lands
    }

    public setLands(lands: Land[]): void {
        this.lands = lands;
    }

    public getAverageWait(): number | undefined {
        return this.averageWait;
    }

    public setAverageWait() {
        let averageWait: number = 0;

        for (const land of this.lands) {
            averageWait = land.avWaitTime();
        }

        this.averageWait = averageWait / this.lands.length
    }

    public setShortestLand(): void {
        let shLand: Land = this.lands[0];
        let shWait: number = shLand.avWaitTime()

        for (const land of this.lands) {
            let newWait: number = land.avWaitTime();
            if (newWait < shWait && newWait != 0) {
                shWait = newWait;
                shLand = land;
            }
        }

        this.shortestLand = shLand;
    }

    public getShortestLand(): Land | undefined {
        return this.shortestLand;
    }

    public toString(): string {
        let result = "";

        for (const land of this.lands) {
            result += land.toString() + "\n";
        }

        return result;
    }
}