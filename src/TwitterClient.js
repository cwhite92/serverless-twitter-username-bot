"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator.throw(value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments)).next());
    });
};
class TwitterClient {
    constructor(client) {
        this.client = client;
    }
    /**
     * Returns the profile name of the provided user.
     *
     * @param username
     * @returns {Promise<string>}
     */
    getName(username) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise((resolve, reject) => {
                this.client.get('users/show', { screen_name: username }, function (error, profile) {
                    if (error) {
                        reject(error);
                    }
                    resolve(profile.name);
                });
            });
        });
    }
    /**
     * Sets the profile name for the authenticated user.
     *
     * @param name
     * @returns {Promise<void>}
     */
    setName(name) {
        return __awaiter(this, void 0, Promise, function* () {
            return new Promise((resolve, reject) => {
                this.client.post('account/update_profile', { name: name }, function (error) {
                    if (error) {
                        reject(error);
                    }
                    resolve();
                });
            });
        });
    }
}
exports.default = TwitterClient;
