const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { User } = require("../db");

const resetPassword = async (req, res) => {
  const { token, newPassword } = req.body;
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    const user = await User.findByPk(decodedToken.id);

    if (decodedToken.exp < Date.now() / 1000) {
      return res.status(400).json({ message: "Token expirado." });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    user.password = hashedPassword;
    await user.save();

    return res.json({ message: "Contraseña actualizada exitosamente." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ message: "Error al resetear la contraseña." });
  }
};

module.exports = {
  resetPassword,
};
