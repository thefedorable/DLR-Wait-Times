import React, { useState, useEffect } from "react";
import { Park } from "./Backend/Park";
import { DisneylandResort } from "./Backend/DisneylandResort"

const Message: React.FC = () => {
    const [message, setMessage] = useState("Waiting...");
    let DLR: DisneylandResort = new DisneylandResort();

    useEffect(() => {
        // Call the API
        DLR.setDisneyland()
            .then((response) => {
                let DL: Park = DLR.getDisneyland();
                setMessage(DL.toString())
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

