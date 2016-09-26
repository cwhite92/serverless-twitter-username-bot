import EmojiTimeConverter from "../src/EmojiTimeConverter";
import TwitterClient from "../src/TwitterClient";
import UsernameUpdater from "../src/UsernameUpdater";
import Twitter = require('twitter');

describe("UsernameUpdater", () => {
    describe("updateUsername", () => {
        it("fucking works", () => {
            let secrets = require("../secrets.json");

            console.log(secrets.twitter.consumer_key);

            // let twitter = new Twitter({
            //     'consumer_key': 'redacted',
            //     'consumer_secret': 'redacted',
            //     'access_token_key': 'redacted',
            //     'access_token_secret': 'redacted'
            // });
            // let emojiTimeConverter = new EmojiTimeConverter();
            // let twitterClient = new TwitterClient(twitter);
            // let usernameUpdater = new UsernameUpdater(emojiTimeConverter, twitterClient);
            //
            // usernameUpdater.updateUsername();
        });
    });
});