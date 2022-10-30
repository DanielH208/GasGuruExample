import React from 'react'; 

function BestHours(props) {
    return ( 
        <div>
            <h2>Best hour is {props.bestHourData.hour} with a score of {props.bestHourData.hour_final_score}</h2>
        </div>
    )
}

export default BestHours;