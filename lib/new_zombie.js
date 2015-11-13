/**
 * Create a new zombie instance.
 * @function newZombie
 */

"use strict";

const findout = require('findout');


/** @lends newZombie */
function newZombie() {
    const Zombie = findout('zombie', {safe: true});
    if (!Zombie) {
        throw new Error('zombie.js not found. try `npm i zombie --save');
    }
    return new Zombie();
}

module.exports = newZombie;
