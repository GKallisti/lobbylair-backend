const mercadopago = require("mercadopago");
const express = require("express");
const server = require("../app.js");
const { Payment, Subscriptions, User } = require("../db");
const jwt = require("jsonwebtoken");

require("dotenv").config();
const { MERCADOPAGO_ACCESS_TOKEN } = process.env;
server.use = express.json();
mercadopago.configure({
  access_token: MERCADOPAGO_ACCESS_TOKEN,
});

const createPreference = async (req, res) => {
  const { amount, currency, type, token } = req.body;

  const user = jwt.verify(token, process.env.SECRET_KEY);

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = user.id;

  let preference = {
    items: [
      {
        quantity: 1,
        currency: currency,
        unit_price: Number(amount),
      },
    ],
    back_urls: {
      success: `https://llbcknd.onrender.com/feedback?userId=${userId}&amount=${amount}&currency=${currency}&type=${type}`,
      failure: "https://llbcknd.onrender.com/feedback",
      pending: "https://llbcknd.onrender.com/feedback",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};
const feedback = async (req, res) => {
  const { userId, amount, type, currency } = req.query;
  try {
    const payment = await Payment.create({
      amount: parseInt(amount),
      currency: currency,
    });

    await payment.setUser(userId);

    const user = await User.findByPk(userId);
    const subscription = await Subscriptions.create({
      type: type,
    });

    await subscription.setUser(user);
    res.send("Payment successful");
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
module.exports = {
  createPreference,
  feedback,
};
