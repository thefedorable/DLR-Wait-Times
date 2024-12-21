import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { DisneylandResort } from "./DisneylandResort";
import { Ride } from "./Ride";

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Simulate data for simplicity
let disneylandResort:DisneylandResort = new DisneylandResort();

// Fetch Disneyland data
app.get("/disneyland", async (req: Request, res: Response) => {
    try {
        if (!disneylandResort.getDisneyland()) {
            await disneylandResort.setDisneyland();
        }
        await res.json(disneylandResort.getDisneyland());
    } catch (error) {
        await res.status(500).json({message: "Error fetching Disneyland data", error});
    }
});

// Fetch DCA data
app.get("/dca", async (req: Request, res: Response) => {
    try {
        if (!disneylandResort.getDCA()) {
            await disneylandResort.setDCA();
        }
        res.json(disneylandResort.getDCA());
    } catch (error) {
        res.status(500).json({ message: "Error fetching DCA data", error });
    }
});

// Add or update a ride
app.post("/rides", (req: Request, res: Response) => {
    const { id, name, last_updated, is_open, wait_time } = req.body;
    try {
        const ride = new Ride(id, name, last_updated, is_open, wait_time);
        res.json({ message: "Ride added/updated successfully", ride });
    } catch (error) {
        res.status(400).json({ message: "Invalid data", error });
    }
});

// Get information about a specific ride
app.get("/rides/:id", async (req: Request, res: Response) => {
    const rideId = parseInt(req.params.id);
    try {
        const ride = await findRideById(rideId); // A helper function to find the ride
        if (ride) {
            res.json(ride);
        } else {
            res.status(404).json({ message: "Ride not found" });
        }
    } catch (error) {
        res.status(500).json({ message: "Error fetching ride data", error });
    }
});

// Helper to find a ride by ID
async function findRideById(id: number): Promise<Ride | null> {
    if (!disneylandResort.getDisneyland()) await disneylandResort.setDisneyland();
    const park = disneylandResort.getDisneyland();
    if (park) {
        for (const land of park.getLands()) {
            const ride = land.getRides().find((r) => r.getId() === id);
            if (ride) return ride;
        }
    }
    return null;
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
