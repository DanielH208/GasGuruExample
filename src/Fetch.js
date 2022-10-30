import React from 'react'; 
import { useEffect, useState } from 'react';
import CurrentValues from './CurrentValues';
import BestHours from "./BestHours";

function Fetch() {

  const [CurrentData, setCurrentData] = useState([]);
  const [BestHour, setBestHour] = useState([]);

  async function fetchData() {
    try {
      const currentDataResponse = await fetch("http://localhost:5000/getCurrentValues");
      const bestDataResponse = await fetch("http://localhost:5000/getBestHours");

      if (!currentDataResponse.ok) {
        throw new Error(`HTTP error: ${currentDataResponse.status}`);
      }
      
      if (!bestDataResponse.ok) {
        throw new Error(`HTTP error: ${bestDataResponse.status}`);
      }

      const currentData = await currentDataResponse.json();
      setCurrentData(currentData);
      console.log(currentData);
      
      const bestData = await bestDataResponse.json();
      setBestHour(bestData[0]);
      console.log(bestData);
    }
    catch (error) {
      console.error(`Could not get data: ${error}`);
    }
  }


  useEffect(() => {
    
    fetchData();

  }, []);

  return (
    <div>
      <div>
        <h1>Current Values</h1>
        <CurrentValues currentData={CurrentData} />
      </div>
      <div>
        <h1>Best Hour</h1>
        <BestHours bestHourData={BestHour} />
      </div>
  </div>
  )
}


export default Fetch;