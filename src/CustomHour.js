//import React from 'react'; 
//import { useEffect, useState } from 'react';

/*
function CustomHour(props) {

    const [CustomHour, setCustomHour] = useState([]);


    async function fetchCustomHour(props) {
        try {
        


        const customHourResponse = await fetch(`http://localhost:5000/getBestHours/${props.preference.toFixed(1)}/${(1.0-props.preference).toFixed(1)}`);
        console.log(customHourResponse);

        if (!customHourResponse.ok) {
        throw new Error(`HTTP error: ${customHourResponse.status}`);
        }

        const customHourData = await customHourResponse.json();
        setCustomHour(customHourData[0]);

        }
        catch (error) {
            console.error(`Could not get data: ${error}`);
        }
    }

    useEffect(() => {
    
        fetchCustomHour(props);
    
    }, [props.preference]);

    return (
        <div>
            <h2>Custom Hour Weight: {props.preference}</h2>
            <h2>Custom Hour: {CustomHour.hour}</h2>
        </div>
    )
}

export default CustomHour;
*/