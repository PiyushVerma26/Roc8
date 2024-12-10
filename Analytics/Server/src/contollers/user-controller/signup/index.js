import userModal from "../../../models/user_modal/user.modal.js";
import bcrypt from "bcrypt";
async function signUpController(req, res) {
  const response = { message: "", token: "", data: "" };

  const { email, password, name } = req.body;
  if (!email || !password || !name) {
    response.message = "All Fields Are Required";
    res.status(400).json(response);
    return;
  }

  try {
    const existingUser = await userModal.findOne({ email: email });
    if (existingUser) {
      response.message = "User Already Exists";
      return res.status(409).json(response);
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);
    const newUser = new userModal({
      email: email,
      password: hashedPassword,
      name: name,
    });

    const savedUser = await newUser.save();

    response.message = "User Created Successfully";
    response.data = { email: savedUser.email, name: savedUser.name };
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    response.message = "Server Error";
    res.status(500).json(response);
  }
}
export default signUpController;
