const { User, Game } = require("../db.js");
const jwt = require("jsonwebtoken");

async function getFavorites(req, res) {
  const { token } = req.params;
  const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

  if (!decodedToken) {
    return res.status(401).json({ error: "No autorizado" });
  }

  const userId = decodedToken.id;

  try {
    const user = await User.findByPk(userId, {
      include: [
        {
          model: Game,
          attributes: ["id", "name", "thumbnail"],
          through: { attributes: [] },
        },
      ],
    });

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const favoriteGames = user.Games;

    return res.status(200).json(favoriteGames);
  } catch (error) {
    console.error("Error al obtener los juegos favoritos:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function createFavorite(req, res) {
  const { token, id } = req.body;
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!decodedToken) {
      return res.status(401).json({ error: "No autorizado" });
    }

    const userId = decodedToken.id;

    const user = await User.findByPk(userId.toString());
    const game = await Game.findByPk(id);
    if (!user || !game) {
      return res.status(404).json({ error: "Usuario o juego no encontrado" });
    }

    await user.addGame(game);
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al crear la relación favorita:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

async function removeFavoriteGame(req, res) {
  const { gameId, token } = req.query;
  try {
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY);

    if (!decodedToken) {
      return res.status(401).json({ error: "No autorizado" });
    }

    const userId = decodedToken.id;

    const user = await User.findByPk(userId);

    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }

    const game = await Game.findByPk(gameId);

    if (!game) {
      return res.status(404).json({ error: "Juego no encontrado" });
    }

    await user.removeGame(game);

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error("Error al eliminar el juego favorito:", error);
    return res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = {
  getFavorites,
  createFavorite,
  removeFavoriteGame,
};
