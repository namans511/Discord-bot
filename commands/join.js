module.exports = {
  name: "join",
  description: "join the vc you're in",
  async execute(message, args) {
    if (message.member.voice.channel) {
      const connection = await message.member.voice.channel.join();
      return message.reply("kar liya join ✅");
    } else {
      return message.reply("saale vc to join karlo pehele ❌");
    }
  },
};
