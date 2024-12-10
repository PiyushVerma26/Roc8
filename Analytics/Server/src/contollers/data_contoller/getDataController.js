import dataModel from "../../models/data_model/data.model.js";
async function getDataController(req, res) {
  const response = { message: "", data: "" };
  try {
    const { ageGroup, startDate, endDate, gender } = req.query;

    const filters = {};

    if (ageGroup) filters.ageGroup = ageGroup;
    if (gender) filters.gender = gender;

    let data = await dataModel.find(filters);
    if (!data || data.length < 1) {
      response.message = "Database Empty";
      res.status(204).json(response);
      return;
    }
    if (startDate || endDate) {
      const newFormatData = data.filter((item) => {
        const dateObj = new Date(item.date);
        const newDate = dateObj.toLocaleString("en-US", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric",
        });

        return newDate === startDate || newDate === endDate;
      });

      if (newFormatData) {
        data = newFormatData;
      } else {
        data = [];
      }
    }

    if (!data || data.length < 1) {
      response.message = "Database Empty";
      res.status(200).json(response);
      return;
    }
    response.data = data;
    response.userData = req.userData;
    response.message = "Data Found";
    res.status(200).json(response);
    return;
  } catch (error) {
    console.error("Error fetching filtered data:", error);
    res.status(500).json({
      success: false,
      message: "An error occurred while fetching data.",
    });
  }
}
export default getDataController;
