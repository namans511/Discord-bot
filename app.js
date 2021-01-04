require("dotenv").config()
const fs = require("fs");

const Discord = require("discord.js");
const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs
  .readdirSync("./commands")
  .filter((file) => file.endsWith(".js"));

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  client.commands.set(command.name, command);
}

const prefix = process.env.BOT_PREFIX;
// const prefix = "";
console.log("prefix", prefix)

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const commandName = args.shift().toLowerCase();

  const command =
    client.commands.get(commandName) ||
    client.commands.find(
      (cmd) => cmd.aliases && cmd.aliases.includes(commandName)
    );

  if (!command) return;

  if (command.args && !args.length) {
    return message.reply(`You didn't provide any arguments`);
  }

  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error trying to execute that command!");
  }
});

client.on("messageReactionAdd", (message) => {
  console.log("you reaxx");
  console.log(message);
});


  //   if (!message.mentions.users.size) {
  //     return message.channel.send(
  //       `Your avatar: <${message.author.displayAvatarURL({
  //         format: "png",
  //         dynamic: true,
  //       })}>`
  //     );
  //   }


client.login(process.env.BOT_TOKEN);