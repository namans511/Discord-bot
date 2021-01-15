const fetch = require("node-fetch");
TENOR_API_KEY = process.env.TENOR_API_KEY;

module.exports = {
  name: "gif",
  description: "Send relevant gif",
  args: true,
  async execute(message, args) {
    keywords = args.join("+");
    const url = `https://api.tenor.com/v1/search?q=${keywords}&key=${TENOR_API_KEY}`;
    try {
      const results = await fetch(url);
      const gifs = await results.json();
      const index = Math.floor(Math.random() * gifs.results.length);
      message.channel.send(gifs.results[index].url);
    } catch (error) {
      message.channel.send("Sorry something went wrong");
    }
  },
};
