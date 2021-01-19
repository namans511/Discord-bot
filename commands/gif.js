const fetch = require("node-fetch");
const Discord = require("discord.js");
TENOR_API_KEY = process.env.TENOR_API_KEY;

module.exports = {
  name: "gif",
  description: "Send relevant gif",
  args: true,
  aliases: ["g"],
  async execute(message, args) {
    keywords = args.join("+");
    const url = `https://api.tenor.com/v1/search?q=${keywords}&key=${TENOR_API_KEY}`;
    try {
      const results = await fetch(url);
      const gifs = await results.json();
      const index = Math.floor(Math.random() * gifs.results.length);
      const gifurl = gifs.results[index].media[0].gif.url;
      const embed = new Discord.MessageEmbed()
        // .setTitle("Result for " + keywords)
        .setImage(gifurl)
        .setFooter("Requested by " + message.author.username);
      message.channel.send(embed);
    } catch (error) {
      console.error(error);
      message.channel.send("Sorry something went wrong");
    }
  },
};
