import { Ride } from "./Ride";

export class Land {
    private id: number;
    private name: string;
    private rides: Ride[];

    constructor(id: number, name: string, rides: Ride[]) {
        this.id = id;
        this.name = name;
        this.rides = rides;
    }

    public getID(): number {
        return this.id;
    }

    public setID(id: number): void {
        this.id = id;
    }

    public getName(): string {
        return this.name;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public getRides(): Ride[] {
        return this.rides;
    }

    public setRides(rides: Ride[]): void {
        this.rides = rides;
    }

    public shortestWait(): Ride {
         let ride: Ride = this.rides[0];
         let wait: number = ride.getWaitTime();

         for (const curRide of this.rides) {
             let newWait: number = curRide.getWaitTime();
             if (newWait < wait && newWait != 0) {
                 wait = newWait;
                 ride = curRide
             }
         }

         return ride
    }

    public avWaitTime(): number {
        let add: number = 0;
        let rideNum: number = 0;

        for (const ride of this.rides) {
            if (ride.getWaitTime() != 0) {
                add += ride.getWaitTime();
                rideNum++;
            }
        }

        let average: number = 0

        if (rideNum != 0) {
            average = add / rideNum;
            return average;
        }
        else {
            return 0
        }
    }

    public toString(): string {
        let result = `${this.name}:\n\n`;

        for (const ride of this.rides) {
            if (!ride.getName().includes("Single")) {
                result += ride.toString() + "\n\n";
            }
        }

        return result;
    }

}