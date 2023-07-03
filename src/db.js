require("dotenv").config();
const { Sequelize } = require("sequelize");
const fs = require("fs");
const path = require("path");
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const sequelize = new Sequelize(
  `postgres://lldb_ssmp_user:mbM0o3yNAqS4lkzPHc0z2AtkUxUqpjim@dpg-cihh56dgkuvojjeojok0-a/lldb_ssmp`,
  {
    logging: false,
    native: false,
  }
);

const basename = path.basename(__filename);

const modelDefiners = [];

fs.readdirSync(path.join(__dirname, "/models"))
  .filter(
    (file) =>
      file.indexOf(".") !== 0 && file !== basename && file.slice(-3) === ".js"
  )
  .forEach((file) => {
    modelDefiners.push(require(path.join(__dirname, "/models", file)));
  });

modelDefiners.forEach((model) => model(sequelize));
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [
  entry[0][0].toUpperCase() + entry[0].slice(1),
  entry[1],
]);
sequelize.models = Object.fromEntries(capsEntries);

const {
  Post,
  User,
  Game,
  Genre,
  GameMode,
  ChatMessage,
  Payment,
  Subscriptions,
  Response,
} = sequelize.models;
Game.belongsToMany(Genre, { through: "Game_Genre" });
Genre.belongsToMany(Game, { through: "Game_Genre" });
Game.belongsToMany(GameMode, { through: "Game_GameMode" });
GameMode.belongsToMany(Game, { through: "Game_GameMode" });
Game.belongsToMany(User, { through: "Favorite" });
User.belongsToMany(Game, { through: "Favorite" });

User.hasMany(Post);
GameMode.hasMany(Post);
Post.belongsTo(GameMode);
Post.belongsTo(User);
Game.hasMany(Post);
Post.belongsTo(Game);
ChatMessage.belongsTo(User);

User.hasMany(Payment);
Payment.belongsTo(User);

User.hasOne(Subscriptions);
Subscriptions.belongsTo(User);

Post.hasMany(Response);
Response.belongsTo(Post);

User.hasMany(Response);
Response.belongsTo(User);

module.exports = {
  ...sequelize.models,
  conn: sequelize,
};
