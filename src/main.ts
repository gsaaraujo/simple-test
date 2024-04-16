import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});

app.listen(port, () => console.log(`Server is running on port ${port}`));
