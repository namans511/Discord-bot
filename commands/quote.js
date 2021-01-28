const { MessageEmbed } = require("discord.js");

module.exports = {
  name: "quote",
  description: "quote a message from someone",
  aliases: ["q"],
  args: true,
  usage: `[channel name] [message id]`,
  cooldown: 5,
  async execute(message, args) {
    if (args.length < 2) {
      message.channel.send(`\`.q [channel name] [message id]\``);
      return;
    }
    try {
      const channel = message.mentions.channels.first();
      const fetchedMessage = await channel.messages.fetch(args[1]);
      // console.log(fetchedMessage);
      const embed = new MessageEmbed()
        .setColor("#0099ff")
        .setAuthor(
          fetchedMessage.author.tag,
          fetchedMessage.author.displayAvatarURL({
            format: "png",
            dynamic: true,
          })
        )
        .setDescription(fetchedMessage.content)
        .addField("Link", `[Jump to message](${fetchedMessage.url})`)
        .setFooter(`#${channel.name}`)
        .setTimestamp(fetchedMessage.createdTimestamp);
      // message.delete();
      message.channel.send(embed);
    } catch (error) {
      if (message.client.debug) console.error(error);
      message.channel.send("sorry invalid syntax");
    }
  },
};
