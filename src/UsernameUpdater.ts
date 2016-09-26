import EmojiTimeConverter from "./EmojiTimeConverter";
import TwitterClient from "./TwitterClient";

export default class UsernameUpdater {
    protected emojiTimeConverter: EmojiTimeConverter;
    protected twitterClient: TwitterClient;

    /**
     * UsernameUpdater constructor.
     *
     * @param emojiTimeConverter
     * @param twitterClient
     */
    public constructor(emojiTimeConverter: EmojiTimeConverter, twitterClient: TwitterClient) {
        this.emojiTimeConverter = emojiTimeConverter;
        this.twitterClient = twitterClient;
    }

    /**
     * Updates the Twitter username with an emoji for the current time.
     */
    public async updateUsername(): Promise<string> {
        let emoji = this.emojiTimeConverter.emojiForTime(new Date());

        return new Promise<string>((resolve, reject) => {
            this.twitterClient.getName('cwhite_92').then(name => {
                let cleanedName = this.stripEmoji(name);
                let newName = `${cleanedName} ${emoji}`;

                this.twitterClient.setName(newName)
                    .then(() => resolve(newName))
                    .catch(error => console.error(error));
            }).catch(error => console.error(error));
        });
    }

    /**
     * Strips emoji characters from a string.
     *
     * @param input
     * @returns {string}
     */
    protected stripEmoji(input: string): string {
        input = input.replace(/[^\w.,\s]/g, '');
        input = input.replace(/[ \t]+$/, '');

        return input;
    }
}