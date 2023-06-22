const mercadopago = require('mercadopago');
const express = require("express");
const server = require("../app.js");

require("dotenv").config();
const MERCADOPAGO_ACCESS_TOKEN = process.env.MERCADOPAGO_ACCESS_TOKEN;

server.use = express.json();
mercadopago.configure({
  access_token: MERCADOPAGO_ACCESS_TOKEN
})

const createPreference = async (req, res) => {
    let preference = {
      items: [
        {
          title: req.body.description,
          unit_price: Number(req.body.price),
          quantity: Number(req.body.quantity),
        }
      ],
      back_urls: {
        "success": "http://localhost:3001/feedback",
        "failure": "http://localhost:3001/feedback",
        "pending": "http://localhost:3001/feedback"
      },
      auto_return: "approved",
    };
  
    mercadopago.preferences.create(preference)
      .then(function (response) {
        res.json({
          id: response.body.id
        });
      }).catch(function (error) {
        console.log(error);
      });
  };
  const feedback = async (req, res) => {
    res.json({
      Payment: req.query.payment_id,
      Status: req.query.status,
      MerchantOrder: req.query.merchant_order_id
    });
  };
  module.exports = {
    createPreference,
    feedback
  };
