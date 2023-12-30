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

      console.log(data);

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

  function mapArray(bridge) {
    const key = bridge.id;
    const location = bridge.location;
    const status = bridge.status.status;
    const stl = bridge.status.status_type;

    console.log(stl, status);

    return <Card key={key} stl={stl} location={location} status={status} />;
  }

  return <div className="container">{bridgeData.map(mapArray)}</div>;
}

export default Bridges;
