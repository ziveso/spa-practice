const Twit = require("twit");
const moment = require("moment");
const db = require("../database");

const Twitter = new Twit({
  consumer_key: process.env.consumer_key,
  consumer_secret: process.env.consumer_secret,
  access_token: process.env.access_token,
  access_token_secret: process.env.access_token_secret
});

const streaming = word => {
  try {
    var stream = Twitter.stream("statuses/filter", { track: word });
    stream.on("tweet", async function(tweet) {
      await addCount();
    });
  } catch (error) {
    console.log(error.message);
  }
};

const addCount = async () => {
  const oldDb = await db.read();
  const currenttime = moment()
    .startOf("minute")
    .toISOString();
  const time = oldDb[currenttime] || 0;
  //   console.log(time);

  const output = await db.write(currenttime, time + 1);
  return output;
};

// streaming("guy");
module.exports = {
  streaming
};

// var stream = Twitter.stream("statuses/filter", { track: "mango" });

// stream.on("tweet", function(tweet) {
//   console.log(tweet);
// });
