"use strict";
class EmojiTimeConverter {
    constructor() {
        /**
         * Holds the mappings between times and emoji that represents those times.
         * First object holds the hours, inner objects hold the minutes.
         *
         * @type Object
         */
        this.mappings = {
            0: { 0: '\ud83d\udd5b', 30: '\ud83d\udd67' },
            1: { 0: '\ud83d\udd50', 30: '\ud83d\udd5c' },
            2: { 0: '\ud83d\udd51', 30: '\ud83d\udd5d' },
            3: { 0: '\ud83d\udd52', 30: '\ud83d\udd5e' },
            4: { 0: '\ud83d\udd53', 30: '\ud83d\udd5f' },
            5: { 0: '\ud83d\udd54', 30: '\ud83d\udd60' },
            6: { 0: '\ud83d\udd55', 30: '\ud83d\udd61' },
            7: { 0: '\ud83d\udd56', 30: '\ud83d\udd62' },
            8: { 0: '\ud83d\udd57', 30: '\ud83d\udd63' },
            9: { 0: '\ud83d\udd58', 30: '\ud83d\udd64' },
            10: { 0: '\ud83d\udd59', 30: '\ud83d\udd65' },
            11: { 0: '\ud83d\udd5a', 30: '\ud83d\udd66' },
            12: { 0: '\ud83d\udd5b', 30: '\ud83d\udd67' },
            13: { 0: '\ud83d\udd50', 30: '\ud83d\udd5c' },
            14: { 0: '\ud83d\udd51', 30: '\ud83d\udd5d' },
            15: { 0: '\ud83d\udd52', 30: '\ud83d\udd5e' },
            16: { 0: '\ud83d\udd53', 30: '\ud83d\udd5f' },
            17: { 0: '\ud83d\udd54', 30: '\ud83d\udd60' },
            18: { 0: '\ud83d\udd55', 30: '\ud83d\udd61' },
            19: { 0: '\ud83d\udd56', 30: '\ud83d\udd62' },
            20: { 0: '\ud83d\udd57', 30: '\ud83d\udd63' },
            21: { 0: '\ud83d\udd58', 30: '\ud83d\udd64' },
            22: { 0: '\ud83d\udd59', 30: '\ud83d\udd65' },
            23: { 0: '\ud83d\udd5a', 30: '\ud83d\udd66' }
        };
    }
    /**
     * Converts a Javascript Date object into an emoji representing that time.
     *
     * @param time
     * @returns {string}
     */
    emojiForTime(time) {
        time = this.floorToNearestHalfHour(time);
        return this.mapToEmoji(time);
    }
    /**
     * Floors a Javascript Date object to the last 30 minute increment.
     *
     * @param time
     * @returns {Date}
     */
    floorToNearestHalfHour(time) {
        let x = 1000 * 60 * 30;
        return new Date(time.getTime() - (time.getTime() % x));
    }
    /**
     * Maps the given Javascript date object to an emoji.
     *
     * @param time
     * @returns {any}
     */
    mapToEmoji(time) {
        let hour = time.getHours();
        let minute = time.getMinutes();
        return this.mappings[hour][minute];
    }
}
exports.default = EmojiTimeConverter;
