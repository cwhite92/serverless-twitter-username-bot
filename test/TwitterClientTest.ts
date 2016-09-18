import TwitterClient from "../src/TwitterClient";
import Twitter = require('twitter');

describe("TwitterClient", () => {
    describe("getName", () => {
        it("calls the users/show endpoint with the correct parameters", () => {
            let client = new Twitter();
            spyOn(client, "get");

            let twitterClient = new TwitterClient(client);
            twitterClient.getName('foo');

            expect(client.get).toHaveBeenCalledWith('users/show', {screen_name: 'foo'}, jasmine.any(Function));
        });
    });

    describe("setName", () => {
        it("calls the account/update_profile endpoint with the correct parameters", () => {
            let client = new Twitter();
            spyOn(client, "post");

            let twitterClient = new TwitterClient(client);
            twitterClient.setName('bar');

            expect(client.post).toHaveBeenCalledWith('account/update_profile', {name: 'bar'}, jasmine.any(Function));
        });
    });
});