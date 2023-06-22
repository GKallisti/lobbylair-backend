require("dotenv").config();
const axios = require("axios");
const { PAYPAL_API_SECRET, PAYPAL_API_CLIENT, PAYPAL_API } = process.env;
const API = PAYPAL_API || "https://api-m.sandbox.paypal.com";

const createOrder = async (req, res) => {
  const order = {
    intent: "CAPTURE",
    purchase_units: [
      {
        amount: {
          currency_code: "USD",
          value: "5",
        },
      },
    ],
    application_context: {
      brand_name: "lobbylair",
      landing_page: "NO_PREFERENCE",
      shipping_preference: "NO_SHIPPING",
      user_action: "PAY_NOW",
      return_url: "http://localhost:3001/capture-order",
      cancel_url: "http://localhost:3001/cancel-order",
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
    const {
      data: { access_token },
    } = await axios.post(`${API}/v1/oauth2/token`, params, { headers });
    console.log(access_token);
    const response = await axios.post(`${API}/v2/checkout/orders`, order, {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    console.log(response.data);
    return res.json(response.data);
  } catch (error) {
    console.error(error);
    return res.status(500).json("Failed to create order");
  }
};

const captureOrder = async (req, res) => {
  const { token } = req.query;
  console.log(req.query);
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

    console.log(response.data);
    return res.send("payment successful");
    // Hashear el token después de utilizarlo
    const hashedToken = await bcrypt.hash(token, 10);
    // Aquí puedes almacenar o utilizar el valor hasheado del token en lugar del valor original
  } catch (error) {
    console.error(error.response.data);
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
