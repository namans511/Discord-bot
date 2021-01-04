module.exports = {
  name: "set-username",
  description: "Change the username of the bot.",
  aliases: ["su"],
  args: true,
  execute(message, args) {
    try {
      const username = args.join(" ");
      console.log("username", username);
      message.client.user
        .setUsername(username)
        .then((user) => {
          message.channel.send(`Username changed to ${username}`);
        })
        .catch((err) => {
          console.log(err);
          message.channel.send(
            `Please wait a while before changing the username again.`
          );
        });
    } catch (error) {
      message.channel.send(
        `Please wait a while before changing the username again.`
      );
    }
  },
};
