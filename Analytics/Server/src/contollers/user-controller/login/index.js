import userModal from "../../../models/user_modal/user.modal.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
async function loginController(req, res) {
  const response = { message: "", token: "", data: "" };

  const { email, password } = req.body;
  if (!email || !password) {
    response.message = "All Fields Are Required";
    res.status(400).json(response);
    return;
  }
  const user = await userModal.findOne({ email: email });
  if (!user) {
    response.message = "User Not Found";
    res.status(404).json(response);
    return;
  }

  if (!user?.password) {
    response.message = "Unauthorized Access";
    res.status(401).json(response);
    return;
  }

  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    response.message = "Unauthorized Access";
    res.status(401).json(response);
    return;
  }

  const token = jwt.sign(
    { userId: user._id, email: user.email, name: user.name },
    process.env.JWT_SECRET
  );
  res.cookie("Auth-token", token, {
    httpOnly: true,
  });
  response.message = "Login Successful";
  response.token = token;
  res.status(200).json(response);
}
export default loginController;
