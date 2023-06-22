const hash = require("../utils/bcrypt");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { User } = require("../db.js");
const { where } = require("sequelize");

const handleLogin = async (req, res) => {

  const { email, password } = req.body;
  try {
    const user_Db = await User.findOne({ where: { email: email } });

    if (!user_Db) {
      return res.status(404).json({ message: "Email or password is invalid" });
    }

    const isPasswordMatch = await bcrypt.compare(password, user_Db.password);

    if (!isPasswordMatch) {
      return res.status(404).json({ message: "Email or Password are invalid" });
    }

    const token = jwt.sign(user_Db.dataValues, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    const respuesta = {
      id: user_Db.id,
      name: user_Db.name,
      email: user_Db.email,
      createdAt: user_Db.createdAt,
      perfilUrl: user_Db.perfilUrl,
      image: user_Db.image,
      description: user_Db.description,
      token,
    };

    return res.json(respuesta);
  } catch (err) {
    res.status(500).json({ message: "Internal server error" });
  }
};

const handleSignUp = async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const existingUser = await User.findOne({ where: { email: email } });

    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    const hashedPassword = await hash.hashPassword(password);

    const newUser = await User.create({
      email,
      password: hashedPassword,
      name,
    });

    const token = jwt.sign({ userId: newUser.id }, process.env.SECRET_KEY, {
      expiresIn: 60 * 60 * 24 * 7,
    });

    const respuesta = {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      createdAt: newUser.createdAt,
      perfilUrl: newUser.perfilUrl,
      image: newUser.image,
      description: newUser.description,
    };

    return res.header("Authorization", "Bearer " + token).json(respuesta);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Internal server error" });
  }
};


module.exports = { handleLogin, handleSignUp };
