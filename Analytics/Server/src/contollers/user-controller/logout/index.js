async function logoutController(req, res) {
  res.clearCookie("Auth-token");
  res.status(200).json({ message: "Logged out successfully" });
}

export default logoutController;
