const fetch = require("node-fetch");

module.exports = {
  name: "gif",
  description: "Send relevant gif",
  args: true,
  aliases: ["g"],
  async execute(message) {
    text = message.content;
    console.log("text=", text);
    const body = { data: text };
    message.channel.startTyping();
    const res = await fetch("http://127.0.0.1:5000/service", {
      method: "post",
      body: JSON.stringify(body),
      headers: { "Content-Type": "application/json" },
    });
    //   .then((res) => res.json())
    //   .then((json) => console.log(json));
    const reply = await res.json();
    message.reply(reply.text);
    message.channel.stopTyping();
    console.log(reply);
  },
};
