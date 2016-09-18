import Twitter = require('twitter');

export default class TwitterClient {
    /**
     * The Twitter API client.
     */
    protected client: Twitter;

    public constructor(client: Twitter) {
        this.client = client;
    }

    /**
     * Returns the profile name of the provided user.
     *
     * @param username
     * @returns {Promise<string>}
     */
    public async getName(username: string): Promise<string> {
        return new Promise<string>((resolve, reject) => {
            this.client.get('users/show', {screen_name: username}, function(error, profile) {
                if (error) {
                    reject(error);
                }

                resolve(profile.name);
            });
        });
    }

    /**
     * Sets the profile name for the authenticated user.
     *
     * @param name
     * @returns {Promise}
     */
    public async setName(name: string): Promise {
        return new Promise((resolve, reject) => {
            this.client.post('account/update_profile', {name: name}, function(error) {
                if (error) {
                    reject(error);
                }

                resolve();
            });
        });
    }
}