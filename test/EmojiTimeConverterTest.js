"use strict";
const EmojiTimeConverter_1 = require("../src/EmojiTimeConverter");
describe("EmojiTimeConverter", () => {
    describe("emojiForTime", () => {
        it("converts time to emoji", () => {
            let emojiTimeConverter = new EmojiTimeConverter_1.default();
            let date = new Date(2016, 9, 17, 3, 0, 0);
            let result = emojiTimeConverter.emojiForTime(date);
            expect(result).toEqual("\ud83d\udd52");
        });
        it("rounds first half of hour to 0 minutes", () => {
            let emojiTimeConverter = new EmojiTimeConverter_1.default();
            for (let i = 0; i < 30; i++) {
                let date = new Date(2016, 9, 17, 3, i, 0);
                let result = emojiTimeConverter.emojiForTime(date);
                expect(result).toEqual("\ud83d\udd52");
            }
        });
        it("rounds second half of hour to 30 minutes", () => {
            let emojiTimeConverter = new EmojiTimeConverter_1.default();
            for (let i = 30; i < 60; i++) {
                let date = new Date(2016, 9, 17, 3, i, 0);
                let result = emojiTimeConverter.emojiForTime(date);
                expect(result).toEqual("\ud83d\udd5e");
            }
        });
    });
});
