const User = require("../Model/users");

const getUser = async (req, res) => {
    const user = await User.findOne({_id:req.user.userId})
  res.status(200).json({ message: `Welcome to your dashboard, user ${req.user.userId}`, data:user });
}

module.exports = { getUser }