const Discord = require("discord.js");

module.exports = {
  name: "avatar",
  description: "Get the avatar URL of the tagged user(s), or your own avatar.",
  aliases: ["icon", "pfp"],
  execute(message) {
    if (!message.mentions.users.size) {
      const avatarUrl = message.author.displayAvatarURL({
        format: "png",
        dynamic: true,
      });
      const avatarEmbed = new Discord.MessageEmbed()
        .setDescription(`${message.author}`)
        .setColor("#0099ff")
        .setTitle(`Avatar for ${message.author.tag}`)
        .setImage(avatarUrl);

      return message.channel.send(avatarEmbed);
    }

    const avatarList = message.mentions.users.map((user) => {
      const avatarUrl = user.displayAvatarURL({
        format: "png",
        dynamic: true,
      });
      const avatarEmbed = new Discord.MessageEmbed()
        .setDescription(`${user}`)
        .setColor("#0099ff")
        .setTitle(`Avatar for ${user.tag}`)
        .setImage(avatarUrl);

      return message.channel.send(avatarEmbed);
    });
  },
};
