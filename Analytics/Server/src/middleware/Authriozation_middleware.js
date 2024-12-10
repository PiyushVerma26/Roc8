import jwt from "jsonwebtoken";

const authMiddleware = (req, res, next) => {
  const token = req.cookies["Auth-token"];
  if (!token)
    return res.status(401).json({ message: "No token, authorization denied" });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userData = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Token is not valid" });
  }
};

export default authMiddleware;
