require("dotenv").config()
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();
// client.commands = new Discord.Collection();

const commandHandler = require("./handlers/commandHandler");
const mapCommands = require("./mapCommands");

mapCommands(client);

// const commandFiles = fs
//   .readdirSync("./commands")
//   .filter((file) => file.endsWith(".js"));

// for (const file of commandFiles) {
//   const command = require(`./commands/${file}`);
//   client.commands.set(command.name, command);
// }

const prefix = process.env.BOT_PREFIX;
// const prefix = "";
console.log("prefix", prefix)

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", commandHandler);

client.on("messageReactionAdd", (message) => {
  console.log("you reaxx");
  // console.log(message);
});

client.login(process.env.BOT_TOKEN);