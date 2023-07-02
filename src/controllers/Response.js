const { Post, Game, User, GameMode, Genre, Response } = require("../db.js");
const { Op } = require("sequelize");

async function createResponse(req, res) {
  const { text, PostId, userId } = req.body;
  try {
    let newResponse = await Response.create({
      text: text,
      date: new Date(),
    });

    await newResponse.setPost(PostId);
    await newResponse.setUser(userId);

    return res.status(200).json("your Response was created successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function getResponse(req, res) {
  const { PostId } = req.params;
  try {
    let responses = await Response.findAll({
      where: {
        PostId: PostId,
      },
    });

    return res.status(200).json(responses);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

async function deleteResponse(req, res) {
  const { id } = req.params;
  try {
    let responses = await Response.destroy({
      where: {
        id: id,
      },
    });
    return res.status(200).json("your Response was delete successfully");
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

module.exports = {
  createResponse,
  getResponse,
  deleteResponse,
};
