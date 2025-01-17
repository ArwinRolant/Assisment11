const express = require("express");
const cors = require("cors");

const app = express();
var PORT = 3001;
app.use(express.json());
app.use(cors());
require("./connection");
const EmpModel=require('./model')
//Write missing code here

app.post("/add", async (req, res) => {
  try {
    console.log(req.body);
    const result = await EmpModel(req.body).save();
    res.send({ message: "Employee added" });
  } catch (error) {
    console.log(error);
  }
});
app.get("/blogs", async (req, res) => {
  try {
    let data = await EmpModel.find();
    res.send(data);
  } catch (error) {
    console.log(error);
  }
});

// Write GET API Code


app.listen(PORT, () => {
  console.log(`${PORT} is up and running`);
});
