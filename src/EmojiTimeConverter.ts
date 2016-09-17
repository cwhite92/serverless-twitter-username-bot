export default class EmojiTimeConverter {
    mappings: Object = {
        0: {0: '\ud83d\udd5b', 30: '\ud83d\udd67'},
        1: {0: '\ud83d\udd50', 30: '\ud83d\udd5c'},
        2: {0: '\ud83d\udd51', 30: '\ud83d\udd5d'},
        3: {0: '\ud83d\udd52', 30: '\ud83d\udd5e'},
        4: {0: '\ud83d\udd53', 30: '\ud83d\udd5f'},
        5: {0: '\ud83d\udd54', 30: '\ud83d\udd60'},
        6: {0: '\ud83d\udd55', 30: '\ud83d\udd61'},
        7: {0: '\ud83d\udd56', 30: '\ud83d\udd62'},
        8: {0: '\ud83d\udd57', 30: '\ud83d\udd63'},
        9: {0: '\ud83d\udd58', 30: '\ud83d\udd64'},
        10: {0: '\ud83d\udd59', 30: '\ud83d\udd65'},
        11: {0: '\ud83d\udd5a', 30: '\ud83d\udd66'},
        12: {0: '\ud83d\udd5b', 30: '\ud83d\udd67'},
        13: {0: '\ud83d\udd50', 30: '\ud83d\udd5c'},
        14: {0: '\ud83d\udd51', 30: '\ud83d\udd5d'},
        15: {0: '\ud83d\udd52', 30: '\ud83d\udd5e'},
        16: {0: '\ud83d\udd53', 30: '\ud83d\udd5f'},
        17: {0: '\ud83d\udd54', 30: '\ud83d\udd60'},
        18: {0: '\ud83d\udd55', 30: '\ud83d\udd61'},
        19: {0: '\ud83d\udd56', 30: '\ud83d\udd62'},
        20: {0: '\ud83d\udd57', 30: '\ud83d\udd63'},
        21: {0: '\ud83d\udd58', 30: '\ud83d\udd64'},
        22: {0: '\ud83d\udd59', 30: '\ud83d\udd65'},
        23: {0: '\ud83d\udd5a', 30: '\ud83d\udd66'}
    };

    public emojiForTime(time: Date): string {
        time = this.roundToNearestHalfHour(time);

        return this.mapToEmoji(time);
    }

    protected roundToNearestHalfHour(time: Date): Date {
        let x = 1000 * 60 * 30;

        return new Date(time.getTime() - (time.getTime() % x));
    }

    protected mapToEmoji(time: Date): string {
        let hour = time.getHours();
        let minute = time.getMinutes();

        return this.mappings[hour][minute];
    }
}