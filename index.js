const server = require("./src/app.js");
const { conn } = require("./src/db.js");
const paypalRouter = require("./src/routes/paypalRoutes.js");

// const https = require('https');
// const fs = require('fs');
// const options = {
//     key: fs.readFileSync('./localhost-key.pem'),
//     cert: fs.readFileSync('./localhost.pem')
// }

// https.createServer(options, server).listen(3001, ()=>{
//     console.log('% listening at 3001')
// })
server.use(paypalRouter);
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log("% listening at 3001");
  });
});
