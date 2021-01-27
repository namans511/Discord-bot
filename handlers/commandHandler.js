const prefix = process.env.BOT_PREFIX;

module.exports = (message) => {
  if (!message.author.bot && message.client.debug) console.log(message.content);
  const client = message.client;

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
  message.channel.startTyping();
  try {
    command.execute(message, args);
  } catch (error) {
    console.error(error);
    message.reply("There was an error trying to execute that command!");
  }
  message.channel.stopTyping();
};
