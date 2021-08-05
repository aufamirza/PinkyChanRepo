const Discord = require("discord.js");
const tutorialBot = require("./handler/Client.js");
const client = new tutorialBot();

require("./handler/Module.js")(client);
require("./handler/Event.js")(client);
require('dotenv').config(); // npm install dotenv [Usually VPS user needed this thing]
client.on("warn", console.warn); // This will warn you via logs if there was something wrong with your bot.
client.on("error", console.error); // This will send you an error message via logs if there was something missing with your coding.
client.login(process.env.SECRET).catch(console.error); // This token will leads to the .env file. It's safe in there.
