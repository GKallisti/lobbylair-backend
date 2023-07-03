const nodemailer = require("nodemailer");
const { User } = require("../db");
const { Op } = require("sequelize");
const jwt = require("jsonwebtoken");

const sendEmail = async (req, res) => {
  const { email } = req.body;
  const oldUser = await User.findOne({
    where: {
      email: {
        [Op.iLike]: "%" + email + "%",
      },
    },
  });

  if (!oldUser) {
    return res.status(404).json({ message: "Usuario no encontrado." });
  }

  const token = jwt.sign({ id: oldUser.id }, process.env.SECRET_KEY, {
    expiresIn: "1h",
  });
  const transporter = nodemailer.createTransport({
    service: "hotmail",
    auth: {
      user: process.env.MY_EMAIL,
      pass: process.env.MY_PASSWORD,
    },
  });
  console.log("a");

  const mailOptions = {
    from: process.env.MY_EMAIL,
    to: email,
    subject: "Recuperación de contraseña",
    html: `<h1>Recuperación de contraseña</h1> <br> <p>Para restablecer tu contraseña, haz clic en el siguiente enlace:</p>
    <p> Restablecer contraseña></p>  <p> https://lobbylair.vercel.app/resetPassword/${token}" </p>`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res
        .status(500)
        .json({ message: "Error al enviar el correo de recuperación." });
    } else {
      console.log("Correo de recuperación enviado: " + info.response);
      res.json({ message: "Correo de recuperación enviado." });
    }
  });
};

module.exports = {
  sendEmail,
};
