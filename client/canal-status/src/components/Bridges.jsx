import axios from "axios";
import { useEffect, useState } from "react";
import Card from "./card";

const API_URL = "http://localhost:3001/api";

function Bridges() {
  const [bridgeData, setBridgeData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const result = await axios.get(API_URL);

      const data = result.data.bridges;

      setBridgeData(data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  if (isLoading) {
    return <div className="loading">Loading...</div>;
  }

  function strSplit(str) {
    const text = str;

    const newText = text.split("(");
    for (let i = 1; i < newText.length; i++) {
      const final = newText[i].split(")")[0];
      return final;
    }
  }

  function mapArray(bridge) {
    const key = bridge.id;
    const rawLocation = bridge.location;
    const location = rawLocation.split("(")[0];
    const city = strSplit(rawLocation);
    const status = bridge.status.status;
    const stl = bridge.status.status_type;

    console.log(location, city);

    return (
      <Card key={key} stl={stl} bridge={location} city={city} status={status} />
    );
  }

  return <div className="container">{bridgeData.map(mapArray)}</div>;
}

export default Bridges;
