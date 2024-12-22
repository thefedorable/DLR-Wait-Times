import { Park } from "./Park.js";
import { Land } from "./Land.js";
import { Ride } from "./Ride.js";
export class JsonTools {
    async fetchAndDeserializePark(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            const data = await response.json();
            // Deserialize JSON data into Park, Land, and Ride objects
            const lands = data.lands.map((landData) => {
                const rides = landData.rides.map((rideData) => {
                    return new Ride(rideData.id, rideData.name, rideData.last_updated, rideData.is_open, rideData.wait_time);
                });
                return new Land(landData.id, landData.name, rides);
            });
            return new Park(lands);
        }
        catch (error) {
            console.error("Error fetching or deserializing data:", error);
            throw error;
        }
    }
}
