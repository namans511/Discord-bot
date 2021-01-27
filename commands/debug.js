module.exports = {
  name: "debug",
  description: "turn on logging and debugging",
  execute(message, args) {
    message.client.debug = !message.client.debug;
    message.react("✅");
  },
};
