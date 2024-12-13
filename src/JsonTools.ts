import { Park } from "./Park";
import { Land } from "./Land";
import {Ride} from "./Ride";

export class JsonTools {
    // public deserializeRide(data: any): Ride {
    //     return new Ride(data.id, data.name, data.last_updated, data.is_open, data.wait_time)
    // }
    //
    // public deserializeLand(data: any): Land {
    //     const rides = data.rides.map((rideData: any) => this.deserializeRide(rideData));
    //     return new Land(data.id, data.name, rides)
    // }
    //
    // public deserializePark(json: string): Park {
    //     const data = JSON.parse(json);
    //     const lands = data.lands.map((land: any) => this.deserializeLand(land));
    //     return new Park(lands);
    // }

    public async fetchAndDeserializePark(url: RequestInfo | URL) {
        try {
            // Fetch JSON data from the provided URL
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();

            // Deserialize JSON data into Park, Land, and Ride objects
            const lands = data.lands.map((landData: { rides: any[]; id: number; name: string; }) => {
                const rides = landData.rides.map((rideData) => {
                    return new Ride(
                        rideData.id,
                        rideData.name,
                        rideData.last_updated,
                        rideData.is_open,
                        rideData.wait_time
                    );
                });

                return new Land(landData.id, landData.name, rides);
            });

            return new Park(lands);
        } catch (error) {
            console.error("Error fetching or deserializing data:", error);
            throw error;
        }
    }

}