import dataModel from "../../models/data_model/data.model.js";

async function postDataController(req, res) {
  const response = { message: "", data: "" };

  const { feature, date, timeSpent, gender, ageGroup } = req.body;

  if (!feature || !date || !timeSpent || !gender || !ageGroup) {
    response.message = "All Fields Are Required";
    res.status(400).json(response);
    return;
  }

  const newData = new dataModel({ feature, date, timeSpent, ageGroup, gender });
  const savedData = await newData.save();

  if (!savedData) {
    response.message = "DataBase Error";
    res.status(500).json(response);
    return;
  }
  response.data = savedData;
  response.message = "Data Saved Successfully";
  res.status(200).json(response);
}
export default postDataController;
