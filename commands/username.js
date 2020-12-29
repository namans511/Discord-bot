module.exports = {
  name: "set-username",
  description: "Change the username of the bot.",
  aliases: ["su"],
  args: true,
  execute(message, args) {
    try {
      const username = args.join(" ");
      console.log("username", username);
      message.client.user.setUsername(username);
      message.channel.send(`Username changed to ${username}`);
    } catch (error) {
      message.channel.send("sorry could not update username");
    }
  },
};
