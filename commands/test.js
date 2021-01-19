const Discord = require("discord.js");

module.exports = {
  name: "test",
  description: "Place for command testing",
  execute(message) {
    if (!message.mentions.users.size) {
      const avatarEmbed = new Discord.MessageEmbed()
        .setTitle("This is a title")
        .setDescription("This is a description")
        .setTimestamp()
        .setFooter("This is a footer")
        .setAuthor("This is the author's name") //and this its profile pic)
        .addField("This is a field", "this is its description")
        .setImage("https://media2.giphy.com/media/Q8bEDnj9hZd6vivXSZ/giphy.mp4")
        .setThumbnail(
          "https://media2.giphy.com/media/Q8bEDnj9hZd6vivXSZ/giphy.mp4"
        );

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
        .setTitle(`Avatar for ${user.username}`)
        .setImage(avatarUrl);

      return message.channel.send(avatarEmbed);
    });
  },
};
