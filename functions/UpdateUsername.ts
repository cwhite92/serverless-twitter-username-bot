import Twitter = require('twitter');
import TwitterClient from "../src/TwitterClient";
import EmojiTimeConverter from "../src/EmojiTimeConverter";
import UsernameUpdater from "../src/UsernameUpdater";

module.exports.run = (event, context, cb) => {
    let secrets = require("../secrets.json");

    let twitter = new Twitter({
        'consumer_key': secrets.twitter.consumer_key,
        'consumer_secret': secrets.twitter.consumer_secret,
        'access_token_key': secrets.twitter.access_token_key,
        'access_token_secret': secrets.twitter.access_token_secret
    });

    let twitterClient = new TwitterClient(twitter);
    let emojiTimeConverter = new EmojiTimeConverter;
    let usernameUpdater = new UsernameUpdater(emojiTimeConverter, twitterClient);

    usernameUpdater.updateUsername().then(newUsername => {
        cb(null, 'Updated username to ' + newUsername);
    });
};