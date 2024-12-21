import React, { useState, useEffect } from "react";

const Message: React.FC = () => {
    const [message, setMessage] = useState("Waiting...");

    useEffect(() => {
        // Call the API
        fetch("http://localhost:5000/disneyland")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("API Response:", data); // Log the API response
                setMessage("Data received! Check console for details.");
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
                setMessage("Error fetching data.");
            });
    }, []);

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default Message;

