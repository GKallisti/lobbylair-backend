// cryptoController.js
require("dotenv").config();
const { Network, Alchemy } = require("alchemy-sdk");
const { ALCHEMY_API_KEY } = process.env.ALCHEMY_API_KEY;
// Configura el proveedor de Web3 para interactuar con la red Ethereum
const settings = {
  apiKey: ALCHEMY_API_KEY,
  network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(settings);

// get the latest block
const latestBlock = alchemy.core.getBlock("latest").then();

// Controlador para realizar una transacción de criptomonedas
const makeCryptoPayment = async (req, res) => {
  const { address, amount, privateKey } = req.body;

  try {
    // Crea una transacción
    const transaction = {
      from: address,
      to: "recipient-address",
      value: web3.utils.toWei(amount.toString(), "ether"),
    };

    // Firma la transacción con la clave privada del remitente
    const signedTx = await web3.eth.accounts.signTransaction(
      transaction,
      privateKey
    );

    // Envía la transacción a la red Ethereum
    const result = await web3.eth.sendSignedTransaction(
      signedTx.rawTransaction
    );

    res
      .status(200)
      .json({ success: true, transactionHash: result.transactionHash });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({
        success: false,
        message: "Error al realizar la transacción de criptomonedas",
      });
  }
};
module.exports = {
  makeCryptoPayment,
};
