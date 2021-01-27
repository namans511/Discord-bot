module.exports = {
  name: "ping",
  description: "Ping!",
  aliases: ["p"],
  execute(message, args) {
    message.channel.send(`Pong!\nHeartbeat: ${message.client.ws.ping}ms`);
    message.channel.send("Pinging...").then((sent) => {
      sent.edit(
        `Roundtrip latency: ${
          sent.createdTimestamp - message.createdTimestamp
        }ms`
      );
    });
  },
};
