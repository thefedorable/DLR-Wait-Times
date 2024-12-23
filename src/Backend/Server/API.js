import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import path from "path"

const app = express();
const port = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Fetch Disneyland data
app.get("/api/disneyland", async (req, res) => {
    const url = "https://queue-times.com/parks/16/queue_times.json";
    try {
        const response = await fetch(url); // Fetch JSON from the URL
        const data = await response.json(); // Parse the JSON
        res.json(data); // Return the fetched JSON as the response
    } catch (error) {
        console.error('Error fetching JSON:', error);
        res.status(500).json({ error: 'Failed to fetch JSON' });
    }
});

// Fetch DCA data
app.get("/api/dca", async (req, res) => {
    const url = "https://queue-times.com/parks/17/queue_times.json";
    try {
        const response = await fetch(url); // Fetch JSON from the URL
        const data = await response.json(); // Parse the JSON
        res.json(data); // Return the fetched JSON as the response
    } catch (error) {
        console.error('Error fetching JSON:', error);
        res.status(500).json({ error: 'Failed to fetch JSON' });
    }
});

// Add or update a ride
app.post("/rides", (req, res) => {
    const { id, name, last_updated, is_open, wait_time } = req.body;
    try {
        const ride = new Ride(id, name, last_updated, is_open, wait_time);
        res.json({ message: "Ride added/updated successfully", ride });
    } catch (error) {
        res.status(400).json({ message: "Invalid data", error });
    }
});

// Get information about a specific ride
app.get("/rides/:id", async (req, res) => {
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
async function findRideById(id) {
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

// Serve the React app in production
if (process.env.NODE_ENV === 'production') {
    const buildPath = path.join(__dirname, 'dist'); // Adjust to your build directory
    app.use(express.static(buildPath));

    app.get('*', (req, res) => {
        res.sendFile(path.join(buildPath, 'index.html'));
    });
}

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});