const jwt = require("jsonwebtoken");
require("dotenv").config();
const { Payment, Subscriptions, User } = require("../db");
const axios = require("axios");
const { PAYPAL_API_SECRET, PAYPAL_API_CLIENT, PAYPAL_API, SECRET_KEY } = process.env;
const API = PAYPAL_API || "https://api-m.sandbox.paypal.com";

const createOrder = async (req, res) => {
  const { amount, currency, type, token } = req.body;

  const user = jwt.verify(token, SECRET_KEY);

  if (!user) {
    return res.status(401).json({ error: "Unauthorized" });
  }

  const userId = user.id;

  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: currency,
          value: amount,
        },
        descriptions: {
          type: type,
        },
      },
    ],
    application_context: {
      brand_name: "lobbylair",
      landing_page: "NO_PREFERENCE",
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
      return_url: `https://lobbylair-y5kg.onrender.com/feedback?userId=${userId}&amount=${amount}&currency=${currency}&type=${type}`,
      cancel_url: "https://llbcknd.onrender.com/cancel-order",
    },
  };

  const params = new URLSearchParams();
  params.append("grant_type", "client_credentials");

  const authString = `${PAYPAL_API_CLIENT}:${PAYPAL_API_SECRET}`;
  const encodedAuth = Buffer.from(authString).toString("base64");
  const headers = {
    "Content-Type": "application/x-www-form-urlencoded",
    Authorization: `Basic ${encodedAuth}`,
  };

  try {
    console.log("a");
    const {
      data: { access_token },
    } = await axios.post(`${API}/v1/oauth2/token`, params, { headers });
    const response = await axios.post(`${API}/v2/checkout/orders`, order, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    return res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: "Failed to create PayPal order" });
  }
};

const captureOrder = async (req, res) => {
  const { token, userId, amount, type, currency } = req.query;
  try {
    const response = await axios.post(
      `${API}/v2/checkout/orders/${token}/capture`,
      {},
      {
        auth: {
          username: PAYPAL_API_CLIENT,
          password: PAYPAL_API_SECRET,
        },
      }
    );

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

    return res.send("Payment successful");
  } catch (error) {
    console.log(error);
    return res.status(500).json("Failed to capture order");
  }
};

const cancelPayment = (req, res) => {
  res.send("payment canceled");
};
module.exports = {
  createOrder,
  captureOrder,
  cancelPayment,
};
