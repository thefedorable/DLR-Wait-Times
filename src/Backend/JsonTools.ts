import { Park } from "./Park";
import { Land } from "./Land";
import {Ride} from "./Ride";

export class JsonTools {

    public async fetchAndDeserializePark(url: RequestInfo | URL) {
        try {
            
            const response = await fetch(url, {
                headers: {
                    "Access-Control-Allow-Origin" : "*"
                },
            });
            
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

    public deserialize(data: { lands: any; rides?: { id: number; name: string; is_open: boolean; wait_time: number; last_updated: string; }[]; }): Park {
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
    }

}