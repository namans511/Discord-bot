require("dotenv").config()
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();

const mapCommands = require("./mapCommands");
const commandHandler = require("./handlers/commandHandler");
const reactionHandler = require("./handlers/reactionHandler");

mapCommands(client);

const prefix = process.env.BOT_PREFIX;
// const prefix = "";
console.log("prefix", prefix)

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", commandHandler);

client.on("messageReactionAdd", reactionHandler);

client.login(process.env.BOT_TOKEN);