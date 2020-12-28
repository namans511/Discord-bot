require("dotenv").config()

const Discord = require("discord.js");
const client = new Discord.Client();

const prefix = process.env.BOT_PREFIX;
console.log("prefix", prefix)

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {
  if (!message.content.startsWith(prefix) || message.author.bot) return;

  const args = message.content.slice(prefix.length).trim().split(/ +/);
  const command = args.shift().toLowerCase();

  if (command === "ping") {
    message.channel.send("kya be bsdk aehago kar denge");
  } else if (command === "lulz") {
    message.author.send("lo bc dm bhi kar diya");
  } else if (command === "args") {
    if (!args.length) {
      return message.channel.send(
        `You didn't provide any arguments, ${message.author}!`
      );
    } else if (args[0] === "foo") {
      return message.channel.send("bar");
    }
    message.channel.send(`Command name: ${command}\nArguments: ${args}`);
  } else if (command === "avatar") {
    if (!message.mentions.users.size) {
      return message.channel.send(
        `Your avatar: <${message.author.displayAvatarURL({
          format: "png",
          dynamic: true,
        })}>`
      );
    }

    // ...
  }
  
});

client.login(process.env.BOT_TOKEN);