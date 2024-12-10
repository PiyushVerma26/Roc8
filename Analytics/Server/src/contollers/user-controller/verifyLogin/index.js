async function verfiyLogin(req, res) {
  res.status(200).json({ message: "Authentic User", isLogin: true });
}
export default verfiyLogin;
