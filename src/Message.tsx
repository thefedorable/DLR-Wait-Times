import { DisneylandResort } from "./Backend/DisneylandResort";
import React, { useState, useEffect } from "react";
import { Park } from "./Backend/Park";

const Message: React.FC = () => {
    const [message, setMessage] = useState("Waiting...");

    useEffect(() => {
        const DLR: DisneylandResort = new DisneylandResort();

        setTimeout(() => {
            const disneyland: Park | undefined = DLR.getDummyDisneyland();
            setMessage(disneyland.toString());
            }, 3000);
        // DLR.setDisneyland()
        //     .then(() => {
        //         setTimeout(() => {
        //             const disneyland: Park | undefined = DLR.getDisneyland();
        //             if (disneyland) {
        //                 setMessage(disneyland.toString());
        //             } else {
        //                 setMessage("Error");
        //             }
        //         }, 3000);
        //     })
        //     .catch(console.error);
    }, []);

    return (
        <div>
            <p>{message}</p>
        </div>
    );
};

export default Message;
