import express from "express";
import axios from "axios";
import cors from "cors";

const app = express();
const port = 3001;
const API_URL = "https://canalstatus.com/api/v1/bridges";

app.use(cors({ origin: "*" }));

app.get("/api", async (req, res) => {
  const result = await axios.get(API_URL);

  const data = result.data;

  res.send(data);
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
