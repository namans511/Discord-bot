const { Collection } = require("discord.js");
const ytdl = require('ytdl-core');

module.exports = {
  name: "join",
  description: "join the vc you're in",
  async execute(message, args) {
    try {
      if (message.guild && message.member.voice.channel) {
        const connection = await message.member.voice.channel.join();
        message.reply("kar liya join ✅");
        const stream = ytdl("https://www.youtube.com/watch?v=_t46p_nFruU", {
          filter: "audioonly",
        });
        const dispatcher = connection.play(stream);

        dispatcher.on("finish", () => voiceChannel.leave());
      } else {
        return message.reply("saale vc to join karlo pehele ❌");
      }
    }
    catch(error) {
      console.error(error);
      return message.reply("sorry bhaiya nahi ho paaya");
    }
  },
};
